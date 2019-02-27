# Thermostat-JS

OpenWeatherMap API is used to get data for various cities.
The app is built using JavaScript, jQuery, HTML & CSS
Jasmine is used for TDD.

## Motivations for this project

* First project in JavaScript, learning a new language
* Using jQuery to build interactive functionality into a webpage
* Using Jasmine to Test-Drive Development
* Making Ajax requests
* Working with APIs


## Specification

```
* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
* (low-usage indicated with blue, medium-usage indicated with green, high-usage indicated with red.)
* You can view the temperature in different cities
```

## Getting started

### To set up the project

1. clone repo to your local machine `git clone https://github.com/MugeHasilci/Thermostat-JS`
2. Run the command `open index.html` to open the app on browser

## Running test

For Jasmine tests open SpecRunner.html

## Screenshots

![Weather](./public/images/Weather.png)
