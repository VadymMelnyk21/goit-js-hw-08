import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORMA_KEY = 'feedback-form-state';
const formDataInput = {};

savedDataForm();

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', submitData)

function inputData() {
    formDataInput.email = form.elements.email.value;
    formDataInput.message = form.elements.message.value;
    localStorage.setItem(FORMA_KEY, JSON.stringify(formDataInput));
};
 
function submitData(event) {
    event.preventDefault();

    if (form.elements.email.value === '' || form.elements.message.value === '') {
        alert('Заполните все поля');
        return;
    };

    const formData = new FormData(form);
    formData.forEach((key, value) => console.log(`${value}:${key}`));

    event.currentTarget.reset();
    localStorage.removeItem(FORMA_KEY);
};
 
function savedDataForm() {
    let savedData = localStorage.getItem(FORMA_KEY);
    
    savedData = savedData ? JSON.parse(savedData) : {};
    
    Object.entries(savedData).forEach(
        ([name, value]) => (form.elements[name].value = value),
    )
};