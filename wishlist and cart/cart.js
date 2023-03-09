var res = JSON.parse(localStorage.getItem("cart"));
console.log("res", res);

let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
displaydata();
a2 = a1 - a4;
displayvalue();
function displayvalue() {
  document.querySelector("#a1").innerHTML = "₹" + a1;
  document.querySelector("#a2").textContent = "-" + "₹" + a2;
  document.querySelector("#a6").textContent = a2;
  document.querySelector("#a4").textContent = "₹" + a4;
}

function displaydata() {
  document.querySelector("#cartcontent").innerHTML = null;
  console.log(res);
  document.querySelector("#cartl1").textContent = res.length;
  res.map(function (data, hn) {
    var div = document.createElement("div");
    div.id = "box1";

    var imgdiv = document.createElement("div");
    imgdiv.id = "box11";

    var image = document.createElement("img");
    image.setAttribute("src", data.img1);

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
    productName.textContent = data.longname;


    var cartline = document.createElement("div");
    cartline.id = "cartline";

    var seller = document.createElement("div");
    seller.textContent = "FlipKart";

    var replacee = document.createElement("div");
    replacee.textContent = "7 Days Replacement Policy";

    var cartline1 = document.createElement("div");
    cartline1.id = "cartline1";

    let a = +data.discountedprice;
    let b = +data.originalprice;

    let c = Math.floor(((b - a) / b) * 100);

    a4 = a4 + a;

    var price = document.createElement("div");
    price.id = "price";
    price.textContent = "₹" + data.discountedprice;

    a1 = a1 + b;
    var price2 = document.createElement("div");
    price2.id = "price2";
    price2.textContent = "₹" + data.originalprice;

    var price3 = document.createElement("div");
    price3.id = "price3";
    price3.textContent = data.discountpercent + " %" + "    off";

    var assuer = document.createElement("img");
    assuer.src = "https://www.adgully.com/img/800/68264_fl.png.jpg";
    assuer.id = "flipass";

    var cartline2 = document.createElement("div");
    cartline2.setAttribute("id", "cartline2");

    var save = document.createElement("div");
    save.textContent = "SAVE FOR LATER";
    save.addEventListener("click", function (event) {
      addtocart(hn);
    });

    var remove = document.createElement("div");
    remove.textContent = "REMOVE";
    remove.addEventListener("click", function (event) {
      deletefromcart(hn);
    });
    displayvalue();

    cartline.append(seller, replacee);
    cartline1.append(price, price2, price3);
    cartline2.append(save, remove);
    imgdiv.append(image, divinp);
    textdiv.append(productName, cartline, cartline1, assuer, cartline2);
    div.append(imgdiv, textdiv);
    document.querySelector("#cartcontent").append(div);
  });
}
function deletefromcart(hn) {
  res.splice(hn, 1);
  localStorage.setItem("cart", JSON.stringify(res));
  alert("Item Removed From Cart");
  a1 = 0;
  a2 = 0;
  a3 = 0;
  a4 = 0;
  displaydata();
  a2 = a1 - a4;
  displayvalue();
}
function addtocart(hn) {
  res.splice(hn, 1);
  localStorage.setItem("cart", JSON.stringify(res));
  alert("Item Added to Wishlist");
  displaydata();
}
function minusinp() {
  var a = document.querySelector("#inp").value;
  var b = +a - 1;
  if (b <= 0) {
    b = 1;
  }
  document.querySelector("#inp").value = b;
}
function plusinp() {
  var a = document.querySelector("#inp").value;
  var b = +a + 1;
  document.querySelector("#inp").value = b;
}

function tocheckout() {
  localStorage.setItem("price", JSON.stringify(a4));
  window.location.href = "checkout.html";
}
var d = document.querySelector("#flipkart-logo");
d.addEventListener("click", function () {
  window.location.href = "index.html";
});
var a = document.querySelector("#more");
a.addEventListener("click", function () {
  window.location.href = "Signup.html";
});
var b = document.querySelector("#log");
b.addEventListener("click", function () {
  window.location.href = "login.html";
});

var c = document.querySelector("#cart");
c.addEventListener("click", function () {
  window.location.href = "cart.html";
});