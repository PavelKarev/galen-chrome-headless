importClass(org.openqa.selenium.chrome.ChromeOptions);
importClass(org.openqa.selenium.chrome.ChromeDriver);
importClass(com.galenframework.utils.GalenUtils);
importClass(com.galenframework.browser.SeleniumBrowser);

System.setProperty("webdriver.chrome.driver",
           "selenium/chromedriver");

var pageUrl = args[0];
var size = GalenUtils.readSize(args[1]);
var options = new ChromeOptions();

options.addArguments("headless");
options.addArguments("disable-gpu");
options.addArguments("no-sandbox");

var driver = new ChromeDriver(options);
var browser = new SeleniumBrowser(driver);

browser.load(pageUrl);
browser.changeWindowSize(size);

browser;