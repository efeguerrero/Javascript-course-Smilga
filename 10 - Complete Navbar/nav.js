const navToggle = document.querySelector('.navIcon');
const linkContainer = document.querySelector('.linksContainer');

///////////////////////////
//START OF DYNAMIC NAVBAR//
//////////////////////////

//Dynamic NavBar Toggling without hard coding navBar expanded Height based on elements added.
//New total height will be calculated as I add more elements to navBar

const linksList = document.querySelector('.linksList');

navToggle.addEventListener('click', function () {
  const linksHeight = linksList.getBoundingClientRect().height;
  if (linkContainer.style.height < `${linksHeight}px`) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = '0px';
  }
});

//code to function as "Media Query" and going back to auto if screen resizes

window.addEventListener('resize', function () {
  if (window.innerWidth >= 768) {
    linkContainer.style.height = ''; //Leave here empty to cancel HTML code overriding CSS. When screen goes big  CSS dictates style ||| John solves this by applying a !Importante on CSS property height="Auto"
  }
});
/////////////////////////
//END OF DYNAMIC NAVBAR//
////////////////////////

//////////////////////////
//START OF NAVBAR FOLLOW//
/////////////////////////

const navBar = document.querySelector('.navBar');
const siteTitle = document.querySelector('.siteTitle');

window.addEventListener('scroll', function () {
  const navBarHeight = navBar.getBoundingClientRect().height;

  if (window.scrollY > navBarHeight) {
    navBar.classList.add('navBar-fixed');
    siteTitle.classList.add('siteTitle-fixed');
  } else {
    navBar.classList.remove('navBar-fixed');
    siteTitle.classList.remove('siteTitle-fixed');
  }
});

/*Add siteTitle-fixed as class to the main Title to avoid title moving around once navBar becomes "FIXED"*/

/////////////////////////////////////////////////////////////////////
//START OF SMOOTH SCROLL CORRECT BEHAVIOR - SCROLLING TO EXACT AREA//
/////////////////////////////////////////////////////////////////////

const links = document.querySelectorAll('.scrollLink');

links.forEach(function (item) {
  item.addEventListener('click', function (e) {
    //prevent default scroll
    e.preventDefault();
    //navigate to specific spot on doc
    const id = e.currentTarget.getAttribute('href').slice(1); //to skip the # we slice at 1
    const element = document.getElementById(id);
    //calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight; //will give position on document of selected element || I substract navBar Height so that when I scroll navBar wont cover area
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = ''; //after everyclick we want to close our navBar and scroll. Leave it empty so that CSS rules on big screen
  });
});
/////////////////////////////////////////////////////////////////////
//END OF SMOOTH SCROLL CORRECT BEHAVIOR - SCROLLING TO EXACT AREA//
/////////////////////////////////////////////////////////////////////
//
