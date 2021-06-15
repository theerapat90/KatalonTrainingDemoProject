import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://www.yahoo.com/')

WebUI.click(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo  Mail, Weather, Search, Politics_802e32/a_Sign in'))

WebUI.click(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/a_Create anaccount'))

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Signup_firstName'), 'Tester')

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Signup_lastName'), 'Number1')

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Signup_yid'), 'number1tester')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_I want to use my current emailaddress_51eecd'), 
    '3HO45MOUHpqZ5HEXqDYnvQ==')

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Enter Country Code_phone'), '946287588')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/select_BirthMonth                January   _2ae542'), 
    '2', true)

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Enter Country Code_dd'), '14')

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Enter Country Code_yyyy'), '1991')

WebUI.setText(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/input_Enter Country Code_freeformGender'), 'Male')

WebUI.click(findTestObject('Object Repository/Page_Yahoo/Page_Yahoo/button_Continue'))

WebUI.closeBrowser()

