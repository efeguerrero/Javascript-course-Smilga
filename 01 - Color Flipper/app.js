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

function getRndInteger() {
  return Math.floor(Math.random() * hexChars.length);
}

const btn = document.querySelector('.btn');
const mainContent = document.querySelector('.mainContent');
let color;

function randomColor() {
  color = `#${hexChars[getRndInteger()]}${hexChars[getRndInteger()]}${
    hexChars[getRndInteger()]
  }${hexChars[getRndInteger()]}${hexChars[getRndInteger()]}${
    hexChars[getRndInteger()]
  } `;
  console.log(color);
  mainContent.style.background = `${color}`;
  return color;
}

btn.addEventListener('click', randomColor);
