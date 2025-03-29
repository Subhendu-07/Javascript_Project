let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');

let scor = document.getElementById('scor');
let result = document.getElementById('result');

button.addEventListener('click', function () {
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let squHeight = newHeight * newHeight;
    let bmi = newWeight / squHeight;
    scor.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    if (scor.textContent < 18.6) {
        scor.style.background = 'yellow'
    } else if (scor.textContent < 24.8) {
        scor.style.background = 'green'
    } else {
        scor.style.background = 'red'
    }
});

let form = document.getElementById('form');
form.addEventListener('click', function (e) {
    e.preventDefault();
});