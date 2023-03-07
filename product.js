const baseServerURL = 'http://localhost:3000/clots';

let url = `${baseServerURL}/cats`;
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
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}
init(url);

function displayData(data) {
  document.querySelector(".card-list").textContent = "";
  data.map((ele, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("data-id", index + 1);

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "card-image");
    let img = document.createElement("img");
    img.src = `http://localhost:9090${ele.image}`;
    imgDiv.append(img);

    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class", "card-body");

    let title = document.createElement("h3");
    title.setAttribute("class", "card-item card-title");
    title.textContent = ele.name;
    let desDiv = document.createElement("div");
    desDiv.setAttribute("class", "card-item card-description");
    desDiv.textContent = ele.description;
    let noDiv = document.createElement("div");
    noDiv.setAttribute("class", "card-item card-additional-info");
    noDiv.textContent = ele.cost;
    bodyDiv.append(title, desDiv, noDiv);

    div.append(imgDiv, bodyDiv);
    document.querySelector(".card-list").append(div);
  });
}

    /*topp();
    function topp(){
       womensData.map(function(elem, index){
        var divmain = document.createElement("div")
        divmain.setAttribute("id", "main")

        var divleft = document.createElement("div")
        divleft.setAttribute("id", "left")

        var divtag = document.createElement("div")
        divtag.setAttribute("id", "tag")

        var imgprod = document.createElement("img")
        imgprod.setAttribute("src", elem.image)
        imgprod.setAttribute("id","image")
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
    }*/