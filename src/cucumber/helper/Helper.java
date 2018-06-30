package cucumber.helper;



import java.io.File;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.resource.StoredValues;

public class Helper 
{
	public static WebDriver driver;
	private static Select select;
	private static Actions action;
	private static StoredValues storedValue;
	private static String OS;
	
	static
	{
		driver = null;
		select = null;
		action = null;
		storedValue = new StoredValues();
		OS = System.getProperty("os.name").toLowerCase();
	}
	
	
		
	private static WebDriver initChrome() throws Exception
	{
		if(OS.contains("win"))
		{
			System.setProperty("webdriver.chrome.driver", "./lib/browser/chromedriver.exe");
		} 
		else if(OS.contains("mac"))
		{
			System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
		}
		
		return new ChromeDriver();
	}
	
	private static WebDriver initInternetExplorer() throws Exception
	{
		System.setProperty("webdriver.chrome.driver", "./lib/browser/IEDriverServer.exe");
		return new InternetExplorerDriver();
	}
	
	public static void LaunchBrowser(String browserName) throws Exception
	{
		switch(browserName.toLowerCase())
		{
		case "chrome" :
			driver = initChrome();
			break;
		case "ie":
		case "internetexplorer":
		case "internet explorer":
			driver = initInternetExplorer();
			break;
			
			default:
				System.out.println(browserName + " is not recognised, so Chrome browser is launched");
				driver = initChrome();
		}
		
		driver.manage().window().maximize();
	}
	
	public static void closeBrowser() throws Exception
	{
		driver.manage().deleteAllCookies();
		driver.close();
		driver.quit();
	}
	
	public static void launchUrl(String url) throws Exception
	{
		driver.navigate().to(url);
	}
	
	
	public static void storeAValue(String key, String value) throws Exception
	{
		storedValue.store(key, value);
	}
	
	public static String getStoredValue(String key) throws Exception
	{
		return storedValue.get(key);
	}
	
	public static void HoverOver(WebElement element) throws Exception
	{
		action = new Actions(driver);
		action.moveToElement(element).build().perform();
	}
	
	public static void VerifyAnElementIsDisplayed(WebElement element) throws Exception
	{
		Assert.assertTrue(element + " is not displayed", element.isDisplayed());
	}
	
	public static void VerifyAnElementIsSelected(WebElement element) throws Exception
	{
		Assert.assertTrue(element + " is not displayed", element.isSelected());
	}
	
	public static void VerifyAnElementIsEnabled(WebElement element) throws Exception
	{
		Assert.assertTrue(element + " is not displayed", element.isEnabled());
	}
	
	public static void VerifyTextContainSnippet(String mainText, String snippet) throws Exception
	{
		Assert.assertTrue(snippet + " is not contained in " + mainText, 
				mainText.toLowerCase().contains(snippet.toLowerCase()));
	}
	
	public static void VerifyListOfElementsAreDisplayed(List<WebElement> element) throws Exception
	{
		Assert.assertTrue(element + " is not displayed", element.size()>0);
	}
	
	public static void VerifyListOfElementsAreDisplayed(List<WebElement> element, int size) throws Exception
	{
		Assert.assertTrue(element + " is not displayed", element.size()>size);
	}
	
	public static void selectByIndex(WebElement element, int index) throws Exception
	{
		select = new Select(element);
		select.selectByIndex(index);
	}
	
	public static void selectByValue(WebElement element, String value) throws Exception
	{
		select = new Select(element);
		select.selectByValue(value);
	}
	
	public static void selectByText(WebElement element, String text) throws Exception
	{
		select = new Select(element);
		select.selectByVisibleText(text);
	}
	
	
	public static File takeScreenShot() throws Exception
	{
		return ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	}
	
	public static void saveScreenshot() throws Exception
	{
		String dateNow = new SimpleDateFormat("ddMMyy").format(new GregorianCalendar().getTime());
		String timeNow = new SimpleDateFormat("hhmmss").format(new GregorianCalendar().getTime());
		
		String fileName = String.format(".\\Screenshots\\%s\\screenshot_%s", dateNow, timeNow);
		
		File screenshot = takeScreenShot();
		
		FileUtils.copyFile(screenshot, new File(fileName));
			
	}
	
	public static WebElement getElementById(String id) throws Exception
	{
		By locator = By.id(id);
		return getElement(locator);
	}
	
	public static List<WebElement> getElementsById(String id) throws Exception
	{
		By locator = By.id(id);
		return getElements(locator);
	}
	
	public static WebElement getElementByClassName(String className) throws Exception
	{
		By locator = By.className(className);
		return getElement(locator);
	}
	
	public static List<WebElement> getElementsByClassName(String className) throws Exception
	{
		By locator = By.className(className);
		return getElements(locator);
	}
	
	public static WebElement getElementByCssSelector(String cssSelector) throws Exception
	{
		By locator = By.cssSelector(cssSelector);
		return getElement(locator);
	}
	
	public static List<WebElement> getElementsByCssSelector(String cssSelector) throws Exception
	{
		By locator = By.cssSelector(cssSelector);
		return getElements(locator);
	}
	
	public static WebElement getElementByXPath(String xpath) throws Exception
	{
		By locator = By.xpath(xpath);
		return getElement(locator);
	}
	
	public static List<WebElement> getElementsByXPath(String xpath) throws Exception
	{
		By locator = By.xpath(xpath);
		return getElements(locator);
	}
	
	public static WebElement getElementByName(String name) throws Exception
	{
		By locator = By.name(name);
		return getElement(locator);
	}
	
	public static List<WebElement> getElementsByName(String name) throws Exception
	{
		By locator = By.name(name);
		return getElements(locator);
	}
	
	private static WebElement getElement(By locator) throws Exception
	{
		WebElement element = null;
		int tryCount = 0;
		
		while (element == null)
		{
			try
			{
				element = driver.findElement(locator);
			} 
			catch(Exception e)
			{
				if(tryCount == 3)
				{
					saveScreenshot();
					System.out.println(element.toString() + " cannot be found");
					throw e;
				}
				
				Thread.sleep(2000);
				tryCount++;
			}
		}
		System.out.println(element.toString() + " is now retrieved");
		return element;
	}
	
	private static List<WebElement> getElements(By locator) throws Exception
	{
		List<WebElement> element = null;
		int tryCount = 0;
		
		while (element == null)
		{
			try
			{
				element = driver.findElements(locator);
			} 
			catch(Exception e)
			{
				if(tryCount == 3)
				{
					saveScreenshot();
					System.out.println(element.toString() + " cannot be found");
					throw e;
				}
				
				Thread.sleep(2000);
				tryCount++;
			}
		}
		System.out.println(element.toString() + " is now retrieved");
		return element;
	}
}
