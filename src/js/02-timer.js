import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span.value[data-days]');
const hoursEl = document.querySelector('span.value[data-hours]');
const minutesEl = document.querySelector('span.value[data-minutes]');
const secondsEl = document.querySelector('span.value[data-seconds]');

buttonStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      let differenceTime = selectedDates[0].getTime() - new Date().getTime();
      if (differenceTime < 0) {
          alert('Please choose a date in the future');
      }
      buttonStart.removeAttribute('disabled');
  },
};

let chooseDay = flatpickr(inputEl, options);

const onStartTimer = () => {
    buttonStart.setAttribute('disabled', true);

   const intervalId =  setInterval(() => {
       let differenceTime = chooseDay.selectedDates[0].getTime() - new Date().getTime();
       const { days, hours, minutes, seconds } = convertMs(differenceTime);
       if (differenceTime <= 0) {
           clearInterval(intervalId);
       }
       daysEl.textContent = days;
       hoursEl.textContent = hours;
       minutesEl.textContent = minutes;
       secondsEl.textContent = seconds;
    },1000)
   
}

buttonStart.addEventListener('click', onStartTimer);

const pad = (value) => {
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
};

