const hexChars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const simpleColors = [
  'green',
  '#F15025',
  'red',
  '#F15025',
  'Rgba(133,122,200)',
];

function getRndInteger() {
  return Math.floor(Math.random() * hexChars.length);
}

const btn = document.querySelector('.btn');
const mainContent = document.querySelector('.mainContent');
const mainTitle = document.querySelector('.mainTitle');

let color;

function randomColor() {
  let hex = document.getElementById('hex').checked;
  if (hex) {
    color = `#${hexChars[getRndInteger()]}${hexChars[getRndInteger()]}${
      hexChars[getRndInteger()]
    }${hexChars[getRndInteger()]}${hexChars[getRndInteger()]}${
      hexChars[getRndInteger()]
    } `;

    console.log(color);
  } else {
    color = `${simpleColors[Math.floor(Math.random() * simpleColors.length)]}`;
    console.log(color);
  }
  mainContent.style.background = `${color}`;
  mainTitle.innerHTML = `Background Color: <span class="color">${color}</span>`;
}

btn.addEventListener('click', randomColor);
