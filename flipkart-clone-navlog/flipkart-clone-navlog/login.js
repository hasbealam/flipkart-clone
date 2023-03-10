
// const requestOTPBtn = document.getElementById("otp");
// requestOTPBtn.addEventListener("click", function() {

//   const phoneNumberInput = document.getElementById("number");

  
//   const phoneNumber = phoneNumberInput.value;

  const requestOTPBtn = document.getElementById("otp");
requestOTPBtn.addEventListener("click", function() {

  const phoneNumberInput = document.getElementById("number");

  const phoneNumber = phoneNumberInput.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.number === phoneNumber);
  
  if (user) {
    // Replace the right-side div's content with the OTP verification fields
    const rightSide = document.querySelector('.right-side');
    rightSide.innerHTML = `
      <h3 id="heading-1">Please enter the OTP sent to<br> ${phoneNumber}. <a> Change </a></h3>
      <div class="input items">
        <input type="text" id="otp-required" required> 
      </div>
      
      <div class="button2">
        <button id="verify-btn"> Verify</button>
      </div>
      <p class="pp">Not received your code? <a href="#">Resend code</a></p>
    `;

    const verifyBtn = document.getElementById("verify-btn");
    verifyBtn.addEventListener("click", function() {
      const otpInput = document.getElementById("otp-required");
      const otp = otpInput.value;
      if (otp === "123456") {
        alert( `Congratulations ${user.name}! You have successfully logged in.`);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href="header.html";
      } else {
        alert("Invalid OTP!");
      }
    });

  } else {
    alert("Invalid phone number. Please enter a valid phone number or create a new account.");
    phoneNumberInput.value = "";
  }
});
