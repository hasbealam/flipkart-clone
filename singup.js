// Select the form fields and the button
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#numbers');
const otpButton = document.querySelector('#otpget');

otpButton.addEventListener('click', function () {
  
  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value;

  if (number.length !== 10) {
    alert('Please Enter a Valid Phone Number ');
    return;
  }
  const user = { name, email, number };
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  existingUsers.push(user);


  localStorage.setItem('users', JSON.stringify(existingUsers));

  
  alert('Signup Successful');
  nameInput.value = '';
  emailInput.value = '';
  numberInput.value = '';
  window.location.href="login.html";
});
document.querySelector('#existing').addEventListener("click" , clicked);
function clicked() {
  window.location.href="login.html";
}