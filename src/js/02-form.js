const feedbackFormData = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const textInput = form.querySelector('textarea');

window.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem(feedbackFormData);
if (storedData) {
    const parcedData = JSON.parse(storedData);
    emailInput.value = parcedData.email || '';
    textInput.value = parcedData.text || '';
}
})


form.addEventListener('submit', (event) => {
    event.preventDefault();
   const email = emailInput.value.trim();
  const text = textInput.value.trim();
    if (email === ''&& text === '') {
        alert('Please fill out the form');
    } else {
        const registForm = {
            email,
            text
        }
        console.log(registForm)
    }
   localStorage.removeItem(feedbackFormData);
    form.reset()
})
  

form.addEventListener('input', () => {
     const email = emailInput.value.trim();
  const text = textInput.value.trim();
    const combinedData = JSON.stringify({ email, text });;
    localStorage.setItem(feedbackFormData, combinedData);
})


// _________Інший варіант___________


// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]'); 
// const messageInput = form.querySelector('textarea[name="message"]');
// const feedbackFormData = "feedback-form-state";

// function updateLocalStorage(email, message) {
//   localStorage.setItem(feedbackFormData, JSON.stringify({
//     email: email.trim(),
//     message: message.trim()  
//   }));
// }

// window.addEventListener('DOMContentLoaded', () => {
//   const data = JSON.parse(localStorage.getItem(feedbackFormData)) || {};
  
//   emailInput.value = data.email || ''; 
//   messageInput.value = data.message || '';
// });


// form.addEventListener('input', e => {
//   updateLocalStorage(emailInput.value, messageInput.value);  
// });


// form.addEventListener('submit', e => {

//   e.preventDefault();
  
//    let isFormValid = true;
//   if (emailInput.value.trim() === '') {
//     isFormValid = false;
//   }

//   if (messageInput.value.trim() === '') {
//     isFormValid = false; 
//   }

  
//   if(!isFormValid) {
//     alert('Please fill out the form!!!');
//     return;
//   }
      
// const data = {
//     email: emailInput.value,
//     message: messageInput.value  
//   };
  
//   console.log(data);
  
//   form.reset();
//   localStorage.removeItem(feedbackFormData); 
// });