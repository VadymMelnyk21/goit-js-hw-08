import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

savedDataForm();

form.addEventListener('input', throttle(inputData, 500));

function inputData(event) {
    let formData = localStorage.getItem('feedback-form-state');

    formData = formData ? JSON.parse(formData) : {};

    formData[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
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