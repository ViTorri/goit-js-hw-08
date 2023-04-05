import throttle from 'lodash.throttle';

const STORE_MES = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);


function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORE_MES, JSON.stringify(formData));
}

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(STORE_MES)));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORE_MES);
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORE_MES));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}

dataFromLocalStorage();
