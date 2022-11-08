document.addEventListener("keyup", (event) => {
  if (event.key === 'q') {
    const activeWagon1 = document.querySelector('#player1-race .active');
    const finalSquare = document.querySelector('#player1-race .finish');

    activeWagon1.classList.remove('active');
    activeWagon1.nextElementSibling.classList.add('active');

    if (activeWagon1.nextElementSibling === finalSquare) {
      alert('Player1 won the match!');
      window.location.reload();
    }
  }

  if (event.key === 'p') {
    const activeWagon2 = document.querySelector('#player2-race .active');
    const finalSquare = document.querySelector('#player2-race .finish');

    activeWagon2.classList.remove('active');
    activeWagon2.nextElementSibling.classList.add('active');

    if (activeWagon2.nextElementSibling === finalSquare) {
      alert('Player2 won the match!');
      window.location.reload();
    }
  }

  if (event.key === 'x') {
    window.location.reload();
  }
});
