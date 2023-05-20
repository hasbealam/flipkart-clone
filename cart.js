let arr = JSON.parse(localStorage.getItem("cart_products"));

var b = 1;
let priceOfCart = 0;
let discountOfCart = 0;
let totalPriceOfCart = 0;
displayvalue();
displaydata();
function displayvalue() {
  priceOfCart = 0;
  discountOfCart = 0;
  totalPriceOfCart = 0;
  arr.forEach(function (elem) {
    priceOfCart = +priceOfCart + +elem.price;
    totalPriceOfCart = +totalPriceOfCart + +elem.price;
    discountOfCart = +discountOfCart + +(elem.strippedOffPrice - elem.price);
  });
  document.querySelector("#a2").textContent = `- ₹${discountOfCart * b}`;
  document.querySelector("#a6").textContent = `₹${discountOfCart * b}`;
  document.querySelector("#a1").innerText = `₹${priceOfCart * b}`;
  document.querySelector("#a4").textContent = `₹${priceOfCart * b}`;
  //right div for price, discount
  localStorage.setItem("total_price", totalPriceOfCart);
}

function displaydata() {
  displayvalue();
  document.querySelector("#cartcontent").innerHTML = null;
  document.querySelector("#cartl1").textContent = arr.length;
  arr.map(function (elem, index) {
    var div = document.createElement("div");
    div.id = "box1";

    var imgdiv = document.createElement("div");
    imgdiv.id = "box11";

    var image = document.createElement("img");
    image.setAttribute("src", elem.img1);

    var divinp = document.createElement("div");
    divinp.id = "divinp";

    var inp1 = document.createElement("input");
    inp1.id = "inp";
    inp1.type = "Number";
    inp1.min = 1;
    inp1.defaultValue = 1;

    var but1 = document.createElement("button");
    but1.addEventListener("click", minusinp);
    but1.id = "but1";
    but1.textContent = "-";

    var but2 = document.createElement("button");
    but2.addEventListener("click", plusinp);
    but2.id = "but2";
    but2.textContent = "+";

    divinp.append(but1, inp1, but2);

    var textdiv = document.createElement("div");
    textdiv.id = "box12";

    var productName = document.createElement("div");
    productName.id = "productName";
    productName.textContent = elem.productName;

    var cartline = document.createElement("div");
    cartline.id = "cartline";

    var seller = document.createElement("div");
    seller.textContent = "FlipKart";

    var replacee = document.createElement("div");
    replacee.textContent = "7 Days Replacement Policy";

    var cartline1 = document.createElement("div");
    cartline1.id = "cartline1";

    var price = document.createElement("div");
    price.id = "price";
    price.textContent = "₹" + elem.price;

    // a1 = a1 + b;
    var price2 = document.createElement("div");
    price2.id = "price2";
    price2.textContent = "₹" + elem.strippedOffPrice;

    var price3 = document.createElement("div");
    price3.id = "price3";
    price3.textContent = elem.percentOff + "%" + "    off";

    var assuer = document.createElement("img");
    assuer.src = "https://www.adgully.com/img/800/68264_fl.png.jpg";
    assuer.id = "flipass";

    var cartline2 = document.createElement("div");
    cartline2.setAttribute("id", "cartline2");

    var save = document.createElement("div");
    save.textContent = "SAVE FOR LATER";
    save.addEventListener("click", function (event) {
      addtocart(index);
    });
    console.log(priceOfCart, discountOfCart, totalPriceOfCart);
    var remove = document.createElement("div");
    remove.textContent = "REMOVE";
    remove.addEventListener("click", function () {
      arr.splice(index, 1);
      if (arr.length == 0) {
        displayEmpty();
      } else {
        priceOfCart = priceOfCart - elem.price;
        discountOfCart = discountOfCart - (elem.strippedOffPrice - elem.price);
        totalPriceOfCart = totalPriceOfCart - elem.price;
        console.log(priceOfCart, discountOfCart, totalPriceOfCart);
        displaydata();
      }
    });

    cartline.append(seller, replacee);
    cartline1.append(price, price2, price3);
    cartline2.append(save, remove);
    imgdiv.append(image, divinp);
    textdiv.append(productName, cartline, cartline1, assuer, cartline2);
    div.append(imgdiv, textdiv);
    document.querySelector("#cartcontent").append(div);
  });
}

function addtocart(index) {
  res.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(arr));
  alert("Item Added to Wishlist");
  displaydata();
}
function minusinp() {
  b--;
  if (b <= 0) {
    b = 1;
  }
  document.querySelector("#inp").value = b;
  displayvalue();
}

function plusinp() {
  b++;
  document.querySelector("#inp").value = b;
  displayvalue();
}

function tocheckout() {
  localStorage.setItem("price", JSON.stringify(a4));
  window.location.href = "checkout.html";
}
// var d = document.querySelector("#flipkart-logo");
// d.addEventListener("click", function () {
//   window.location.href = "index.html";
// });
// var a = document.querySelector("#more");
// a.addEventListener("click", function () {
//   window.location.href = "Signup.html";
// });
// var b = document.querySelector("#log");
// b.addEventListener("click", function () {
//   window.location.href = "login.html";
// });

// var c = document.querySelector("#cart");
// c.addEventListener("click", function () {
//   window.location.href = "cart.html";
// });

function displayEmpty() {
  document.querySelector("#cart").innerText = "";

  let div = document.createElement("div");
  div.id = "empty_cart_div";
  let img = document.createElement("img");
  img.src =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  img.id = "empty_cart_logo";

  let h1 = document.createElement("h3");
  h1.innerText = "Your cart is empty!";
  let p = document.createElement("p");
  p.innerText = "Add items to it now.";
  let button = document.createElement("button");
  button.textContent = "Shop now";
  button.id = "cart_page_button";
  button.addEventListener("click", function () {
    location.href = "index.html";
  });
  div.append(img, h1, p, button);
  document.querySelector("#cart").append(div);
}

// head.js

// import logindiv from "./flipkart-clone-navlog/flipkart-clone-navlog/loginpage.js";
// import signuppage from "./flipkart-clone-navlog/flipkart-clone-navlog/signuppage.js";
let showlogin = document.getElementById("show-login");
showlogin.innerHTML = logindiv();
let showsignup = document.getElementById("show-signup");
showsignup.innerHTML = signuppage();

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

const loginButton = document.querySelector(".lgin");

function updateLoginButtonText() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    loginButton.textContent = loggedInUser.name;
    document.querySelector(".login_menu_top").style.display = "none";
    document.querySelector(".logout").style.display = "block";
    document.querySelector(".login_menu").style.height = "360px";
  }
}

updateLoginButtonText();

window.addEventListener("storage", function (event) {
  if (event.key === "loggedInUser") {
    updateLoginButtonText();
  }
});

document.querySelector(".lgin").addEventListener("click", loginfun);
function loginfun() {
  document.querySelector("#logincontainer").style.display = "flex";
  document.querySelector(".dropdown-content").style.display = "none";
}
document.querySelector(".sgin").addEventListener("click", signinfun);
function signinfun() {
  document.getElementById("signincontainer").style.display = "flex";
}
document.querySelector(".lgout").addEventListener("click", logoutfunc);
function logoutfunc() {
  loginButton.textContent = "Login";
  document.querySelector(".login_menu_top").style.display = "flex";
  document.querySelector(".logout").style.display = "none";
  document.querySelector(".login_menu").style.height = "325px";
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

const requestOTPBtn = document.getElementById("otp");
requestOTPBtn.addEventListener("click", function () {
  const phoneNumberInput = document.getElementById("number");

  const phoneNumber = phoneNumberInput.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.number === phoneNumber);

  if (user) {
    const rightSide = document.querySelector(".right-side");
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
    verifyBtn.addEventListener("click", function () {
      const otpInput = document.getElementById("otp-required");
      const otp = otpInput.value;
      if (otp === "123456") {
        alert(`Congratulations ${user.name}! You have successfully logged in.`);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        updateLoginButtonText();
        document.querySelector("#logincontainer").style.display = "none";
      } else {
        alert("Invalid OTP!");
      }
    });
  } else {
    alert(
      "Invalid phone number. Please enter a valid phone number or create a new account."
    );
    phoneNumberInput.value = "";
  }
});
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#numbers");
const otpButton = document.querySelector("#otpget");

otpButton.addEventListener("click", function () {
  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value;

  if (number.length !== 10) {
    alert("Please Enter a Valid Phone Number ");
    return;
  }
  const user = { name, email, number };
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  existingUsers.push(user);

  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Signup Successful");
  nameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
  document.getElementById("logincontainer").style.display = "flex";
  document.getElementById("signincontainer").style.display = "none";
});
document.querySelector("#existing").addEventListener("click", clicked);
function clicked() {}
document.querySelector(".new-account").addEventListener("click", showsign);
function showsign() {
  document.getElementById("logincontainer").style.display = "none";
  document.getElementById("signincontainer").style.display = "flex";
}
document.getElementById("existing").addEventListener("click", existuser);
function existuser() {
  document.getElementById("logincontainer").style.display = "flex";
  document.getElementById("signincontainer").style.display = "none";
}
