package cucumber.steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.helper.Helper;
import cucumber.pages.AutotraderDetailPage;
import cucumber.pages.AutotraderHomePage;
import cucumber.pages.AutotraderSearchResultPage;

public class AutotraderParamerizedSearchSteps extends Helper{
	
	AutotraderHomePage homepage = new AutotraderHomePage();
	AutotraderSearchResultPage searchResultPage = new AutotraderSearchResultPage();
	AutotraderDetailPage detailPage = new AutotraderDetailPage();
	
	@When("^I enter my postcode as \"([^\"]*)\"$")
	public void iEnterMyPostcodeAs(String postCode) throws Throwable {
	    homepage.enterPostcodeValue(postCode);
	}

	@When("^I select a \"([^\"]*)\" distance from my postcode$")
	public void iSelectADistanceFromMyPostcode(String distance) throws Throwable {
	    homepage.selectDistanceFromPostCode(distance);
	}

	@When("^I select \"([^\"]*)\" from make dropdown$")
	public void iSelectFromMakeDropdown(String make) throws Throwable {
	   homepage.selectCarMake(make);
	}

	@When("^I select \"([^\"]*)\" from model dropdown$")
	public void iSelectFromModelDropdown(String model) throws Throwable {
	    homepage.selectCarModel(model);
	}

	@Then("^the result of the search for \"([^\"]*)\" is displayed$")
	public void theResultOfTheSearchForIsDisplayed(String car) throws Throwable {
	    searchResultPage.IsCarSearchedForDisplayed(car);
	}

	@Then("^all the cars displayed belong only to \"([^\"]*)\"$")
	public void allTheCarsDisplayedBelongOnlyTo(String car) throws Throwable {
	
	}
	
	@Then("^I click on one of the cars displayed$")
	public void i_click_on_one_of_the_cars_displayed() throws Throwable {
	    detailPage = searchResultPage.clickOnARandomResult();
	}

	@Then("^the detail of the car clicked on is displayed$")
	public void the_detail_of_the_car_clicked_on_is_displayed() throws Throwable {
	    detailPage.isCorrectCarDisplayed();
	}



}
