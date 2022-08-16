import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

const formData = {};

const onFormValue = (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formInfo', JSON.stringify(formData));
};

function onLoadPage() {
  const saveValue = localStorage.getItem('formInfo');
  if (saveValue) {
    const parseValue = JSON.parse(saveValue);
    for (const key in parseValue) {
      if (parseValue.hasOwnProperty(key)) {
        formEl[key].value = parseValue[key] || '';
      }
    }
  }
}
onLoadPage();

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmitForm = (event) => {
  event.preventDefault();

  let timeDelay = +(formData.delay);
  const step = +(formData.step);
  const amount = +(formData.amount);
  // 
  for (let i = 1; i <= amount; i+= 1) { // <--- не понял как привязаться к итерируемому
     createPromise(i, timeDelay)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    // timeDelay += step;
    timeDelay += step;
  }
  localStorage.removeItem('formInfo');
};
formEl.addEventListener('input', onFormValue);
formEl.addEventListener('submit', onSubmitForm);


