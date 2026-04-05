const form = document.getElementById('signup-form');
const tyMessage = document.getElementById('ty-message');
const submitBtn = document.getElementById('signup')

submitBtn.addEventListener('click', () => {
  form.classList.add('hidden')
  tyMessage.classList.remove('hidden')
})