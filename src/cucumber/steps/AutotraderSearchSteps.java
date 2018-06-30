package cucumber.steps;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.helper.Helper;
import cucumber.pages.AutotraderHomePage;
import cucumber.pages.AutotraderSearchResultPage;

public class AutotraderSearchSteps extends Helper
{
	AutotraderHomePage homepage = new AutotraderHomePage();	
	AutotraderSearchResultPage searchResultPage = new AutotraderSearchResultPage();
	
	@Given("^I navigate to Autotrader homepage$")
	public void NavigateToAutotraderHomepage() throws Throwable {
		homepage.navigateToAutotraderHomepage();
	    
	}

	@Given("^Autotrader logo is displayed$")
	public void AutotraderLogoIsDisplayed() throws Throwable {
		homepage.isLogoDisplayed();
		
	}
	
	@When("^I enter my postcode$")
	public void IEnterMyPostcode() throws Throwable {
	    homepage.enterPostcodeValue("OL9 8LE");
	}

	@When("^I select a distance from my postcode$")
	public void ISelectADistanceFromMyPostcode() throws Throwable {
	    homepage.selectDistanceFromPostCode("Within 35 miles");
	}

	@When("^I select Audi from make dropdown$")
	public void ISelectAudiFromMakeDropdown() throws Throwable {
		homepage.selectCarMake("Audi");
	}

	@When("^I click on Search Cars button$")
	public void IClickOnSearchCarsButton() throws Throwable {
		searchResultPage = homepage.clickOnSearchButton();
	}

	@Then("^the result of the search for Audi is displayed$")
	public void TheResultOfTheSearchForAudiIsDisplayed() throws Throwable {
	    searchResultPage.DoesSearchReturnAnyResult();
	}

	@Then("^all the cars displayed belong only to Audi$")
	public void AllTheCarsDisplayedBelongOnlyToAudi() throws Throwable {
	   
	}
	
	@Then("^Search Result page is displayed$")
	public void SearchResultPageIsDisplayed() throws Throwable {
	    
	}

}
