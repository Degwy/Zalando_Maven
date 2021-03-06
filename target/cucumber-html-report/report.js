$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Add_Items_to_Bag.feature");
formatter.feature({
  "line": 1,
  "name": "As​ a client​ I would​ like​ to​ add​ products​ to​ the​ shopping​ basket.",
  "description": "",
  "id": "as​-a-client​-i-would​-like​-to​-add​-products​-to​-the​-shopping​-basket.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2933121296,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open \u0027https://www.zalando.com\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I want to start shoping using \u0027Zalando.UK\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zalando.com",
      "offset": 8
    }
  ],
  "location": "Steps.open_url(String)"
});
formatter.result({
  "duration": 4832032376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zalando.UK",
      "offset": 31
    }
  ],
  "location": "Steps.select_shop(String)"
});
formatter.result({
  "duration": 79786248929,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "As​ a client​ I would​ like​ to​ add two​ products​ to​ the​ shopping​ basket.",
  "description": "",
  "id": "as​-a-client​-i-would​-like​-to​-add​-products​-to​-the​-shopping​-basket.;as​-a-client​-i-would​-like​-to​-add-two​-products​-to​-the​-shopping​-basket.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Kids\u0027 wear",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for the word \u0027babies\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I want to make the following filters on search results:",
  "rows": [
    {
      "cells": [
        "Gender:Girls",
        "Age:Babies",
        "Colour:Black",
        "Size:3K",
        "Material:Textile",
        "Brand:adidas Originals"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on item number 1",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \u00273K\u0027 size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add the item to shopping basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click back",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on item number 3",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \u00273K\u0027 size",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the item to shopping basket",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I open the shopping basket",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see 2 items in the shopping basket",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Kids",
      "offset": 12
    }
  ],
  "location": "Steps.click_on_category(String)"
});
formatter.result({
  "duration": 50241558572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "babies",
      "offset": 23
    }
  ],
  "location": "Steps.search_for_word(String)"
});
formatter.result({
  "duration": 6046255164,
  "status": "passed"
});
formatter.match({
  "location": "Steps.filter_search_results(DataTable)"
});
formatter.result({
  "duration": 57838759840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "Steps.click_on_item(String)"
});
formatter.result({
  "duration": 19238414692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3K",
      "offset": 10
    }
  ],
  "location": "Steps.select_the_size(String)"
});
formatter.result({
  "duration": 2980225591,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_to_shopping_basket()"
});
formatter.result({
  "duration": 274066036,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_back()"
});
formatter.result({
  "duration": 2381321648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "Steps.click_on_item(String)"
});
formatter.result({
  "duration": 25539635964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3K",
      "offset": 10
    }
  ],
  "location": "Steps.select_the_size(String)"
});
formatter.result({
  "duration": 3420388433,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_to_shopping_basket()"
});
formatter.result({
  "duration": 270131777,
  "status": "passed"
});
formatter.match({
  "location": "Steps.open_shopping_basket()"
});
formatter.result({
  "duration": 5375733252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "Steps.both_items_should_be_displayed(Integer)"
});
formatter.result({
  "duration": 2111585156,
  "status": "passed"
});
formatter.after({
  "duration": 107747734,
  "status": "passed"
});
});