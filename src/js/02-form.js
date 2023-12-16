const feedbackFormData = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const textInput = form.querySelector('textarea');

form.addEventListener('submit', (event) => {
    event.preventDefault();

})

form.addEventListener('input', () => {
    const email = emailInput.value.trim();
    const text = textInput.value.trim();
    const combinedData = `${email}, ${text}`;
    localStorage.setItem(feedbackFormData, combinedData);
})