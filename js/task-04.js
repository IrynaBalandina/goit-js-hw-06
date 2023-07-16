 let counterValue = 0;
 let value = document.querySelector("#value");
 const  decrementBtn = document.querySelector(`button[data-action ="decrement"]`);
 const  incrementBtn = document.querySelector(`button[data-action ="increment"]`);

 function decrement(event){
  counterValue -= 1;
     value.textContent = counterValue;
 }
 function increment (event){
   counterValue += 1;
    value.textContent = counterValue;
 }
 decrementBtn.addEventListener("click", decrement);
 incrementBtn.addEventListener("click", increment);

