const reco = [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/sweet-mithai/b/z/d/-original-imagn5emvdsydfsv.jpeg?q=70",
      name: "Lalji soan Papdi Pouch",
      rating: "4.1★",
      number: "(184)",
      price: 66,
      cross: "₹196",
      off: "66% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/xif0q/book/a/7/u/b-d-chaurasia-s-human-anatomy-9th-ed-4-volume-set-pb-2023-original-imaghggqpqvygser.jpeg?q=70",
      name: "Most Reaerched books",
      rating: "4.2★",
      number: "(258)",
      price: 157,
      cross: "₹240",
      off: "34% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/juzuavk0/sweet-mithai/8/a/7/200-pista-soan-papdi-mithai-soan-papdi-karachi-bakery-original-imaffxub8zuugjr7.jpeg?q=70",
      name: "Karachi Bakeri",
      rating: "3.8★",
      number: "(356)",
      price: 36,
      cross: "₹80",
      off: "55% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/sweet-mithai/a/2/2/-original-imagmef2nnae5v8c.jpeg?q=70",
      name: "Karachi Bakeri Papadi",
      rating: "4.3★",
      number: "(433)",
      price: 36,
      cross: "₹80",
      off: "55% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/sweet-mithai/t/d/l/-original-imagjdy8y28zsgxt.jpeg?q=70",
      name: "Panjabi Pure Food",
      rating: "4.3★",
      number: "(433)",
      price: 177,
      cross: "₹240",
      off: "26% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/sweet-mithai/a/2/2/-original-imagmef2nnae5v8c.jpeg?q=70",
      name: "Plain soan papdi",
      rating: "2.7★",
      number: "(50)",
      price: 35,
      cross: "₹140",
      off: "25% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/sweet-mithai/e/d/t/-original-imaggzdgjaymzrsh.jpeg?q=70",
      name: "Heritage Gulab Jamun",
      rating: "3.2★",
      number: "(147)",
      price: 55,
      cross: "₹220",
      off: "60% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/juwzf680/sweet-mithai/m/r/h/200-choclate-soanpapidi-soan-papdi-karachi-bakery-original-imaffxjcpguevf9y.jpeg?q=70",
      name: "Papdi Bakeri",
      rating: "4.2★",
      number: "(142)",
      price: 42,
      cross: "₹80",
      off: "47% off"
    },
  ];
  
  let = renderProduct = "";
  let cardProductContainerreco = document.getElementById("card-product-containerreco")
  
  
  for (let i = 0; i < reco.length; i++) {
    renderProduct += `
      <div class="card-product">
      <div class="productImageContainer">
      <img src="${reco[i].imgurl}">
      </div>
      <h3 class="card-product-name">${reco[i].name}</h3>
      <p class="rating">${reco[i].number}<span class="abc">${reco[i].rating}</span></p>
      <p class="card-product-prices">₹${reco[i].price} <span class="cross">  ${reco[i].cross}</span> <span class="off">  ${reco[i].off}</span></p>
      </div>
      `;
  }
  
  
  cardProductContainerreco.innerHTML = renderProduct;
  console.log(renderProduct);
  
  let cardBtnRightElreco = document.getElementById("card-btn-rightreco")
  let cardBtnLeftElreco = document.getElementById("card-btn-leftreco")
  cardBtnLeftElreco.style.display = "none"
  
  
  cardBtnRightElreco.addEventListener("click", function(){
      cardProductContainerreco.style.transform = "translatex(-57%)"
      cardBtnRightElreco.style.display = "none"
      cardBtnLeftElreco.style.display = "block"
  })
  
  cardBtnLeftElreco.addEventListener("click", function(){
      cardProductContainerreco.style.transform = "translatex(0%)"
      cardBtnRightElreco.style.display = "block"
      cardBtnLeftElreco.style.display = "none"
  })
  