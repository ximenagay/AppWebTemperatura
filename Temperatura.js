const temperaturaCelsius = Number(prompt("Ingrese una temperatura en grados Celsius: "))

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
let temperaturaKelvin = temperaturaCelsius + 273.15;

console.log("temperaturaFahrenheit: " + temperaturaFahrenheit + " F°");
console.log("temperaturaKelvin: " + temperaturaKelvin + " K");
