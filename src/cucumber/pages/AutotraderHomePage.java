package cucumber.pages;

import org.openqa.selenium.WebElement;

import cucumber.helper.Helper;

public class AutotraderHomePage  extends Helper
{
	private final String autotraderUrl = "http://www.autotrader.co.uk/";
	
	private WebElement logo;
	private WebElement postcode;
	private WebElement distance;
	private WebElement make;
	private WebElement searchButton;
	private WebElement model;
	
	public void navigateToAutotraderHomepage() throws Exception
	{
		launchUrl(autotraderUrl);
	}
	
	
	public void isLogoDisplayed() throws Exception
	{
		logo = getElementByCssSelector(".at-logo.tracking-header-link");
		VerifyAnElementIsDisplayed(logo);
	}
	
	public void enterPostcodeValue(String code) throws Exception
	{
		postcode = getElementById("postcode");
		postcode.clear();
		postcode.sendKeys(code);
	}
	
	public void selectDistanceFromPostCode(String dist) throws Exception
	{
		distance = getElementById("radius");
		selectByText(distance, dist);
	}
	
	public void selectCarMake(String carMake) throws Exception
	{
		make = getElementById("searchVehiclesMake");
		selectByValue(make, carMake.toUpperCase());
	}
	
	public void selectCarModel(String carModel) throws Exception
	{
		make = getElementById("searchVehiclesModel");
		selectByValue(make, carModel.toUpperCase());
	}
	
	public AutotraderSearchResultPage clickOnSearchButton() throws Exception
	{
		searchButton = getElementById("search");
		searchButton.click();
		
		return new AutotraderSearchResultPage();
	}
	
}
