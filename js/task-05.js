let inputEl = document.querySelector(`#name-input`);
inputEl.addEventListener(`input`, changeInput);

let outputEl = document.querySelector(`#name-output`);

function changeInput(event){
    inputEl = event.currentTarget.value;
    console.log(inputEl);
    inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}
