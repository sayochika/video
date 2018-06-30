package cucumber.pages;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.WebElement;

import cucumber.helper.Helper;

public class AutotraderSearchResultPage extends Helper
{
	private List<WebElement> searchResult;
	
	public void DoesSearchReturnAnyResult() throws Exception
	{
		searchResult = searchResultElements();
		VerifyListOfElementsAreDisplayed(searchResult);
	}

	private List<WebElement> searchResultElements() throws Exception {
		return getElementsByClassName("gui-test-search-result-link");
	}
	
	public void IsCarSearchedForDisplayed(String car) throws Exception
	{
		searchResult = searchResultElements();
		
		for(WebElement search : searchResult)
		{
			String searchText = search.getText();
			
			VerifyTextContainSnippet(searchText, car);
		}
	}
	
	public AutotraderDetailPage clickOnARandomResult() throws Exception
	{
		
		//Instantiated an object of Random class
		Random rand = new Random();
		
		searchResult = searchResultElements();
		
		//I obtain the total number of result displayed
		int resultSize = searchResult.size();
		
		//Using the total number of result displayed, I get a random number i.e. if the total number
		//is 10, a number between 0 and 10 is randomly generated.
		int randomNumber = rand.nextInt(resultSize);
		
		//The text that matches the index of that random number is retrieved
		String randString = searchResult.get(randomNumber).getText();
		
		//That text is stored
		storeAValue("CarDetail", randString);
		//The result that matches the random number is clicked
		searchResult.get(randomNumber).click();
		
		return new AutotraderDetailPage();
	}
}
