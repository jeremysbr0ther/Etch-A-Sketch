// Ilk olarak grid sayisini aliriz
// Sonra div leri sketchContainer in icine for loop ile koyariz.
// Her bir grid elemani icin hover property i eklemeye calisiriz.
// Daha sonra gokkusagi renkler vs.

const sketchContainer = document.getElementById('sketchContainer');

let arrayDiv = [];
let gridNum = 16;
let arrayLength = (gridNum * gridNum);
let boxWidth = (480 / gridNum).toString();
let boxHeight = (480 / gridNum).toString();
createSketchPad();

console.log(boxHeight);
console.log(boxWidth);


function createSketchPad() {
    
    for(let i = 1; i < arrayLength + 1; i++) {
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].setAttribute('id', 'block' + i);
        arrayDiv[i].textContent = '';
        arrayDiv[i].style.width = boxWidth + 'px';
        arrayDiv[i].style.height = boxHeight + 'px';
        sketchContainer.appendChild(arrayDiv[i]);
        arrayDiv[i].addEventListener('mouseover', () => {
        arrayDiv[i].style.backgroundColor = 'black';
        arrayDiv[i].style.background = 'black';
        arrayDiv[i].style.borderStyle = 'none';
        })
    }
}

const gridButton = document.getElementById('gridButton');
gridButton.addEventListener('click', () => {
    gridNum = parseInt(prompt('Please enter how many square per side of new grid between 0-100:'));
    while(gridNum < 0 || gridNum > 100) {
        gridNum = parseInt(prompt('Please enter how many square per side of new grid between 0-100:'));
    }

    for(let i = 1; i < arrayLength + 1; i++) {
        arrayDiv[i].style.backgroundColor = 'white';
        arrayDiv[i].remove();
    }
    arrayDiv.length = 0;
    console.log(arrayDiv);
    arrayLength = gridNum * gridNum;
    boxWidth = (480 / gridNum).toString();
    boxHeight = (480 / gridNum).toString();
    createSketchPad();
})


