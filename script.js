
import { imageSlider } from "./utilities/slider.js";


/*******************image Slider********************* */
let imageSliderListEl = document.querySelector(".imageSliderList");
let imageSliderListHTML = "";

imageSlider.forEach((el) => {
  imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${el.link}">
            <img src="${el.img}" />
        </a>
    </div>
    `;
});
imageSliderListEl.innerHTML = imageSliderListHTML;

let preve_imageBtnEl = document.getElementById("preve_imageBtn");
let next_imageBtn = document.getElementById("next_imageBtn");
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage);
next_imageBtn.addEventListener("click", handleNextImage);

function handlePreveImage() {
  let imageallList = document.querySelectorAll(".imageSliderItem");
  if (start < 0) start += 100;
  imageallList.forEach((el) => {
    el.style.transform = `translateX(${start}%)`;
  });
}
function handleNextImage() {
  let imageallList = document.querySelectorAll(".imageSliderItem");
  if (start > end) start -= 100;
  imageallList.forEach((el) => {
    el.style.transform = `translateX(${start}%)`;
  });
}

function renderImageSlider() {
  if (start > end) {
    handleNextImage();
  } else {
    start = 100;
  }
}

setInterval(renderImageSlider, 2000);

/*******************image Slider ends********************* */

