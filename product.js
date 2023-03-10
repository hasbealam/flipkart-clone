
//filtering
let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");
filterLessThan50Btn.addEventListener("click", async function () {
  let arr = [];
  try {
    let data = await fetch(' http://localhost:3000/clots');
    let res = await data.json();
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      if (res[i].finalPrice< 700) {
        arr.push(res[i]);
      }
    }
    topp(arr);
  } catch (error) {
    console.log(error);
  }
});


filterMoreThanEqual50Btn.addEventListener("click", async function () {
  let arr = [];
  try {
    let data = await fetch(' http://localhost:3000/clots');
    let res = await data.json();
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      if (res[i].finalPrice>700) {
        arr.push(res[i]);
      }
    }
    topp(arr);
  } catch (error) {
    console.log(error);
  }
});

    function topp(data)
    {
      document.getElementById("items").innerText="";
       data.map(function(elem, index){
        var divmain = document.createElement("div")
        divmain.setAttribute("id", "main")

        var divleft = document.createElement("div")
        divleft.setAttribute("id", "left")

        var divtag = document.createElement("div")
        divtag.setAttribute("id", "tag")

        var imgprod = document.createElement("img")
        imgprod.setAttribute("src", elem.image1)
        imgprod.setAttribute("id","image")

        imgprod.addEventListener("click",function(){
          
          var temp = {
              img1: elem.image1,
              img2:elem.image2,
              img3:elem.image3,
              name: elem.name,
              dicri:elem.discription,
              price: elem. finalPrice,
              off:elem.discount,
              ogprice: elem.mrp,
              rat:elem.rating,
              review:elem.review,
          }
          
          // boatcart.push(temp)
          localStorage.setItem("pro-data",JSON.stringify(temp))
          location.href="product_details.html";
        })

    divleft.append(divtag,imgprod)

        var divright = document.createElement("div")
        divright.setAttribute("id", "right")

        var divname = document.createElement("div")
        divname.setAttribute("id", "name")
        divname.textContent = elem.name

        var divscri = document.createElement("div")
        divscri.setAttribute("id", "dis")
        divscri.textContent = elem.discription


        var divpricebox = document.createElement("div")
        divpricebox.setAttribute("id", "priceBox")

        var divfinalprice = document.createElement("div")
        divfinalprice.setAttribute("id", "finalprice")
        divfinalprice.textContent = "Rs." +elem.finalPrice

        var divdiscount = document.createElement("div")
        divdiscount.setAttribute("id", "discount")
        divdiscount.textContent = elem.discount+ "% off";

        var divmrp = document.createElement("div")
        divmrp.setAttribute("id", "mrp")
        divmrp.textContent = "Rs." +elem.mrp;

        divpricebox.append(divfinalprice, divdiscount, divmrp)
        // divright.append(divname, divpricebox)
        
        var upitag = document.createElement("p")
        upitag.textContent = "Size " +elem.size;



        divright.append(divname,divscri, divpricebox, upitag)

        divmain.append(divleft, divright)
        document.getElementById("items").append(divmain)


    })
  }
  var boatcart = JSON.parse(localStorage.getItem("boat-cart")) || []


  //shorting
  let sortAtoZBtn = document.getElementById("sort-low-to-high");
  let sortZtoABtn = document.getElementById("sort-high-to-low");
  sortAtoZBtn.addEventListener("click", function () {
    let url = 'http://localhost:3000/clots?_sort=finalPrice&_order=asc';
    init(url);
  });
  sortZtoABtn.addEventListener("click", function () {
    let url = `http://localhost:3000/clots?_sort=finalPrice&_order=desc`;
    init(url);
  });

  let url =' http://localhost:3000/clots';
async function getData(url) {
  try {
    let data = await fetch(url);
    let res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}


  async function init(url) {
    console.log(url);
    try {
      let data = await getData(url);
      topp(data);
    } catch (error) {
      console.log(error);
    }
  }
  init(url);





  //header
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
}

updateLoginButtonText();

window.addEventListener('storage', function(event) {
  if (event.key === 'loggedInUser') {
    updateLoginButtonText();
  }
});

 document.querySelector(".lgin").addEventListener("click" , loginfun);
function loginfun(){
  window.location.href="login.html"
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

 