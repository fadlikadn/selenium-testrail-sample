"use strict";

let webdriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const Testrail = require('testrail-api');

const TEST_CASE_PASSED_STATUS = 1;
const TEST_CASE_FAILED_STATUS = 5;

var testrail = new Testrail({
  host: '',
  user: '',
  password: '',
});

let browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
browser.get('http://www.google.com');
const promise = browser.getTitle();
promise.then(function(title) {
  testrail.addResult(/*TEST_ID=*/6, 
    /*CONTENT=*/{
    status_id: TEST_CASE_PASSED_STATUS,
    defects: "CS-4",
    comment: "This is updated from selenium"
  }, function(err, response, result) {
    console.log(err);
    console.log(result);
  });

  testrail.addResult(/*TEST_ID=*/7, 
    /*CONTENT=*/{
    status_id: TEST_CASE_PASSED_STATUS,
    defects: "CS-4",
    comment: "Testcase Login 7 run successfuly"
  }, function(err, response, result) {
    console.log(err);
    console.log(result);
  });

  testrail.addResult(/*TEST_ID=*/8, 
    /*CONTENT=*/{
    status_id: TEST_CASE_FAILED_STATUS,
    defects: "CS-4",
    comment: "Testcase Register 8 run failed"
  }, function(err, response, result) {
    console.log(err);
    console.log(result);
  });

  console.log(title);
});

browser.quit();