let currPlayer = 'X';
let arr = Array(9).fill(null);
let gameEnded = false;

function CheckWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.getElementById('message').innerText = `Winner is ${currPlayer}`;
    document.getElementById('message').classList.add('winner');
    gameEnded = true;
    return;
  }
  if (!arr.some(e => e === null)) {
    document.getElementById('message').innerText = `Draw!!`;
    document.getElementById('message').classList.add('draw');
    gameEnded = true;
    return;
  }
}

function handleClick(el) {
  if (gameEnded) return;

  const id = el.id;
  if (arr[id] !== null) return;
  arr[id] = currPlayer;
  el.innerText = currPlayer;
  el.classList.add('clicked');
  CheckWinner();
  currPlayer = currPlayer === 'X' ? 'O' : 'X';
}