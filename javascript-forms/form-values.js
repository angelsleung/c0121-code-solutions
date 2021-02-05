function submitForm(event) {
  event.preventDefault();
  var formData = {};
  formData.name = inputForm.elements.name.value;
  formData.email = inputForm.elements.email.value;
  formData.message = inputForm.elements.message.value;
  console.log('form data:', formData);
  inputForm.reset();
}

var inputForm = document.querySelector('form');
inputForm.addEventListener('submit', submitForm);
