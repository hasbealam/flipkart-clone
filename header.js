import logindiv from "./loginpage.js";
let showlogin  = document.getElementById("show-login");
showlogin.innerHTML=logindiv();


let searchvalue = document.getElementById("seach-input");
let form = document.getElementById("search-form");
let recent_Search = document.querySelector(".recent_Search");

let searchbox = ["fashion", "mobile"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchbox.unshift(searchvalue.value);
   
  if (searchbox.length > 11) {
    searchbox.pop();
  }
  showdata();
  searchvalue.value = "";
});

function showdata() {
  let recentsearchtext = "";
  searchbox.forEach((el) => {
    recentsearchtext += `
      <div class="recent_search_list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
      </div>  
    `;
  });
  recent_Search.innerHTML = recentsearchtext;
}

showdata();

const loginButton = document.querySelector('.lgin');

function updateLoginButtonText() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
    loginButton.textContent = loggedInUser.name;
    document.querySelector('.login_menu_top').style.display = 'none'; 
    document.querySelector(".logout").style.display='block';
    document.querySelector(".login_menu").style.height="360px";
  }
};


updateLoginButtonText();

window.addEventListener('storage', function(event) {
  if (event.key === 'loggedInUser') {
    updateLoginButtonText();
  }
});

 document.querySelector(".lgin").addEventListener("click" , loginfun);
function loginfun(){
  document.querySelector("#logincontainer").style.display='flex';
  // document.querySelector("#logincontainer").style.zIndex='9999';
  document.querySelector(".dropdown-content").style.display='none';
}
document.querySelector(".sgin").addEventListener("click" , signinfun);
function signinfun(){
  window.location.href="singup.html"
}
document.querySelector(".lgout").addEventListener("click" , logoutfunc);
function logoutfunc(){
  loginButton.textContent="Login"
  document.querySelector('.login_menu_top').style.display = 'flex'; 
    document.querySelector(".logout").style.display='none';
    document.querySelector(".login_menu").style.height="325px";
    localStorage.removeItem('loggedInUser');
    window.location.href="header.html"
}

const requestOTPBtn = document.getElementById("otp");
requestOTPBtn.addEventListener("click", function() {

  const phoneNumberInput = document.getElementById("number");

  const phoneNumber = phoneNumberInput.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.number === phoneNumber);
  
  if (user) {
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
        updateLoginButtonText();
        document.querySelector("#logincontainer").style.display='none';
      } else {
        alert("Invalid OTP!");
      }
    });

  } else {
    alert("Invalid phone number. Please enter a valid phone number or create a new account.");
    phoneNumberInput.value = "";
  }
});
