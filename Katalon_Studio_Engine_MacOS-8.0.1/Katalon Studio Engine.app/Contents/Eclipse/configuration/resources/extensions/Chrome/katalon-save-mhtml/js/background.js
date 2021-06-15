var clientSocket = null;

function tryToConnect() {
  let port = 12954;
  var socketUrl = "ws://localhost:" + port + "/test_execution/";
  try {
    var tempSocket = new WebSocket(socketUrl);
    tempSocket.onmessage = function (event) {
      console.log(
        'Katalon Capture MHTML received message from Katalon Studio: "' +
          event.data +
          '"'
      );
      handleServerMessage(event.data);
    };
    tempSocket.onopen = function (event) {
      console.log("Katalon Capture MHTML is connected to KS");
      clientSocket = tempSocket;
      clientSocket.onclose = function (event) {
        clientSocket = null;
        setTimeout(tryToConnect, 300);
      };
    };
    tempSocket.onerror = function (event) {
      setTimeout(tryToConnect, 300);
    };
  } catch (e) {
    setTimeout(tryToConnect, 300);
  }
}

function waitForConnection() {
  if (clientSocket) {
    return;
  }
  tryToConnect();
}

waitForConnection();

function handleServerMessage(message) {
  if (clientSocket == null || !message) {
    return;
  }
  var jsonMessage = JSON.parse(message);
  var a = null;

  switch (jsonMessage.command) {
    case "EXECUTION_ENDED":
      chrome.tabs.query({}, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { command: "CAPTURE_MHTML" },
          function (response) {
            console.log(response.value);
            captureMhtml(response.value, tabs[0].id);
          }
        );
      });
      break;
    default:
      break;
  }
}

const captureMhtml = (testArtifactId, currentTabId) =>
  chrome.pageCapture.saveAsMHTML({ tabId: currentTabId }, (htmlData) => {
    if (htmlData) {
      console.log(
        "Captured MHTML of the page succesfully, sending to KS ... !"
      );
      clientSocket.send(new Blob([testArtifactId, htmlData]));
      console.log("Sent to KS !");
    }
  });
