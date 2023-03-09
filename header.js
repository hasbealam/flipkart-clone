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
