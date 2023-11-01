const form = document.querySelector('.feedback-form');

const getParsedDataFromLS = () => {
  return JSON.parse(localStorage.getItem('feedback-form-state'));
};

const setStringifyedDataToLS = data => {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const dataFromLS = getParsedDataFromLS();

if (dataFromLS) {
  const { email, message } = form.elements;

  email.value = dataFromLS.email;
  message.value = dataFromLS.message;
}

const onInputEvent = event => {
  const { email, message } = event.currentTarget.elements;

  const dataForLS = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  setStringifyedDataToLS(dataForLS);
};

const onSubmit = event => {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert("Fields can't be empty!");
    return;
  }

  const userData = { email: email.value.trim(), message: message.value.trim() };
  console.log(userData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('input', onInputEvent);

form.addEventListener('submit', onSubmit);
