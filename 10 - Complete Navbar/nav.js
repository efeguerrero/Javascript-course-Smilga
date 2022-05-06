const navToggle = document.querySelector('.navIcon');
const linkContainer = document.querySelector('.linksContainer');

//NavBar Toggle

navToggle.addEventListener('click', function () {
  linkContainer.classList.toggle('linksContainer-expand');
});

//NavBar follow

const navBar = document.querySelector('.navBar');

window.addEventListener('scroll', function () {
  const navBarHeight = navBar.getBoundingClientRect().height;

  if (window.scrollY > navBarHeight) {
    navBar.classList.add('navBar-fixed');
  } else {
    navBar.classList.remove('navBar-fixed');
  }
});
