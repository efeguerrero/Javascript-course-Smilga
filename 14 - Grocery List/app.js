let listItems = [];

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
  insertArray.push(`<li class="item" id="${idCounter}">
      <h2 class="itemTitle" >${nameInput.value}</h2>
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
//COMPLETE LIST CLEARING7///
//////////////////////////

const clearItems = document.querySelector('.clearItems');

clearItems.addEventListener('click', function () {
  listItems = [''];
  insertArray = [''];
  itemList.innerHTML = insertArray.join('');
  idCounter = 1;
});

//////////////////////////
//DELETING ITEMS/////////
////////////////////////

//Traverse the DOM to get the id of elements inserted dynamically when I click on delete Icon

itemList.addEventListener('click', function (e) {
  if (e.target.classList.contains('deleteIcon')) {
    listItems = listItems.filter(function (item) {
      return item.id != e.target.parentElement.parentElement.id; //filter listItem array leaving out element with ID clicked
    });
  }

  // map new insertArray with new filtered listItems

  insertArray = listItems.map(function (item) {
    const code = `<li class="item" id="${item.id}">
      <h2 class="itemTitle" >${item.name}</h2>
      <div class="itemIcons">
      <img src="./icons/edit.svg" class="icon editIcon" alt="" />
      <img src="./icons/trash-2.svg" class="icon deleteIcon" alt="" />
      </div></li>`;
    return code;
  });

  itemList.innerHTML = insertArray.join('');
});
