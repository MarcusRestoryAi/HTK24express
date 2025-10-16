/**
 * En funktion som konverterar Celcius till Farenheight
 * @param {number} celsius Värdet av temperaturen i Celcius
 * @returns Retunerar värdet i Farenheight
 */
function convertCelciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Funktion som räknar ut BMI
 * @param {number} weight Weight in Kg
 * @param {number} height Height in Meters
 * @returns Returnerar BMI valuen
 */
function calculateBMI(weight, height) {
    return weight / (height * height);
}