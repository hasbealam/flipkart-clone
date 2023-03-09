const bestfood = [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70",
      name: "Rider Helmets",
      price: 699,
      brand: "Vega, Steelbird, HRX &More",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
      name: "Top selling Stationery",
      price: 49,
      brand: "Pens, NoteBook & More",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=70",
      name: "Yoga Mat",
      price: 169,
      brand: "BeatXP, HRX & Adrenex",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",
      name: "Electric Cycles",
      price: 4990,
      brand: "NUZE, Motovolt & More",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/k186fm80/bat/9/f/n/1000-1200-short-handle-endorsed-for-light-hard-tennis-ball-with-original-imafkuuyxrrphkbr.jpeg?q=70",
      name: "Cricket",
      price: 599,
      brand: "CEAT, Nevia & More",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      name: "Non Geared Cycles",
      price: 3999,
      brand: "Hercules, Hero & More",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kuczmvk0/cases-covers/back-cover/w/w/t/m-12954-colorcase-original-imag7g7knnn66wdh.jpeg?q=70",
      name: "Plain Cases & Covers",
      price: 169,
      brand: "For all top Models",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      name: "Printers",
      price: 3999,
      brand: "HP",
    },
  ];
  
  let = renderProduct = "";
  let cardProductContainerf = document.getElementById("card-product-containerf")
  
  
  for (let i = 0; i < bestfood.length; i++) {
    renderProduct += `
      <div class="card-product">
      <div class="productImageContainer">
      <img src="${bestfood[i].imgurl}">
      </div>
      <h3 class="card-product-name">${bestfood[i].name}</h3>
      <p class="card-product-price">From ₹${bestfood[i].price}</p>
      <p card-product-desc>${bestfood[i].brand}</p>
      </div>
      `;
  }
  
  
  cardProductContainerf.innerHTML = renderProduct;
  console.log(renderProduct);
  
  let cardBtnRightElf = document.getElementById("card-btn-rightf")
  let cardBtnLeftElf = document.getElementById("card-btn-leftf")
  cardBtnLeftElf.style.display = "none"
  
  
  cardBtnRightElf.addEventListener("click", function(){
      cardProductContainerf.style.transform = "translatex(-100%)"
      cardBtnRightElf.style.display = "none"
      cardBtnLeftElf.style.display = "block"
  })
  
  cardBtnLeftElf.addEventListener("click", function(){
      cardProductContainerf.style.transform = "translatex(0%)"
      cardBtnRightElf.style.display = "block"
      cardBtnLeftElf.style.display = "none"
  })
  