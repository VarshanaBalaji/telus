# Telus

This an example of choosing a home phone plan from Telus.com and adding it to the cart.

For this automation, the following are the prerequisites:

Installing NodeJS:
  1. Navigate to the NodeJS website.
  2. Download the most recent Long-Term Support (LTS) version.
  3. Once you have downloaded the installer, open it and step through the installation.
  
Prepare your workspace:
  Create a directory where ever you want your workspace to be and create the following 2 new folders:
      a. bin 
      b. tests

Selenium Server:
  1. Navigate to Selenium Downloads page.
  2. Download the latest version of Selenium Standalone Server.
  3. This should download a JAR file, simply copy/paste this file into the bin folder.

Chrome Driver:
  1. Navigate to the Chrome Driver Downloads.
  2. Choose the relevant zip file for download.
  3. You should extract the contents of this ZIP file into the bin folder we created in the steps above.
  
Installing Nightwatch.js:
  1. Create a Nightwatch configuration file:
    a. create a file called nightwatch.json in the created directory(or workspace) having the following contents:
    
  {
  "src_folders" : ["tests"],
  "output_folder" : "reports",

  "selenium" : {
    "start_process" : true,
    "server_path" : "bin/selenium-server-standalone-3.0.1.jar",
    "log_path" : "",
    "port" : 4444,

    "cli_args" : {
      "webdriver.chrome.driver" : "bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,

      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },

      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}

Install Nightwatch: 
  1. Go to your workspace in terminal and run npm install nightwatch.
  
Create all your tests in the tests folder of your workspace.
