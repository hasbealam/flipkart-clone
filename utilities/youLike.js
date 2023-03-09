const youLike = [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/key-holder/y/6/l/8-printed-brown-radha-krishna-two-box-key-holder-khatu-crafts-original-imaghv7ngwdxyfyp.jpeg?q=70",
      name: "Khatu Crafts Printed Radhakrishna Two Box Key Holder",
      rating: "4.1★",
      number: "(277)",
      price: 169,
      cross: "₹499",
      off: "66% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/kcuug7k0/egg-cooker/h/a/f/blue-electric-egg-boiler-nec-1530-egg-cooker-hiccup-original-imaftw8gzjuhghp5.jpeg?q=70",
      name: "Egg Poacher Steamer Cooker Boiler Fryer Premium Electric Boiler",
      rating: "3.9★",
      number: "(162)",
      price: 323,
      cross: "₹764",
      off: "57% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/312/312/kiqbma80-0/electric-kettle/r/n/r/egg-boiler-with-kettle-kettle-automatic-2l-egg-boiler-xc01-original-imafygfkn6zpeb2k.jpeg?q=70",
      name: "Papdi Bakeri",
      rating: "4.9★",
      number: "(577)",
      price: 1079,
      cross: "₹1134",
      off: "4% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/kyhlfgw0/desk-organizer/z/c/j/acrylic-pen-stand-pen-stand-spyke-original-imagapsgxyhbqzcb.jpeg?q=70",
      name: "Papdi Bakeri",
      rating: "4.5★",
      number: "(456)",
      price: 385,
      cross: "₹899",
      off: "57% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/knhsgi80/racquet/a/0/u/g4-3-25-inches-g-force-3700-superlite-strung-1-g-force-superlite-original-imag25n4h7gjgrc2.jpeg?q=70",
      name: "Li-Ning G-Force 3700 Superlite Black, Orange Strung Badminton Racquet",
      rating: "4.2★",
      number: "(1432)",
      price: 1989,
      cross: "₹4590",
      off: "56% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/jsge4cw0/ball/u/n/f/400-440-5-22-russia-red-1-dibacordtl-football-dibaco-sports-original-imafdzqhcarc9gnz.jpeg?q=70",
      name: "Papdi Bakeri",
      rating: "3.2★",
      number: "(1432)",
      price: 470,
      cross: "₹1299",
      off: "63% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-sandal/9/b/p/-original-imaghugyryunffpd.jpeg?q=70",
      name: "Velcro Sports Sandals For Boys & Girls  (Pink)",
      rating: "4.1★",
      number: "(1422)",
      price: 399,
      cross: "₹999",
      off: "60% off"
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/electric-cycle/z/i/m/e-power-l6-27-5t-electric-cycle-with-front-suspension-dual-disc-original-imaghyzgbsmqstex.jpeg?q=70",
      name: "OKAYA Freedum LI-2 Booking for Ex-showroom Price (Portable Charger, Matte Green)",
      rating: "4.4★",
      number: "(14)",
      price: 7339,
      cross: "₹7899",
      off: "2% off"
    },
  ];
  
  let = renderProduct = "";
  let cardProductContaineryouLike = document.getElementById("card-product-containeryouLike")
  
  
  for (let i = 0; i < youLike.length; i++) {
    renderProduct += `
    <div class="card-product">
    <div class="productImageContainer">
    <img src="${youLike[i].imgurl}">
    </div>
    <h3 class="card-product-name">${youLike[i].name}</h3>
    <p class="rating">${youLike[i].number}<span class="abc">${youLike[i].rating}</span></p>
    <p class="card-product-prices">₹${youLike[i].price} <span class="cross">  ${youLike[i].cross}</span> <span class="off">  ${youLike[i].off}</span></p>
    </div>
    `;
  }
  
  
  cardProductContaineryouLike.innerHTML = renderProduct;
  console.log(renderProduct);
  
  let cardBtnRightElyouLike = document.getElementById("card-btn-rightyouLike")
  let cardBtnLeftElyouLike = document.getElementById("card-btn-leftyouLike")
  cardBtnLeftElyouLike.style.display = "none"
  
  
  cardBtnRightElyouLike.addEventListener("click", function(){
      cardProductContaineryouLike.style.transform = "translatex(-57%)"
      cardBtnRightElyouLike.style.display = "none"
      cardBtnLeftElyouLike.style.display = "block"
  })
  
  cardBtnLeftElyouLike.addEventListener("click", function(){
      cardProductContaineryouLike.style.transform = "translatex(0%)"
      cardBtnRightElyouLike.style.display = "block"
      cardBtnLeftElyouLike.style.display = "none"
  })
  