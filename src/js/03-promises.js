import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

const formData = {};

const onFormValue = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formInfo', JSON.stringify(formData));
};

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
  let step = +(formData.step);
  let amount = +(formData.amount);

  for (let i = 0; i <= amount; i+= 1) {
     createPromise(i, timeDelay + step)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  localStorage.removeItem('formInfo');
};
formEl.addEventListener('input', onFormValue);
formEl.addEventListener('submit', onSubmitForm);


