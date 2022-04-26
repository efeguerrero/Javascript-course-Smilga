const navToggle = document.querySelector('.navIcon');
const linkContainer = document.querySelector('.linksContainer');

//Short code to toggle navNabar

navToggle.addEventListener('click', function () {
  linkContainer.classList.toggle('linksContainer-expand');
});

//Long code to toggle navNabar

// navToggle.addEventListener('click', function () {
//   if (linkContainer.classList.contains('linksContainer-expand')) {
//     linkContainer.classList.remove('linksContainer-expand');
//   } else {
//     linkContainer.classList.add('linksContainer-expand');
//   }
// });
