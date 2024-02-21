document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("shapeSelector").addEventListener("change", showCalculator);
});

function showCalculator() {
    var selectedShape = document.getElementById("shapeSelector").value;
    var calculatorContainer = document.getElementById("calculatorContainer");
    calculatorContainer.innerHTML = "";

    if (selectedShape === "rectangle") {
        calculatorContainer.innerHTML = `
            <div id="rectangleCalculator">
                <h3>Kalkukator Prostokąta</h3>
                <label for="rectLength">Szerokość:</label>
                <input type="number" id="rectLength" placeholder="Podaj Szerokość">
                <label for="rectWidth">Wysokość:</label>
                <input type="number" id="rectWidth" placeholder="Podaj Wysokość">
                <button id="calculateRectAreaBtn">Oblicz Powierzchnię</button>
                <div id="rectAreaResult"></div>
                <button id="calculateRectPerimeterBtn">Oblicz Obwód</button>
                <div id="rectPerimeterResult"></div>
                <button id="calculateRectDiagonalBtn">Oblicz Przekątną</button>
                <div id="rectDiagonalResult"></div>
            </div>`;
        document.getElementById("calculateRectAreaBtn").addEventListener("click", calculateRectArea);
        document.getElementById("calculateRectPerimeterBtn").addEventListener("click", calculateRectPerimeter);
        document.getElementById("calculateRectDiagonalBtn").addEventListener("click", calculateRectDiagonal);
    } else if (selectedShape === "cuboid") {
        calculatorContainer.innerHTML = `
            <div id="cuboidCalculator">
                <h3>Kalkulator Prostopadłościanu</h3>
                <label for="cuboidLength">Długość:</label>
                <input type="number" id="cuboidLength" placeholder="Podaj Długość">
                <label for="cuboidWidth">Szerokość:</label>
                <input type="number" id="cuboidWidth" placeholder="Podaj Szerokość">
                <label for="cuboidHeight">Wysokość:</label>
                <input type="number" id="cuboidHeight" placeholder="Podaj Wysokość">
                <button id="calculateCuboidVolumeBtn">Oblicz Objętość</button>
                <div id="cuboidVolumeResult"></div>
                <button id="calculateCuboidSurfaceAreaBtn">Oblicz Pole Powierzchni</button>
                <div id="cuboidSurfaceAreaResult"></div>
                <button id="calculateCuboidBodyDiagonalBtn">Oblicz Przekątną</button>
                <div id="cuboidBodyDiagonalResult"></div>
            </div>`;
        document.getElementById("calculateCuboidVolumeBtn").addEventListener("click", calculateCuboidVolume);
        document.getElementById("calculateCuboidSurfaceAreaBtn").addEventListener("click", calculateCuboidSurfaceArea);
        document.getElementById("calculateCuboidBodyDiagonalBtn").addEventListener("click", calculateCuboidBodyDiagonal);
    } else if (selectedShape === "ball") {
        calculatorContainer.innerHTML = `
            <div id="ballCalculator">
                <h3>Kalkulator Kuli</h3>
                <label for="ballRadius">Promień:</label>
                <input type="number" id="ballRadius" placeholder="Podaj Promień">
                <button id="calculateBallVolumeBtn">Oblicz Objętość</button>
                <div id="ballVolumeResult"></div>
                <button id="calculateBallSurfaceAreaBtn">Oblicz Pole Powierzchni</button>
                <div id="ballSurfaceAreaResult"></div>
                <button id="calculateBallDiameterBtn">Oblicz Średnicę</button>
                <div id="ballDiameterResult"></div>
                <button id="calculateBallCircumferenceBtn">Oblicz Obwód</button>
                <div id="ballCircumferenceResult"></div>
            </div>`;
        document.getElementById("calculateBallVolumeBtn").addEventListener("click", calculateBallVolume);
        document.getElementById("calculateBallSurfaceAreaBtn").addEventListener("click", calculateBallSurfaceArea);
        document.getElementById("calculateBallDiameterBtn").addEventListener("click", calculateBallDiameter);
        document.getElementById("calculateBallCircumferenceBtn").addEventListener("click", calculateBallCircumference);
    } else if (selectedShape === "cone") {
        calculatorContainer.innerHTML = `
            <div id="coneCalculator">
                <h3>Kalkulator Stożka</h3>
                <label for="coneRadius">Promień:</label>
                <input type="number" id="coneRadius" placeholder="Podaj Promień">
                <label for="coneHeight">Wysokość:</label>
                <input type="number" id="coneHeight" placeholder="Podaj Wysokość">
                <button id="calculateConeVolumeBtn">Oblicz Objętość</button>
                <div id="coneVolumeResult"></div>
                <button id="calculateConeSurfaceAreaBtn">Oblicz Pole Powierzchni</button>
                <div id="coneSurfaceAreaResult"></div>
                <button id="calculateConeSlantHeightBtn">Oblicz Wysokość Skosu</button>
                <div id="coneSlantHeightResult"></div>
            </div>`;
        document.getElementById("calculateConeVolumeBtn").addEventListener("click", calculateConeVolume);
        document.getElementById("calculateConeSurfaceAreaBtn").addEventListener("click", calculateConeSurfaceArea);
        document.getElementById("calculateConeSlantHeightBtn").addEventListener("click", calculateConeSlantHeight);
    } else if (selectedShape === "torus") {
        calculatorContainer.innerHTML = `
            <div id="torusCalculator">
                <h3>Torus Calculator</h3>
                <label for="torusMajorRadius">Promień Torusa:</label>
                <input type="number" id="torusMajorRadius" placeholder="Podaj Promień Torusa">
                <label for="torusMinorRadius">Promień Okręgu:</label>
                <input type="number" id="torusMinorRadius" placeholder="Podaj Promień Okręgu">
                <button id="calculateTorusVolumeBtn">Oblicz Objętość</button>
                <div id="torusVolumeResult"></div>
                <button id="calculateTorusSurfaceAreaBtn">Oblicz Pole Powierzchni</button>
                <div id="torusSurfaceAreaResult"></div>
                <button id="calculateTorusInnerCircumferenceBtn">Oblicz Obwód Wewnętrzny</button>
                <div id="torusInnerCircumferenceResult"></div>
                <button id="calculateTorusOuterCircumferenceBtn">Oblicz Obwód Zewnętrzny</button>
                <div id="torusOuterCircumferenceResult"></div>
            </div>`;
        document.getElementById("calculateTorusVolumeBtn").addEventListener("click", calculateTorusVolume);
        document.getElementById("calculateTorusSurfaceAreaBtn").addEventListener("click", calculateTorusSurfaceArea);
        document.getElementById("calculateTorusInnerCircumferenceBtn").addEventListener("click", calculateTorusInnerCircumference);
        document.getElementById("calculateTorusOuterCircumferenceBtn").addEventListener("click", calculateTorusOuterCircumference);
    } else if (selectedShape === "choose") {
        calculatorContainer.innerHTML = `
            <div id="torusCalculator">
                <h3>Proszę wybrać figurę</h3>
            </div>`;
    }
}

function calculateRectArea() {
    var length = parseFloat(document.getElementById('rectLength').value);
    var width = parseFloat(document.getElementById('rectWidth').value);
    var area = length * width;
    document.getElementById('rectAreaResult').innerHTML = 'Powierzchnia: ' + area.toFixed(2);
}

function calculateRectPerimeter() {
    var length = parseFloat(document.getElementById('rectLength').value);
    var width = parseFloat(document.getElementById('rectWidth').value);
    var perimeter = 2 * (length + width);
    document.getElementById('rectPerimeterResult').innerHTML = 'Obwód: ' + perimeter.toFixed(2);
}

function calculateRectDiagonal() {
    var length = parseFloat(document.getElementById('rectLength').value);
    var width = parseFloat(document.getElementById('rectWidth').value);
    var diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    document.getElementById('rectDiagonalResult').innerHTML = 'Przekątna: ' + diagonal.toFixed(2);
}

function calculateCuboidVolume() {
    var length = parseFloat(document.getElementById('cuboidLength').value);
    var width = parseFloat(document.getElementById('cuboidWidth').value);
    var height = parseFloat(document.getElementById('cuboidHeight').value);
    var volume = length * width * height;
    document.getElementById('cuboidVolumeResult').innerHTML = 'Objętość: ' + volume.toFixed(2);
}

function calculateCuboidSurfaceArea() {
    var length = parseFloat(document.getElementById('cuboidLength').value);
    var width = parseFloat(document.getElementById('cuboidWidth').value);
    var height = parseFloat(document.getElementById('cuboidHeight').value);
    var surfaceArea = 2 * (length * width + length * height + width * height);
    document.getElementById('cuboidSurfaceAreaResult').innerHTML = 'Pole powierzchni: ' + surfaceArea.toFixed(2);
}

function calculateCuboidBodyDiagonal() {
    var length = parseFloat(document.getElementById('cuboidLength').value);
    var width = parseFloat(document.getElementById('cuboidWidth').value);
    var height = parseFloat(document.getElementById('cuboidHeight').value);
    var diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2) + Math.pow(height, 2));
    document.getElementById('cuboidBodyDiagonalResult').innerHTML = 'Przekątna: ' + diagonal.toFixed(2);
}

function calculateBallVolume() {
    var radius = parseFloat(document.getElementById('ballRadius').value);
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('ballVolumeResult').innerHTML = 'Objętość: ' + volume.toFixed(2);
}

function calculateBallSurfaceArea() {
    var radius = parseFloat(document.getElementById('ballRadius').value);
    var surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
    document.getElementById('ballSurfaceAreaResult').innerHTML = 'Pole powierzchni: ' + surfaceArea.toFixed(2);
}

function calculateBallDiameter() {
    var radius = parseFloat(document.getElementById('ballRadius').value);
    var diameter = 2 * radius;
    document.getElementById('ballDiameterResult').innerHTML = 'Średnica: ' + diameter.toFixed(2);
}

function calculateBallCircumference() {
    var radius = parseFloat(document.getElementById('ballRadius').value);
    var circumference = 2 * Math.PI * radius;
    document.getElementById('ballCircumferenceResult').innerHTML = 'Obwód: ' + circumference.toFixed(2);
}

function calculateConeVolume() {
    var radius = parseFloat(document.getElementById('coneRadius').value);
    var height = parseFloat(document.getElementById('coneHeight').value);
    var volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('coneVolumeResult').innerHTML = 'Objętość: ' + volume.toFixed(2);
}

function calculateConeSurfaceArea() {
    var radius = parseFloat(document.getElementById('coneRadius').value);
    var height = parseFloat(document.getElementById('coneHeight').value);
    var surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    document.getElementById('coneSurfaceAreaResult').innerHTML = 'Pole powierzchni: ' + surfaceArea.toFixed(2);
}

function calculateConeSlantHeight() {
    var radius = parseFloat(document.getElementById('coneRadius').value);
    var height = parseFloat(document.getElementById('coneHeight').value);
    var slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    document.getElementById('coneSlantHeightResult').innerHTML = 'Wysokość Skosu: ' + slantHeight.toFixed(2);
}

function calculateTorusVolume() {
    var majorRadius = parseFloat(document.getElementById('torusMajorRadius').value);
    var minorRadius = parseFloat(document.getElementById('torusMinorRadius').value);
    var volume = 2 * Math.PI * Math.PI * majorRadius * minorRadius * minorRadius;
    document.getElementById('torusVolumeResult').innerHTML = 'Objętość: ' + volume.toFixed(2);
}

function calculateTorusSurfaceArea() {
    var majorRadius = parseFloat(document.getElementById('torusMajorRadius').value);
    var minorRadius = parseFloat(document.getElementById('torusMinorRadius').value);
    var surfaceArea = 4 * Math.PI * Math.pow(majorRadius, 2) * Math.pow(minorRadius, 2);
    document.getElementById('torusSurfaceAreaResult').innerHTML = 'Pole powierzchni: ' + surfaceArea.toFixed(2);
}

function calculateTorusInnerCircumference() {
    var majorRadius = parseFloat(document.getElementById('torusMajorRadius').value);
    var minorRadius = parseFloat(document.getElementById('torusMinorRadius').value);
    var innerCircumference = 2 * Math.PI * minorRadius;
    document.getElementById('torusInnerCircumferenceResult').innerHTML = 'Obwód Wewnętrzny: ' + innerCircumference.toFixed(2);
}

function calculateTorusOuterCircumference() {
    var majorRadius = parseFloat(document.getElementById('torusMajorRadius').value);
    var minorRadius = parseFloat(document.getElementById('torusMinorRadius').value);
    var outerCircumference = 2 * Math.PI * (majorRadius + minorRadius);
    document.getElementById('torusOuterCircumferenceResult').innerHTML = 'Obwód Zewnętrzny: ' + outerCircumference.toFixed(2);
}
