let images = [
  "https://rukminim1.flixcart.com/image/128/128/xif0q/shirt/n/i/h/s-r-stbrg-stoneberg-original-imaggjymvpnxz6re.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/xif0q/shirt/m/u/q/s-r-stbrg-stoneberg-original-imaggjymfu4bszvv.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/128/128/xif0q/shirt/a/c/9/s-r-stbrg-stoneberg-original-imaggjymbsghkx6k.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/n/i/h/s-r-stbrg-stoneberg-original-imaggjymvpnxz6re.jpeg?q=70",
];
let hiddenOffers = true;
displayProductData();
function displayProductData() {
  let sideImages = document.querySelectorAll("#side_images div");
  for (let i = 0; i < sideImages.length; i++) {
    let image = document.createElement("img");
    image.src = images[i];
    sideImages[i].append(image);
  }
  let productImage = document.querySelector("#product_image");
  let image = document.createElement("img");
  image.src = images[3];
  productImage.append(image);
}

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
