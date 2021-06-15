if (document.getElementById("katalon_only_element") == null) {
  let div = document.createElement("div");
  div.id = "katalon_only_element";
  document.body.appendChild(div);
  // Save attribute to local storage
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type == "attributes") {
        let currentTc = document
          .getElementById("katalon_only_element")
          .getAttribute("value");
        setTestCaseHashedId(currentTc, function () {
          console.log("Test case hashed ID is saved");
        });
      }
    });
  });

  observer.observe(div, {
    attributes: true, //configure it to listen to attribute changes
  });
}

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.command == "CAPTURE_MHTML") {
    getTestCaseHashedId(function (testCaseHashedId) {
      sendResponse({ value: testCaseHashedId });
    });
  }
  // Must return true if sendResponse is to be executed asynchronously
  return true;
});

function getTestCaseHashedId(callback) {
  chrome.storage.local.get("testCaseHashedId", function (data) {
    if (data.testCaseHashedId === undefined) {
      callback(true);
    } else {
      callback(data.testCaseHashedId);
    }
  });
}

function setTestCaseHashedId(value, callback) {
  chrome.storage.local.set({ testCaseHashedId: value }, function () {
    if (chrome.runtime.lastError) {
      throw Error(chrome.runtime.lastError);
    } else {
      callback();
    }
  });
}
