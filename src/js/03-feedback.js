import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const saveToLocalStorage = () => {
  localStorage.setItem(LOCALSTORAGE_KEY, email.value);
  debugger;
};

feedbackForm.addEventListener('submit', saveToLocalStorage);
