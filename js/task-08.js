

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userData = [];
    formData.forEach((value, key) => {
        userData[key] = value;
    });
    if (!userData.email || !userData.password) {
        alert('Всі поля повинні бути заповнені!')
    } else {
        console.log('Введені дані:', userData);
        loginForm.reset(); 
    }
};

console.log(loginForm);