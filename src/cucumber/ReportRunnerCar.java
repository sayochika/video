package cucumber;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"com.cucumber.listener.ExtentCucumberFormatter"},
							features = {"src/cucumber"},
							glue = {"cucumber.steps"},
							tags = {"@anycar"}
					)
public class ReportRunnerCar {
 
    @BeforeClass
    public static void setup() {
    	
    	String dateNow = new SimpleDateFormat("ddMMyy").format(new GregorianCalendar().getTime());
		String timeNow = new SimpleDateFormat("hhmmss").format(new GregorianCalendar().getTime());
		
		String fileName = String.format("C:/workspaceCucumber/Autotrader/report/%s/report_%s.html", dateNow, timeNow);
		
        // Initiates the extent report and generates the output in the output/Run_<unique timestamp>/report.html file by default.
        ExtentCucumberFormatter.
        	initiateExtentCucumberFormatter(new File(fileName));
 
        // Loads the extent config xml to customize on the report.
        ExtentCucumberFormatter.loadConfig(new File("src/cucumber/resource/extent-config.xml"));
 
        // User can add the system information as follows
        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v2.27");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.0.1");
 
        // Also you can add system information using a hash map
//        Map systemInfo = new HashMap();
//        systemInfo.put("Cucumber version", "v1.2.3");
//        systemInfo.put("Extent Cucumber Reporter version", "v1.1.1");
//        ExtentCucumberFormatter.addSystemInfo(systemInfo);
    }
 
}