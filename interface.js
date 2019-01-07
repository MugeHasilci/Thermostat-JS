$(document).ready(function() {
  var thermostat = new Thermostat();
  updateCurrentTemperature()

  $('#temperature-up').click(function() {
    thermostat.up();
    updateCurrentTemperature()
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateCurrentTemperature()
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateCurrentTemperature()
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text(function() {
      return "ON";
    });
    updateCurrentTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text(function() {
      return "OFF";
    });
    updateCurrentTemperature();
  })

  $('#energy-usage').click(function() {
    $('#current-usage').text(function() {
      return thermostat.energyUsage();
    });
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f291797649db6dd8523a3f9847e46edd&units=metric', function(data) {
  $('#outside-temperature').text(data.main.temp);
});


  function updateCurrentTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
