
const sizeInput = document.querySelector('#font-size-control');

const textInput = document.querySelector('#text');
sizeInput.addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
    textInput.style.fontSize = fontSize;
})
console.dir(sizeInput);
