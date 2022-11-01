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
        arrayDiv[i].style.backgroundColor = 'white';
        sketchContainer.appendChild(arrayDiv[i]);
        arrayDiv[i].addEventListener('mouseover', () => {
            if (arrayDiv[i].style.backgroundColor == 'white') {
                arrayDiv[i].style.backgroundColor = getRandomHex();
            }
            else {
                let divBgColorRgb = arrayDiv[i].style.backgroundColor;
                let divBgColorHex = rgbToHex(divBgColorRgb);
                arrayDiv[i].style.backgroundColor = lightenDarkenColor(divBgColorHex, -10);
            }
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

function getRandomHex() {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

function lightenDarkenColor(col, amt) {
    let num = parseInt(col, 16);
    console.log(num);
    let r = (num >> 16) + amt;
    let b = ((num >> 8) & 0x00ff) + amt;
    let g = (num & 0x0000ff) | (r << 16);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function componentToHex(c) {
    // This expects `c` to be a number:
    const hex = c.toString(16);
  
    return hex.length === 1 ? `0${ hex }` : hex;
  }
  
  function rgbToHex(rgb) {
    // .map(Number) will convert each string to number:
    const [r, g, b] = rgb.replace('rgb(', '').replace(')', '').split(',').map(Number);
    
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


