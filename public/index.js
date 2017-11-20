const words = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (words.style.color === 'green' ) {
    words.style.color = 'blue';
  } else {
    words.style.color = 'green';
  }
})
