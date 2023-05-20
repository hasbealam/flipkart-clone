
import { imageSlider } from "./utilities/slider.js";

// import navbar from "./flipkart-clone-navlog/flipkart-clone-navlog/navbar.js"
// document.querySelector("#navbar").innerHTML = navbar();

/*******************image Slider********************* */
let imageSliderListEl = document.querySelector(".imageSliderList");
let imageSliderListHTML = "";

imageSlider.forEach((el) => {
  imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${el.link}">
            <img src="${el.img}" />
        </a>
    </div>
    `;
});
imageSliderListEl.innerHTML = imageSliderListHTML;

let preve_imageBtnEl = document.getElementById("preve_imageBtn");
let next_imageBtn = document.getElementById("next_imageBtn");
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage);
next_imageBtn.addEventListener("click", handleNextImage);

function handlePreveImage() {
  let imageallList = document.querySelectorAll(".imageSliderItem");
  if (start < 0) start += 100;
  imageallList.forEach((el) => {
    el.style.transform = `translateX(${start}%)`;
  });
}
function handleNextImage() {
  let imageallList = document.querySelectorAll(".imageSliderItem");
  if (start > end) start -= 100;
  imageallList.forEach((el) => {
    el.style.transform = `translateX(${start}%)`;
  });
}

function renderImageSlider() {
  if (start > end) {
    handleNextImage();
  } else {
    start = 100;
  }
}

setInterval(renderImageSlider, 2000);

/*******************image Slider ends********************* */




// head.js

import logindiv from "./flipkart-clone-navlog/flipkart-clone-navlog/loginpage.js";
import signuppage from "./flipkart-clone-navlog/flipkart-clone-navlog/signuppage.js";
let showlogin  = document.getElementById("show-login");
showlogin.innerHTML=logindiv();
let showsignup = document.getElementById("show-signup");
showsignup.innerHTML=signuppage();

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
  document.querySelector(".dropdown-content").style.display='none';
}
document.querySelector(".sgin").addEventListener("click" , signinfun);
function signinfun(){
  document.getElementById("signincontainer").style.display='flex';
}
document.querySelector(".lgout").addEventListener("click" , logoutfunc);
function logoutfunc(){
  loginButton.textContent="Login"
  document.querySelector('.login_menu_top').style.display = 'flex'; 
    document.querySelector(".logout").style.display='none';
    document.querySelector(".login_menu").style.height="325px";
    localStorage.removeItem('loggedInUser');
    window.location.href="index.html"
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
        <input type="text" id="otp-required" required autocomplete="off"> 
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
  document.getElementById("logincontainer").style.display='flex';
  document.getElementById("signincontainer").style.display='none';
});
document.querySelector('#existing').addEventListener("click" , clicked);
function clicked() {
}
document.querySelector(".new-account").addEventListener("click", showsign);
function showsign() {
  document.getElementById("logincontainer").style.display='none';
  document.getElementById("signincontainer").style.display='flex';
}
document.getElementById("existing").addEventListener("click" , existuser);
function existuser(){
  document.getElementById("logincontainer").style.display='flex';
  document.getElementById("signincontainer").style.display='none';
}

