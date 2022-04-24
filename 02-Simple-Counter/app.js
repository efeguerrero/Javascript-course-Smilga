let counter = 0;
const btnContainer = document.querySelector('.btnContainer');
const number = document.querySelector('.number');

btnContainer.addEventListener('click', count);

function count(e) {
  if (e.target.classList.contains('btn-increase')) {
    counter += 1;
  } else if (e.target.classList.contains('btn-decrease')) {
    counter -= 1;
  } else if (e.target.classList.contains('btn-reset')) {
    counter = 0;
  }
  number.textContent = `${counter}`;
  if (counter < 0) {
    number.style.color = 'red';
  } else if (counter > 0) {
    number.style.color = 'green';
  } else if (counter == 0) {
    number.style.color = 'black';
  }
}
