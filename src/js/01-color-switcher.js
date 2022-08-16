const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEL = document.querySelector('button[data-stop]');

let timeInterval = null;
buttonStopEL.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const onStartClick = () => {
  timeInterval = setInterval(onChangeColor, 1000);
  buttonStartEl.disabled = true;
  buttonStopEL.disabled = false;
};

const onStopClick = () => {
  clearInterval(timeInterval);
  buttonStartEl.disabled = false;
  buttonStopEL.disabled = true;
};

buttonStartEl.addEventListener('click', onStartClick);
buttonStopEL.addEventListener('click', onStopClick);
