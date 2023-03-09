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
document.querySelector("logout").addEventListener("click" , logoutfunc);
function logoutfunc(){
  loginButton.textContent="Login"
  document.querySelector('.login_menu_top').style.display = 'flex'; 
    document.querySelector(".logout").style.display='none';
    document.querySelector(".login_menu").style.height="325px";
    localStorage.removeItem('loggedInUser');
    window.location.href="header.html";
}