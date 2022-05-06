const navToggle = document.querySelector('.navIcon');
const linkContainer = document.querySelector('.linksContainer');

//NavBar Toggle

navToggle.addEventListener('click', function () {
  linkContainer.classList.toggle('linksContainer-expand');
});

//NavBar follow

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
