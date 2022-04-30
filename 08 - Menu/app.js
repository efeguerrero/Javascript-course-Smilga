//Menu Array Creation

const menuItems = [
  {
    name: 'Buttermilk Pancakes',
    price: '$15.99',
    img: './img/item-1.jpeg',
    descrip:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    id: 1,
    category: 'Breakfast',
  },
  {
    name: 'Diner Double',
    price: '$13.99',
    img: './img/item-2.jpeg',
    descrip:
      'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
    id: 2,
    category: 'Lunch',
  },
  {
    name: 'Godzilla Milkshake',
    price: '$6.99',
    img: './img/item-3.jpeg',
    descrip:
      'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    id: 3,
    category: 'Shakes',
  },
  {
    name: 'Country Delight',
    price: '$20.99',
    img: './img/item-4.jpeg',
    descrip:
      'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
    id: 4,
    category: 'Breakfast',
  },
  {
    name: 'Egg Attack',
    price: '$22.99',
    img: './img/item-5.jpeg',
    descrip:
      'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
    id: 5,
    category: 'Lunch',
  },
  {
    name: 'Oreo Dream',
    price: '$18.99',
    img: './img/item-6.jpeg',
    descrip:
      'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
    id: 6,
    category: 'Shakes',
  },
  {
    name: 'Bacon Overflow',
    price: '$8.99',
    img: './img/item-7.jpeg',
    descrip:
      'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
    id: 7,
    category: 'Breakfast',
  },
  {
    name: 'American Classic',
    price: '$12.99',
    img: './img/item-8.jpeg',
    descrip:
      'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    id: 8,
    category: 'Lunch',
  },
  {
    name: 'Quarantine Buddy',
    price: '$16.99',
    img: './img/item-9.jpeg',
    descrip:
      'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    id: 9,
    category: 'Shakes',
  },
  {
    name: 'Steak Dinner',
    price: '$39.99',
    img: './img/item-10.jpeg',
    descrip:
      'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    id: 10,
    category: 'Dinner',
  },
];
/////////////////////////
////Button Generation//// (2 Methods)
/////////////////////////

//USING ARRAY TO INSERT CODE WITH .JOIN

// let btns = [`<button class="filter-btn">All</button>`];
// const btn = document.querySelector('.btnContainer');

// //Function to use in forEach to construct categories array without duplicates

// function duplicates(item) {
//   if (!btns.includes(`<button class="filter-btn">${item.category}</button>`)) {
//     btns.push(`<button class="filter-btn">${item.category}</button>`);
//   }
// }
// menuItems.forEach(duplicates);
// console.log(btns);

// btn.innerHTML = btns.join(' ');

//---------------------------------------------------------------------

//ALTERNATIVE METHOD:  accumulated html code with += and then inserted that with btn.innerHTML

const btn = document.querySelector('.btnContainer');
let acc = `<button class="filter-btn">All</button>`;

function codeAcc(item) {
  if (!acc.includes(item.category)) {
    acc += `<button class="filter-btn">${item.category}</button>`;
  }
}

menuItems.forEach(codeAcc);
btn.innerHTML = acc;

///////////////////////////
////// Menu Insertion//////
//////////////////////////

//Since btns are inserted dynamically I need to select them through event propagation. filter-btn.addEventListener would return null

const btnContainer = document.querySelector('.btnContainer');
let code = '';
const menuSection = document.querySelector('.menu-section');
let filteredMenu;

//Start of Menu code creation function

function menuCode(item) {
  code += ` <div class="menu-item">
          <div class="menu-item-img-container">
            <img src=${item.img} class="menu-item-img" alt=${item.name}/>
          </div>
          <div class="menu-item-info">
            <div class="menu-item-main-info">
              <h2 class="menu-item-title">${item.name}</h2>
              <h2 class="menu-item-price">${item.price}</h3>
            </div>
            <p class="menu-item-descrip">${item.descrip}</p>
          </div>
          </div>    
        `;
}

//End Menu code creation function

//Start of  ALL Menu Generation//

menuItems.forEach(menuCode);
menuSection.innerHTML = code;

//End of ALL Menu Generation//

//Menu Filtering code//

btnContainer.addEventListener('click', function (e) {
  code = '';
  const selection = e.target.textContent;
  console.log(selection);
  console.log(e.target);

  if (selection != 'All') {
    filteredMenu = menuItems.filter(function (item) {
      return item.category === `${e.target.textContent}`;
    });
  } else {
    filteredMenu = menuItems;
    console.log(filteredMenu);
  }

  filteredMenu.forEach(menuCode);
  console.log(code);
  menuSection.innerHTML = code;
});

//End of Menu Filtering code//
