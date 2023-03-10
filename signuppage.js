function signuppage(){
    return `
    <div id="logincontainer">
		<div class="left-side">
			<h1>Looks like you're new here!</h1>
			<p>
				Sign up with your mobile<br> number to get started
			</p>
			<div class="loginimg">
				<img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_dec4bf.png">
			</div>
		</div>
		<div class="right-side">
			<div class="input item">
				<input type="text" id="name" required>
				<label for="name" id="name-label">Name</label>
			</div>
			<div class="input item">
				<input type="text" id="email" required>
				<label for="email" id="email-label">Email Address</label>
			</div>
			<div class="input item">
                <input type="number" id="number" name="number" required>

                <label for="number" id="number-label" >Mobile Number</label>
              </div>
              
			<p>By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
			<div class="button">
				<button id="otp">Continue</button>
               
			</div>
            <div class="button">
            <button id="existing"> Existing User? Log in</button> 
            </div>
		</div>
	</div>`
}
export default signuppage;