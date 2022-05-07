let listItems = [
  { id: 1, name: 'eggs' },
  { id: 2, name: 'bacon' },
];

let insertArray = [];

///////////////////
//ITEM INSERTION///
///////////////////

const nameInput = document.querySelector('.listInput');
const submitBtn = document.querySelector('.inputSubmit');
const form = document.querySelector('.listForm');
const itemList = document.querySelector('.itemList');
let idCounter = 1;

form.addEventListener('submit', function (e) {
  //Add items to listItems Array
  e.preventDefault();
  const itemObj = { id: idCounter, name: nameInput.value }; //Before pushing object inside array we must first creat it//
  listItems.push(itemObj);
  // Populate insertArray to insert HTML
  insertArray.push(`<li class="item">
      <h2 class="itemTitle">${nameInput.value}</h2>
      <div class="itemIcons">
      <img src="./icons/edit.svg" class="icon editIcon" alt="" />
      <img src="./icons/trash-2.svg" class="icon deleteIcon" alt="" />
      </div></li>`);
  itemList.innerHTML = insertArray.join('');
  console.log(idCounter);
  idCounter++;
  nameInput.value = ''; //go back to placeholder after entering item
});

///////////////////////////
//COMPETE LIST CLEARING7///
//////////////////////////

const clearItems = document.querySelector('.clearItems');

clearItems.addEventListener('click', function () {
  insertArray = [''];
  itemList.innerHTML = insertArray.join('');
  idCounter = 1;
});
