let listItems = [];

let insertArray = [];

let timer;

///////////////////
//ITEM INSERTION///
///////////////////

const nameInput = document.querySelector('.listInput');
const submitBtn = document.querySelector('.inputSubmit');
const form = document.querySelector('.listForm');
const itemList = document.querySelector('.itemList');
const mainTitle = document.querySelector('.mainTitle');
const alertContainer = document.querySelector('.alertContainer');
let idCounter = 1;

form.addEventListener('submit', function (e) {
  //Add items to listItems Array
  e.preventDefault();
  if (nameInput.value) {
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
    idCounter++;
    nameInput.value = ''; //go back to placeholder after entering item
    alertContainer.innerHTML = `<h3 class="actionmsg add">Item Added</h3>`;
    clearTimeout(timer);
    timer = setTimeout(removeAlert, 2000);
    //set timer as global variable then reset it everytime before execution settimeout function. So that time goes back to maximum on each click
    if (itemList.textContent) {
      clearbtn.innerHTML = `<h3 class="clearItems">Clear Items</h3>`;
    } else clearbtn.innerHTML = '';
  } else {
    alertContainer.innerHTML = `<h3 class="actionmsg delete">Please Enter Item</h3>`;
    clearTimeout(timer);
    timer = setTimeout(removeAlert, 2000);
  }
});

///////////////////////////
//COMPLETE LIST CLEARING7///
//////////////////////////

const clearbtn = document.querySelector('.clearbtn');

clearbtn.addEventListener('click', function () {
  listItems = [];
  insertArray = [];
  itemList.innerHTML = insertArray.join('');
  idCounter = 1;
  alertContainer.innerHTML = `<h3 class="actionmsg delete">List Cleared</h3>`;
  clearTimeout(timer);
  timer = setTimeout(removeAlert, 2000);
  clearbtn.innerHTML = '';
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

  console.log(listItems);

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
  alertContainer.innerHTML = `<h3 class="actionmsg delete">Item Deleted</h3>`;
  clearTimeout(timer);
  timer = setTimeout(removeAlert, 2000);
  if (itemList.textContent) {
    clearbtn.innerHTML = `<h3 class="clearItems">Clear Items</h3>`;
  } else {
    clearbtn.innerHTML = '';
    itemList.innerHTML = ` <span class="emptyList">List Empty</span>`;
  }
});

/////////////////////////
//REMOVE ALERT FUNCTION//
/////////////////////////

function removeAlert() {
  alertContainer.innerHTML = '';
}

/////////////////////////////////////////
//CLEAR ITEMS SHOW ON/OFF ON PAGE LOAD //
////////////////////////////////////////

//when doc loads, check if list is empty to decide if inserting code

window.addEventListener('load', function () {
  if (itemList.textContent) {
    clearbtn.innerHTML = `<h3 class="clearItems">Clear Items</h3>`;
  } else {
    clearbtn.innerHTML = '';
    itemList.innerHTML = ` <span class="emptyList">List Empty</span>`;
  }
});
