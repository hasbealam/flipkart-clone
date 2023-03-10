function logindiv(){
   return`
    <div id = "logincontainer"> 
    <div class="left-side">
      <h1 class="user-text">Login</h1>
      <p>
        Get access to your<br> Orders,
        Wishlist and<br>
        Recommendations
      </p>
      <div class="loginimg">
 <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_dec4bf.png">
 </div>
</div>
<div class="right-side">
 <div class="input items">
  <input type="text" id="number" required> 
  <label for="number" id="number-label"> Enter Email / Mobile Number</label>
  </div>
 
  <p>By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy. </a></p> 
  <div class="button">
  <button id="otp" > Request OTP</button>
  </div>
  <div class="new-account">
  <h4 id="signbtn"> New to Flipkart? Create an account </h4>
  </div>
</div>
</div> 
    `
}
export default logindiv;