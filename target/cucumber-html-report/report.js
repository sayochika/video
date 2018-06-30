$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SearchForAnyCar.feature");
formatter.feature({
  "line": 1,
  "name": "Search Cars",
  "description": "In order to view different cars for sale\r\nAs an Autotrader customer\r\nI want the ability to search for a car of my choice",
  "id": "search-cars",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16515310419,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.31 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027Business-PC\u0027, ip: \u0027192.168.8.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\Sayo\\AppData\\Local\\Temp\\scoped_dir18548_32278}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 3f5079749c748253cb092d2a3b337aeb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat cucumber.helper.Helper.LaunchBrowser(Helper.java:82)\r\n\tat cucumber.steps.AutotraderHooks.setUp(AutotraderHooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "Search for any car on homepage search box",
  "description": "",
  "id": "search-cars;search-for-any-car-on-homepage-search-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@anycar"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my postcode as \"M40 2EB\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select a \"Within 35 miles\" distance from my postcode",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"Mazda\" from make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"Mazda6\" from model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Search Cars button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the result of the search for \"Mazda\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "all the cars displayed belong only to \"Mazda\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on one of the cars displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the detail of the car clicked on is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AutotraderSearchSteps.NavigateToAutotraderHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.AutotraderLogoIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M40 2EB",
      "offset": 24
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iEnterMyPostcodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 35 miles",
      "offset": 12
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectADistanceFromMyPostcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromMakeDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda6",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromModelDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.IClickOnSearchCarsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 30
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.theResultOfTheSearchForIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 39
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.allTheCarsDisplayedBelongOnlyTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderParamerizedSearchSteps.i_click_on_one_of_the_cars_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderParamerizedSearchSteps.the_detail_of_the_car_clicked_on_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3343741354,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Search for any car on homepage search box",
  "description": "",
  "id": "search-cars;search-for-any-car-on-homepage-search-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tabular"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter my postcode as \"\u003cPostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select a \"\u003cDistance\u003e\" distance from my postcode",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003cMake\u003e\" from make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"\u003cModel\u003e\" from model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Search Cars button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the result of the search for \"\u003cMake\u003e\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "all the cars displayed belong only to \"\u003cMake\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "search-cars;search-for-any-car-on-homepage-search-box;",
  "rows": [
    {
      "cells": [
        "Postcode",
        "Distance",
        "Make",
        "Model"
      ],
      "line": 32,
      "id": "search-cars;search-for-any-car-on-homepage-search-box;;1"
    },
    {
      "cells": [
        "M40 2EB",
        "Within 35 miles",
        "Mazda",
        "Mazda6"
      ],
      "line": 33,
      "id": "search-cars;search-for-any-car-on-homepage-search-box;;2"
    },
    {
      "cells": [
        "OL9 8LE",
        "Within 30 miles",
        "Fiat",
        "500L"
      ],
      "line": 34,
      "id": "search-cars;search-for-any-car-on-homepage-search-box;;3"
    },
    {
      "cells": [
        "M40 2EB",
        "Within 50 miles",
        "Kia",
        "Sportage"
      ],
      "line": 35,
      "id": "search-cars;search-for-any-car-on-homepage-search-box;;4"
    },
    {
      "cells": [
        "OL9 8LE",
        "Within 20 miles",
        "Jeep",
        "Renegade"
      ],
      "line": 36,
      "id": "search-cars;search-for-any-car-on-homepage-search-box;;5"
    }
  ],
  "keyword": "Scenarios"
});
formatter.before({
  "duration": 4638214115,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.02 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027Business-PC\u0027, ip: \u0027192.168.8.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\Sayo\\AppData\\Local\\Temp\\scoped_dir16960_31009}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 2a79ca7dcee2c5fad8b0bd8453140d1a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat cucumber.helper.Helper.LaunchBrowser(Helper.java:82)\r\n\tat cucumber.steps.AutotraderHooks.setUp(AutotraderHooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "Search for any car on homepage search box",
  "description": "",
  "id": "search-cars;search-for-any-car-on-homepage-search-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tabular"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter my postcode as \"M40 2EB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select a \"Within 35 miles\" distance from my postcode",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Mazda\" from make dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Mazda6\" from model dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Search Cars button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the result of the search for \"Mazda\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "all the cars displayed belong only to \"Mazda\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AutotraderSearchSteps.NavigateToAutotraderHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.AutotraderLogoIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M40 2EB",
      "offset": 24
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iEnterMyPostcodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 35 miles",
      "offset": 12
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectADistanceFromMyPostcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromMakeDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda6",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromModelDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.IClickOnSearchCarsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 30
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.theResultOfTheSearchForIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 39
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.allTheCarsDisplayedBelongOnlyTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2126563641,
  "status": "passed"
});
formatter.before({
  "duration": 4811398780,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.02 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027Business-PC\u0027, ip: \u0027192.168.8.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\Sayo\\AppData\\Local\\Temp\\scoped_dir14656_1182}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 86e0b0500d9d61189efb1177a283de3e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat cucumber.helper.Helper.LaunchBrowser(Helper.java:82)\r\n\tat cucumber.steps.AutotraderHooks.setUp(AutotraderHooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "Search for any car on homepage search box",
  "description": "",
  "id": "search-cars;search-for-any-car-on-homepage-search-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tabular"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter my postcode as \"OL9 8LE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select a \"Within 30 miles\" distance from my postcode",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Fiat\" from make dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"500L\" from model dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Search Cars button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the result of the search for \"Fiat\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "all the cars displayed belong only to \"Fiat\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AutotraderSearchSteps.NavigateToAutotraderHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.AutotraderLogoIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OL9 8LE",
      "offset": 24
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iEnterMyPostcodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 30 miles",
      "offset": 12
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectADistanceFromMyPostcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fiat",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromMakeDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500L",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromModelDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.IClickOnSearchCarsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fiat",
      "offset": 30
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.theResultOfTheSearchForIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fiat",
      "offset": 39
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.allTheCarsDisplayedBelongOnlyTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2467267405,
  "status": "passed"
});
formatter.before({
  "duration": 4579497312,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.01 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027Business-PC\u0027, ip: \u0027192.168.8.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\Sayo\\AppData\\Local\\Temp\\scoped_dir13612_29514}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 269eeda0b8ce52081835ad244960c9a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat cucumber.helper.Helper.LaunchBrowser(Helper.java:82)\r\n\tat cucumber.steps.AutotraderHooks.setUp(AutotraderHooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "Search for any car on homepage search box",
  "description": "",
  "id": "search-cars;search-for-any-car-on-homepage-search-box;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tabular"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter my postcode as \"M40 2EB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select a \"Within 50 miles\" distance from my postcode",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Kia\" from make dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Sportage\" from model dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Search Cars button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the result of the search for \"Kia\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "all the cars displayed belong only to \"Kia\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AutotraderSearchSteps.NavigateToAutotraderHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.AutotraderLogoIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M40 2EB",
      "offset": 24
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iEnterMyPostcodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 50 miles",
      "offset": 12
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectADistanceFromMyPostcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromMakeDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sportage",
      "offset": 10
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.iSelectFromModelDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AutotraderSearchSteps.IClickOnSearchCarsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 30
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.theResultOfTheSearchForIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 39
    }
  ],
  "location": "AutotraderParamerizedSearchSteps.allTheCarsDisplayedBelongOnlyTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2742374415,
  "status": "passed"
});
