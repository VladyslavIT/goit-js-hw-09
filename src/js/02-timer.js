import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span.value[data-days]');
const hoursEl = document.querySelector('span.value[data-hours]');
const minutesEl = document.querySelector('span.value[data-minutes]');
const secondsEl = document.querySelector('span.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const differenceTime = selectedDates[0].getTime() - new Date().getTime();
    if (differenceTime < 1000) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    buttonStart.disabled = false;
  },
};

let chooseDay = flatpickr(inputEl, options);

let intervalId = null;

const onStartTimer = () => {
  let intervalId = setInterval(() => {
    const differenceTime =
      chooseDay.selectedDates[0].getTime() - new Date().getTime();
    const { days, hours, minutes, seconds } = convertMs(differenceTime);
    if (differenceTime < seconds) {
      Notiflix.Notify.failure('Please choose a date in the future');
      convertMs(0);
      clearInterval(intervalId);
      return;
    }
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
};

buttonStart.addEventListener('click', onStartTimer);

const pad = value => {
  return String(value).padStart(2, `0`);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
