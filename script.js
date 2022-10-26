// Ilk olarak grid sayisini aliriz
// Sonra div leri sketchContainer in icine for loop ile koyariz.
// Her bir grid elemani icin hover property i eklemeye calisiriz.
// Daha sonra gokkusagi renkler vs.

const sketchContainer = document.getElementById('sketchContainer');

let arrayDiv = [];
let gridNum = parseInt(prompt('Please enter how many square per side of new grid:', '16'));
let arrayLength = (gridNum * gridNum);
let boxWidth = (480 / gridNum).toString();
let boxHeight = (480 / gridNum).toString();
createSketchPad();

console.log(boxHeight);
console.log(boxWidth);
console.log(arrayDiv);

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
        arrayDiv[i].style.borderStyle = 'none';
        })
    }
}


