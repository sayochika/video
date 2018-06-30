Feature: Search Cars
		In order to view different cars for sale
		As an Autotrader customer
		I want the ability to search for a car of my choice 
@anycar
Scenario: Search for any car on homepage search box
		Given I navigate to Autotrader homepage
		And Autotrader logo is displayed 
		When I enter my postcode as "M40 2EB"
		And I select a "Within 35 miles" distance from my postcode
		And I select "Mazda" from make dropdown
		And I select "Mazda6" from model dropdown
		And I click on Search Cars button
		Then the result of the search for "Mazda" is displayed
		And all the cars displayed belong only to "Mazda"
		And I click on one of the cars displayed
		And the detail of the car clicked on is displayed

@tabular		
Scenario Outline: Search for any car on homepage search box
		Given I navigate to Autotrader homepage
		And Autotrader logo is displayed 
		When I enter my postcode as "<Postcode>"
		And I select a "<Distance>" distance from my postcode
		And I select "<Make>" from make dropdown
		And I select "<Model>" from model dropdown
		And I click on Search Cars button
		Then the result of the search for "<Make>" is displayed
		And all the cars displayed belong only to "<Make>"
		
Scenarios:
  |Postcode|Distance       |Make |Model   |
  |M40 2EB |Within 35 miles|Mazda|Mazda6  |
  |OL9 8LE |Within 30 miles|Fiat |500L	  |
  |M40 2EB |Within 50 miles|Kia	 |Sportage|
  |OL9 8LE |Within 20 miles|Jeep |Renegade|