import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const onInput = () => {
  const objectForSave = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectForSave));
};

const onSubmit = e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  feedbackForm.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const dataSaved = load(LOCALSTORAGE_KEY);
if (dataSaved) {
  email.value = dataSaved.email;
  message.value = dataSaved.message;
}
