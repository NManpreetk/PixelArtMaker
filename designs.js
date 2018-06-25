// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelector("input[type = 'submit']");
let cell = 0;


submitButton.addEventListener("click", function (e) {
    event.preventDefault();
    let table = document.getElementById('pixelCanvas');
    const height = document.querySelector("#inputHeight").value;
    const weight = document.querySelector("#inputWeight").value;
    table.innerHTML = "";

    makeGrid(height, weight);



    table.addEventListener('click', function (event) {
        if (event.target.tagName == "TD") {
            const background = document.querySelector('#colorPicker').value;
            event.target.style.backgroundColor = background;
        }
    });
});

function makeGrid(height, weight) {
    let table = document.getElementById('pixelCanvas');
    for (var i = 1; i <= weight; i++) {
        var row = document.createElement('tr');
        for (var j = 1; j <= height; j++) {
            cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}