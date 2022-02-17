import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

savedDataForm();

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', submitData)

function inputData(event) {
    let formDataInput = localStorage.getItem('feedback-form-state');

    formDataInput = formDataInput ? JSON.parse(formDataInput) : {};

    formDataInput[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formDataInput));
};
 
function submitData(event) {
    event.preventDefault();

    const formData = new FormData(form);
    formData.forEach((key, value) => console.log(`${value}:${key}`));

    event.currentTarget.reset();
    // localStorage.removeItem('feedback-form-state');
};
 
function savedDataForm() {
    let savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        savedData = JSON.parse(savedData);
    }

    Object.entries(savedData).forEach(
        ([name, value]) => (form.elements[name].value = value),
    )
};