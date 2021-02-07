import { colors } from './colors';

const refs = {
  btnStart: document.querySelector('button[data-action=start]'),
  btnStop: document.querySelector('button[data-action=stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', handleStartChangeColor);
refs.btnStop.addEventListener('click', handleStopChangeColor);

let colorId = null;

function handleStartChangeColor() {
  refs.btnStart.disabled = true;
  colorId = setInterval(() => {
    const color = colors[randomIntegerFromInterval(0, 5)];
    refs.body.style.backgroundColor = `${color}`;
  }, 1000);
}

function handleStopChangeColor() {
  refs.btnStart.disabled = false;
  clearInterval(colorId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
