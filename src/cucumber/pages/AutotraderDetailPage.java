package cucumber.pages;

import org.openqa.selenium.WebElement;

import cucumber.helper.Helper;

public class AutotraderDetailPage extends Helper
{
	private WebElement carDetail;
	
	public void isCorrectCarDisplayed() throws Exception
	{
		carDetail = getElementByCssSelector(".pricetitle__mainHeading span");
		String carText = carDetail.getText();
		String searchedCarInfo = getStoredValue("CarDetail");
		
		VerifyTextContainSnippet(carText, searchedCarInfo);
	}
}
