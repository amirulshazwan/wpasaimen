
function calculateCurrencyConversion() {
    var amount = parseFloat(document.getElementById('amountCurrency').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    var exchangeRates = {
        usd: 0.21,
        eur: 0.19,
        gbp: 0.17,
        myr: 1.00,
    };

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (fromCurrency === toCurrency) {
        alert("Please select different currencies for conversion.");
        return;
    }

    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
        alert("Invalid currency selection.");
        return;
    }

    var result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

    document.getElementById('resultCurrency').innerHTML = 'Result: ' + result.toFixed(2);
}

function calculateMeasurementConversion() {
    var amount = parseFloat(document.getElementById('amountMeasurement').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    var conversionFactors = {
        meter: {
            centimeter: 100,
            kilometer: 0.001,
            inch: 39.3701,
            foot: 3.28084,
            yard: 1.09361,
            milliliter: 1000,
            liter: 1,
            cubicMeter: 0.001,
        },
        centimeter: {
            meter: 0.01,
            kilometer: 1e-5,
            inch: 0.393701,
            foot: 0.0328084,
            yard: 0.0109361,
            milliliter: 10,
            liter: 0.01,
            cubicMeter: 1e-6,
        },
        kilometer: {
            meter: 1000,
            centimeter: 100000,
            inch: 39370.1,
            foot: 3280.84,
            yard: 1093.61,
            milliliter: 1e6,
            liter: 1000,
            cubicMeter: 1,
        },
        inch: {
            meter: 0.0254,
            centimeter: 2.54,
            kilometer: 2.54e-5,
            foot: 0.0833333,
            yard: 0.0277778,
            milliliter: 25.4,
            liter: 0.0254,
            cubicMeter: 2.54e-5,
        },
        foot: {
            meter: 0.3048,
            centimeter: 30.48,
            kilometer: 3.048e-4,
            inch: 12,
            yard: 0.333333,
            milliliter: 304.8,
            liter: 0.3048,
            cubicMeter: 3.048e-4,
        },
        yard: {
            meter: 0.9144,
            centimeter: 91.44,
            kilometer: 9.144e-4,
            inch: 36,
            foot: 3,
            milliliter: 914.4,
            liter: 0.9144,
            cubicMeter: 9.144e-4,
        },
        milliliter: {
            meter: 0.001,
            centimeter: 0.1,
            kilometer: 1e-9,
            inch: 0.0393701,
            foot: 0.00328084,
            yard: 0.00109361,
            liter: 0.001,
            cubicMeter: 1e-6,
        },
        liter: {
            meter: 1,
            centimeter: 100,
            kilometer: 1e-6,
            inch: 61.0237,
            foot: 0.0353147,
            yard: 0.00130795,
            milliliter: 1000,
            cubicMeter: 0.001,
        },
        cubicMeter: {
            meter: 1000,
            centimeter: 1e6,
            kilometer: 1,
            inch: 61023.7,
            foot: 35.3147,
            yard: 1.30795,
            milliliter: 1e6,
            liter: 1000,
        },
    };

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (fromUnit === toUnit) {
        alert("Please select different units for conversion.");
        return;
    }

    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors[fromUnit])) {
        alert("Invalid unit selection.");
        return;
    }

    var result = amount * conversionFactors[fromUnit][toUnit];

    document.getElementById('resultMeasurement').innerHTML = 'Result: ' + result.toFixed(2) + ' ' + toUnit;
}


function calculateWeightConversion() {
    var amount = parseFloat(document.getElementById('amountWeight').value);
    var fromUnit = document.getElementById('fromWeight').value;
    var toUnit = document.getElementById('toWeight').value;

    var conversionFactors = {
        gram: {
            kilogram: 0.001,
            pound: 0.00220462,
        },
        kilogram: {
            gram: 1000,
            pound: 2.20462,
        },
        pound: {
            gram: 453.592,
            kilogram: 0.453592,
        },
    };

    performConversion(amount, fromUnit, toUnit, conversionFactors, 'resultWeight');
}

function calculateCharacterConversion() {
    var textInput = document.getElementById('textInput').value;
    var conversionType = document.getElementById('conversionType').value;

    if (textInput.trim() === '') {
        alert("Please enter some text.");
        return;
    }

    var result;

    if (conversionType === 'uppercase') {
        result = textInput.toUpperCase();
    } else if (conversionType === 'lowercase') {
        result = textInput.toLowerCase();
    } else {
        alert("Invalid conversion type.");
        return;
    }

    document.getElementById('resultCharacter').innerHTML = 'Result: ' + result;
}

function calculateTemperatureConversion() {
    var temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    var fromUnit = document.getElementById('fromTemperature').value;
    var toUnit = document.getElementById('toTemperature').value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    var result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (temperatureInput - 32) * 5/9;
    } else {
        alert("Invalid temperature conversion.");
        return;
    }

    document.getElementById('resultTemperature').innerHTML = 'Result: ' + result.toFixed(2) + ' ' + toUnit;
}

function calculateTimeConversion() {
    var timeInput = parseFloat(document.getElementById('timeInput').value);
    var fromUnit = document.getElementById('fromTime').value;
    var toUnit = document.getElementById('toTime').value;

    if (isNaN(timeInput)) {
        alert("Please enter a valid time.");
        return;
    }

    var result;

    if (fromUnit === 'hours' && toUnit === 'minutes') {
        result = timeInput * 60;
    } else if (fromUnit === 'hours' && toUnit === 'seconds') {
        result = timeInput * 3600;
    } else if (fromUnit === 'minutes' && toUnit === 'hours') {
        result = timeInput / 60;
    } else if (fromUnit === 'minutes' && toUnit === 'seconds') {
        result = timeInput * 60;
    } else if (fromUnit === 'seconds' && toUnit === 'hours') {
        result = timeInput / 3600;
    } else if (fromUnit === 'seconds' && toUnit === 'minutes') {
        result = timeInput / 60;
    } else {
        alert("Invalid time conversion.");
        return;
    }

    document.getElementById('resultTime').innerHTML = 'Result: ' + result.toFixed(2) + ' ' + toUnit;
}

function performConversion(amount, fromUnit, toUnit, conversionFactors, resultElementId) {
    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (fromUnit === toUnit) {
        alert("Please select different units for conversion.");
        return;
    }

    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors[fromUnit])) {
        alert("Invalid unit selection.");
        return;
    }

    var result = amount * conversionFactors[fromUnit][toUnit];

    document.getElementById(resultElementId).innerHTML = 'Result: ' + result.toFixed(2) + ' ' + toUnit;
}