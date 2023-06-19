window.addEventListener('DOMContentLoaded', function() {
    var celsiusInput = document.getElementById('celsius-input');
    var fahrenheitInput = document.getElementById('fahrenheit-input');
    var convertBtn = document.getElementById('convert-btn');
    var resultText = document.getElementById('result-text');
  
    convertBtn.addEventListener('click', function() {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = parseFloat(fahrenheitInput.value);
  
      if (!isNaN(celsius) && isNaN(fahrenheit)) {
        var convertedFahrenheit = (celsius * 9/5) + 32;
        resultText.textContent = celsius + "°C is equal to " + convertedFahrenheit.toFixed(2) + "°F";
      } else if (isNaN(celsius) && !isNaN(fahrenheit)) {
        var convertedCelsius = (fahrenheit - 32) * 5/9;
        resultText.textContent = fahrenheit + "°F is equal to " + convertedCelsius.toFixed(2) + "°C";
      } else {
        resultText.textContent = "Please enter a valid temperature.";
      }
    });
  });
  
  