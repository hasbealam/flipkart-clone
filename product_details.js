let product = JSON.parse(localStorage.getItem("pro-data"));
let hiddenOffers = true;
displayProductData(product);
function displayProductData(product) {
  let number_of_ratings = () => {
    return Math.ceil(Math.random() * (999 - 100) + 100);
  };
  document.querySelector("#image1").src = product.img1;
  document.querySelector("#image2").src = product.img2;
  document.querySelector("#image3").src = product.img3;

  let productImage = document.querySelector("#product_image");
  let image = document.createElement("img");
  image.src = product.img1;
  productImage.append(image);

  document.querySelector("#brand_name").innerText = product.name;
  document.querySelector("#product_name").innerText = product.dicri;
  document.querySelector("#discount_percentage").innerText = `${product.off} %`;
  document.querySelector("#discounted_price").innerText = product.price;
  document.querySelector("#original_price").innerText = product.ogprice;
  document.querySelector("#rating_in_points").innerText = product.rat;
  document.querySelector(
    "#number_of_reviews"
  ).innerText = `${number_of_ratings()} ratings and ${product.review} reviews `;

 document.querySelector(".color_image > img").src = product.img1;




}

// hiddenOffer
document.querySelector("#hidden_offer").addEventListener("click", function () {
  if (hiddenOffers) {
    document.querySelector("#hidden_offers").style.display = "block";
    document.querySelector("#hidden_offer").style.display = "none";
    hiddenOffers = !hiddenOffers;
  } else if (hiddenOffers) {
    console.log(hiddenOffers);
    document.querySelector("#hidden_offers").style.display = "none";
    document.querySelector("#hidden_offer").style.display = "block";
    hiddenOffers = !hiddenOffers;
  }
});
