const topSelection = [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/l1v1uvk0/artificial-plant/q/c/w/21-yes-artificial-wild-plant-025-devnidhi-agri-products-original-imagdc7zdzwgpb2b.jpeg?q=70",
      name: "Green Articifical Plants",
      price: 699,
      brand: "Egate",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/xif0q/brief/k/4/m/xxl-regular-wear-trunks-imported-ck-underwear-original-imaggjznzr4unzcp.jpeg?q=70",
      name: "Man UnderWear",
      price: 299,
      brand: "jocky",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kyhlfgw0/desk-organizer/j/l/p/acrylic-pen-stand-pen-stand-spyke-original-imagaps4x4zvxbkw.jpeg?q=70",
      name: "Desk Originize",
      price: 9999,
      brand: "Spyke",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kpcy5jk0/table-clock/k/e/u/smart-night-light-digital-alarm-clock-with-date-indoor-original-imag3hzte8qmgd3p.jpeg?q=70",
      name: "Digital Watch",
      price: 990,
      brand: "Top Rated",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/xif0q/key-holder/f/j/i/7-bk-balodiya-krafts-original-imaghmud43sfbft2.jpeg?q=70",
      name: "Monitors",
      price: 8279,
      brand: "Dell",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/l3dcl8w0/artificial-flower/y/3/t/6-6-set-multi-colors-akp-original-imagehpsmvbazmas.jpeg?q=70",
      name: "plants",
      price: 949,
      brand: "htr",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/xif0q/bulb/r/y/d/1-b22-foldable-light-25w-4-leaf-fan-blade-home-ceiling-lights-95-original-imaggykhhqhtk5yy.jpeg?q=70",
      name: "Bulb",
      price: 999,
      brand: "Everyday",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kvfkivk0/loofah/z/d/u/exfoliating-loofah-gentle-hypoallergenic-1-furr-by-pee-safe-original-imag8c3m7gdezt6y.jpeg?q=70",
      name: "Loffah",
      price: 99,
      brand: "Dove",
    },
  ];
  
  let = renderProduct = "";
  let cardProductContainertopSelection = document.getElementById("card-product-containertopSelection")
  
  
  for (let i = 0; i < topSelection.length; i++) {
    renderProduct += `
      <div class="card-product">
      <div class="productImageContainer">
      <img src="${topSelection[i].imgurl}">
      </div>
      <h3 class="card-product-name">${topSelection[i].name}</h3>
      <p class="card-product-price">From ₹${topSelection[i].price}</p>
      <p card-product-desc>${topSelection[i].brand}</p>
      </div>
      `;
  }
  
  
  cardProductContainertopSelection.innerHTML = renderProduct;
  console.log(renderProduct);
  
  let cardBtnRightEltopSelection = document.getElementById("card-btn-righttopSelection")
  let cardBtnLeftEltopSelection = document.getElementById("card-btn-lefttopSelection")
  cardBtnLeftEltopSelection.style.display = "none"
  
  
  cardBtnRightEltopSelection.addEventListener("click", function(){
      cardProductContainertopSelection.style.transform = "translatex(-100%)"
      cardBtnRightEltopSelection.style.display = "none"
      cardBtnLeftEltopSelection.style.display = "block"
  })
  
  cardBtnLeftEltopSelection.addEventListener("click", function(){
      cardProductContainertopSelection.style.transform = "translatex(0%)"
      cardBtnRightEltopSelection.style.display = "block"
      cardBtnLeftEltopSelection.style.display = "none"
  })
  