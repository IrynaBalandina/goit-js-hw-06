 document.body.style.backgroundColor = '#232931';
 document.body.style.color = '#eeeeee';

 const loginForm = document.querySelector('.login-form');


  loginForm.addEventListener('submit', handleSubmit);
 

  function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
} = event.currentTarget

   if (email.value === '' || password.value === '') {
     return  alert('Please fill in all the fields!');
    } 

       const profile = { email: email.value, Password: password.value };

      console.log(profile);
   
    event.currentTarget.reset();
  
  }
