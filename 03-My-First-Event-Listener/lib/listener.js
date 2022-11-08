const button = document.getElementById('clickme');
const audio = new Audio('sound.mp3');

button.addEventListener('click', (e) => {
  button.classList.add('disabled');
  button.innerHTML = 'Bingo!';
  audio.play();
});
