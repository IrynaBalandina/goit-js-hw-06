

const inputEl = document.querySelector('#validation-input');

let inputLength = Number(inputEl.dataset.length);
console.log(inputLength);
inputEl.addEventListener(`blur`, validateInput);

function validateInput(event){
    console.log(event.currentTarget.value.length)
    if (Number(event.currentTarget.value.length === inputLength)){
        console.log((event.currentTarget.value.length === inputLength));
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
else{
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
}
};
