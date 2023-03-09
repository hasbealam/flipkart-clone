
const requestOTPBtn = document.getElementById("otp");
requestOTPBtn.addEventListener("click", function() {


  const phoneNumberInput = document.getElementById("number");

  
  const phoneNumber = phoneNumberInput.value;

  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.number === phoneNumber);
  
  if (user) {
    const congratulationMessage = `Congratulations ${user.name}! You have successfully logged in.`;
    alert(congratulationMessage);
    phoneNumberInput.value = "";
    window.location.href="header.html";
    localStorage.setItem('loggedInUser', JSON.stringify(user)); 
  } else {
    alert("Invalid phone number. Please enter a valid phone number or create a new account.");
    phoneNumberInput.value = "";
  }
  localStorage.setItem(phoneNumber, JSON.stringify({ name: user.name }));

});
