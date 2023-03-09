const elelctronicsProducts = [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/xif0q/projector/k/h/n/i9-pro-max-hd-720p-10-e03i31-led-projector-egate-original-imaghhxfshbcbk55.jpeg?q=70",
      name: "Projectors",
      price: 6990,
      brand: "Egate",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70",
      name: "Monitors",
      price: 6599,
      brand: "Acer",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
      name: "Projectors",
      price: 9999,
      brand: "Zebronics",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kkfrjww0/monitor/k/3/t/pd2500q-9hlhllatbn-benq-original-imafzs3h6zxeypsb.jpeg?q=70",
      name: "BenQ Monitors",
      price: 9990,
      brand: "Top Rated",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=70",
      name: "Monitors",
      price: 8279,
      brand: "Dell",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
      name: "Monitors",
      price: 7949,
      brand: "Lenovo",
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
  let cardProductContainer = document.getElementById("card-product-container")
  
  
  for (let i = 0; i < elelctronicsProducts.length; i++) {
    renderProduct += `
      <div class="card-product">
      <div class="productImageContainer">
      <img src="${elelctronicsProducts[i].imgurl}">
      </div>
      <h3 class="card-product-name">${elelctronicsProducts[i].name}</h3>
      <p class="card-product-price">From ₹${elelctronicsProducts[i].price}</p>
      <p card-product-desc>${elelctronicsProducts[i].brand}</p>
      </div>
      `;
  }
  
  
  cardProductContainer.innerHTML = renderProduct;
  console.log(renderProduct);
  
  let cardBtnRightEl = document.getElementById("card-btn-right")
  let cardBtnLeftEl = document.getElementById("card-btn-left")
  cardBtnLeftEl.style.display = "none"
  
  
  cardBtnRightEl.addEventListener("click", function(){
      cardProductContainer.style.transform = "translatex(-100%)"
      cardBtnRightEl.style.display = "none"
      cardBtnLeftEl.style.display = "block"
  })
  
  cardBtnLeftEl.addEventListener("click", function(){
      cardProductContainer.style.transform = "translatex(0%)"
      cardBtnRightEl.style.display = "block"
      cardBtnLeftEl.style.display = "none"
  })
  