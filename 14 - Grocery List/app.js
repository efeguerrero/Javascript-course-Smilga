let listItems = [];

let insertArray = [];

let timer;

///////////////////
//ITEM INSERTION///
///////////////////

const nameInput = document.querySelector('.listInput');
const submitBtn = document.querySelector('.inputSubmit');
const input = document.querySelector('.input');
const form = document.querySelector('.listForm');
const itemList = document.querySelector('.itemList');
const mainTitle = document.querySelector('.mainTitle');
const alertContainer = document.querySelector('.alertContainer');
let idCounter = 1;

form.addEventListener('submit', function (e) {
  //Add items to listItems Array
  e.preventDefault();
  if (input.classList.contains('inputSubmit')) {
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
      insert(insertArray);
      idCounter++;
      nameInput.value = ''; //go back to placeholder after entering item
      alertmsg('add', 'Item Added');
      //set timer as global variable then reset it everytime before execution settimeout function. So that time goes back to maximum on each click
      if (itemList.textContent) {
        clearbtn.innerHTML = `<h3 class="clearItems">Clear Items</h3>`;
      } else clearbtn.innerHTML = '';
    } else alertmsg('delete', 'Please Enter Item');
  }
});

///////////////////////////
//COMPLETE LIST CLEARING7///
//////////////////////////

const clearbtn = document.querySelector('.clearbtn');

clearbtn.addEventListener('click', function () {
  listItems = [];
  insertArray = [];
  itemList.innerHTML = ` <span class="emptyList">List Empty</span>`;
  idCounter = 1;
  clearbtn.innerHTML = '';
  alertmsg('delete', 'List Cleared');
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
    insert(insertArray);
    alertmsg('delete', 'Item Deleted');
    if (itemList.textContent) {
      clearbtn.innerHTML = `<h3 class="clearItems">Clear Items</h3>`;
    } else {
      clearbtn.innerHTML = '';
      itemList.innerHTML = ` <span class="emptyList">List Empty</span>`;
    }
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

/////////////////////
//EDITING ITEMS/////
///////////////////

//Turning on Editing Options and Inputs after clicking on edit button from list. Finding Index position on original Array to later insert it.

let itemPosition;

itemList.addEventListener('click', function (e) {
  if (e.target.classList.contains('editIcon')) {
    const itemValue = listItems.find(function (item) {
      return item.id == e.target.parentElement.parentElement.id;
    });
    nameInput.value = itemValue.name; //filling input form with name from item to be edited
    itemPosition = listItems.indexOf(itemValue, 0); //finding index of item to be edited on original listItems Array

    //input button logic to turn on edit mode by toggling classes
    input.classList.toggle('inputSubmit');
    input.classList.toggle('inputEdit');
    input.textContent = `Edit`;
  }
});

//Executing edit Item by changing name attribute of element in array located in selected index position

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.classList.contains('inputEdit')) {
    //validate we are in edit mode
    if (nameInput.value) {
      //validate not empty field {
      /// Insert new name for item and insert in same position of Array as original selected one
      listItems[itemPosition].name = `${nameInput.value}`; //update name attribute for selected value and then pushing into array and inserting
      insertArray = listItems.map(function (item) {
        const code = `<li class="item" id="${item.id}">
      <h2 class="itemTitle" >${item.name}</h2>
      <div class="itemIcons">
      <img src="./icons/edit.svg" class="icon editIcon" alt="" />
      <img src="./icons/trash-2.svg" class="icon deleteIcon" alt="" />
      </div></li>`;
        return code;
      });
      insert(insertArray);
      alertmsg('edit', 'Item Edited');
      nameInput.value = ''; //go back to placeholder
    } else alertmsg('delete', 'Please Enter Item');
  }
});

/////////////////////////////////////
//JOINING FUNCTION WITH BTN RESET////
/////////////////////////////////////

function insert(insertArray) {
  itemList.innerHTML = insertArray.join('');
  input.textContent = `Submit`;

  //Classes reset in submit/edit btn
  if (input.classList.contains('inputEdit')) {
    input.classList.remove('inputEdit');
  }
  if (!input.classList.contains('inputSubmit')) {
    input.classList.add('inputSubmit');
  }
}

//////////////////////////////////////
// ACTION ALERT MESSAGE//////////////
///////////////////////////////////

function alertmsg(alertClass, message) {
  alertContainer.innerHTML = `<h3 class="actionmsg ${alertClass}">${message}</h3>`;
  clearTimeout(timer);
  timer = setTimeout(removeAlert, 2000);
}
