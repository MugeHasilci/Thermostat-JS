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

  function updateCurrentTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
