const registerForm = document.querySelector('#register-form');

const baseUrl = 'http://localhost:3333/'

async function registerUser(e) {
  e.preventDefault();

  // Uses the name attribute on the element
  const emailInput = e.target.email;
  const passwordInput = e.target.password;

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  const response = await fetch(`${baseUrl}auth/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });  
  
  const data = await response.text(response);

  console.log(data);
  window.location = '/';

}

registerForm.addEventListener('submit', registerUser);