const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    const expectedLength = parseInt(input.dataset.length, 10);
    const currentLength = input.value.length;

    if (currentLength === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
});
console.dir(input);