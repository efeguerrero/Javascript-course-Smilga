const navToggle = document.querySelector('.navIcon');
const linkContainer = document.querySelector('.linksContainer');

navToggle.addEventListener('click', function () {
  if (linkContainer.classList.contains('linksContainer-expand')) {
    linkContainer.classList.remove('linksContainer-expand');
  } else {
    linkContainer.classList.add('linksContainer-expand');
  }
});
