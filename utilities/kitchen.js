const kitchen = [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/k0e66q80/plant-sapling/c/e/7/air-purifying-pothos-money-plant-with-imported-pot-1-water-original-imafk747aczgq6ze.jpeg?q=70",
      name: "Live Plants",
      price: 6190,
      brand: "selling",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70",
      name: "Mosquito Nets",
      price: 199,
      brand: "Best Deal Price",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70",
      name: "Wall Decor Item",
      price: 499,
      brand: "Top Salers",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/jxxkvww0/bath-linen-set/h/y/h/p4-bathsports-gretea-heelium-original-imafg3zc8kfqzpza.jpeg?q=70",
      name: "Bath Linen sets",
      price: 129,
      brand: "Best selling Range",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/ki4w0i80/processor/r/6/a/amd-ryzen-5-5600x-original-imafyy4ctswb7kvu.jpeg?q=70",
      name: "Processors",
      price: 11290,
      brand: "intel & More",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/kkmwr680/painting/y/x/r/42-sanfpnl31211-saf-original-imafzxvjzwepgfzc.jpeg?q=70",
      name: "Pintings",
      price: 149,
      brand: "Best Selling Range",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/k3j1z0w0/ceiling-lamp/w/7/r/gold-01-classical-original-imafmbywhhurgf6b.jpeg?q=70",
      name: "Decore Lighting",
      price: 269,
      brand: "Best Discount",
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/400/400/km82d8w0/microphone/o/q/d/3-5mm-clip-microphone-for-youtube-mobile-pc-laptop-android-original-imagf6c3zkutsr8r.jpeg?q=70",
      name: "Microphones",
      price: 399,
      brand: "Explore Now!",
    },
  ];
  
  let = renderProduct = "";
  let cardProductContainerkitchen = document.getElementById("card-product-containerkitchen")
  
  
  for (let i = 0; i < kitchen.length; i++) {
    renderProduct += `
      <div class="card-product">
      <div class="productImageContainer">
      <img src="${kitchen[i].imgurl}">
      </div>
      <h3 class="card-product-name">${kitchen[i].name}</h3>
      <p class="card-product-price">From ₹${kitchen[i].price}</p>
      <p card-product-desc>${kitchen[i].brand}</p>
      </div>
      `;
  }
  
  
  cardProductContainerkitchen.innerHTML = renderProduct;
  
  let cardBtnRightElkitchen = document.getElementById("card-btn-rightkitchen")
  let cardBtnLeftElkitchen = document.getElementById("card-btn-leftkitchen")
  cardBtnLeftElkitchen.style.display = "none"
  
  
  cardBtnRightElkitchen.addEventListener("click", function(){
      cardProductContainerkitchen.style.transform = "translatex(-100%)"
      cardBtnRightElkitchen.style.display = "none"
      cardBtnLeftElkitchen.style.display = "block"
  })
  
  cardBtnLeftElkitchen.addEventListener("click", function(){
      cardProductContainerkitchen.style.transform = "translatex(0%)"
      cardBtnRightElkitchen.style.display = "block"
      cardBtnLeftElkitchen.style.display = "none"
  })
  