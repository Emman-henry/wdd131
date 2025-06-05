document.getElementById("currentyear").textContent= new Date().getFullYear();
document.getElementById("lastModified").textContent= `Last Modified: ${document.lastModified}`;

const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = 5; // store numeric wind speed
  document.getElementById("wind").textContent = windSpeed + " km/h";

  function calculateWindChill(a, b) {
  if (a <= 10 && b > 4.8) {
    return (
      13.12 +
      0.6215 * a -
      11.37 * Math.pow(b, 0.16) +
      0.3965 * a * Math.pow(b, 0.16)
    ).toFixed(1); // rounds result to 1 decimal place
  } else {
    return "N/A";
  }
}


  let windchill = calculateWindChill(temp, windSpeed);
  document.getElementById("windchill").textContent = windchill + "°C";