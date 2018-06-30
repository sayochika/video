package cucumber.steps;

import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.helper.Helper;

public class AutotraderHooks extends Helper {
	public Scenario scenario;

	@Before
	public void setUp(Scenario scenario) throws Exception {
		this.scenario = scenario;

		LaunchBrowser("Chrome");

	}

	@After
	public void tearDown(Scenario scenario) throws Exception {
		String dateNow = new SimpleDateFormat("ddMMyy").format(new GregorianCalendar().getTime());
		String timeNow = new SimpleDateFormat("hhmmss").format(new GregorianCalendar().getTime());
		
		String fileName = String.format(".\\Screenshots\\%s\\screenshot_%s", dateNow, timeNow);
		
		
		if (scenario.isFailed()) 
		{
			try {
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, fileName);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		closeBrowser();
	}

}
