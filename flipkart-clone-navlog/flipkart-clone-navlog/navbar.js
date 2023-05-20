function navbar() {
    return `<header>
  <div class="logo-cntainer">
    <div class="logo">
      <img
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
      />
    </div>
    <div class="explore">
      <a href="https://www.flipkart.com/plus">
        <p>Explore <span class="plus"> Plus</span></p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
        />
      </a>
    </div>
  </div>

  <div class="search">
    <form id="search-form">
      <input
        type="text"
        id="seach-input"
        placeholder="Search for products brand and more"
        autocomplete="off"
      />
    </form>
    <i class="fa-solid fa-magnifying-glass"></i>
    <!--recent search-->
    <div class="recent_Search">
      <div class="recent_search_list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>Mobile</p>
      </div>
    </div>
  </div>
  <div class="loginBtn_container">
    <a href="#" class="lgin">Login</a>
    <div class="login_menu">
      <div class="login_menu_list">
        <div class="login_menu_top">
          <p>New Customer?</p>
          <a href="#" class="sgin"> Sign Up</a>
        </div>
        <div class="menu_nav_link">
          <a href="#">
            <i class="fa-solid fa-circle-user"></i>
            <p>My Profile</p>
          </a>
          <a href="#">
            <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/plusBlue.svg" class="menu_nav_icon" />
            <p>Flipkart plus zone</p>
          </a>
          <a href="#">
            <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/orderIcon.svg" class="menu_nav_icon" />
            <p>Order</p>
          </a>
          <a href="#">
            <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/wishlistIcon.svg" class="menu_nav_icon" />
            <p>Wishlist</p>
          </a>
          <a href="#">
            <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/rewardIcon.svg" class="menu_nav_icon" />
            <p>Rewards</p>
          </a>
          <a href="#">
            <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/giftIcon.svg" class="menu_nav_icon" />
            <p>Gift Cards</p>
          </a>
          <div class="logout">
            <a href="#">
              <i class="fa-solid fa-right-from-bracket"></i>
              <p class="lgout">Logout</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="show-login"></div>
  <div id="show-signup"></div>
  <a
    class="seller-page"
    href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
  >
    Become a Seller</a
  >

  <div class="more_link">
    More
    <i class="fa-solid fa-angle-down icon_more"></i>
    <div class="more_menu">
      <div class="more_menu_list">
        <a href="https://www.flipkart.com/communication-preferences/push?t=all">
          <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/notificationIcon.svg" class="menu_nav_icon" />
          <p>Notification Preferences</p>
        </a>
        <a href="https://www.flipkart.com/helpcentre">
          <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/customerIcon.svg" class="menu_nav_icon" />
          <p>24 X 7 Customer Care</p>
        </a>
        <a
          href="https://advertising.flipkart.com/login?returl=/?otracker=ch_vn_advertise_header"
        >
          <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/advertiseIcon.svg" class="menu_nav_icon" />
          <p>Advertise</p>
        </a>
        <a
          href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps"
        >
          <img src="./flipkart-clone-navlog/flipkart-clone-navlog/icon/downloadIcon.svg" class="menu_nav_icon" />
          <p>Download App</p>
        </a>
      </div>
    </div>
  </div>
  <div class="cart-page">
    <i class="fa-solid fa-cart-shopping"></i>
    <p>Cart</p>
  </div>
</header>
`;
}

export default navbar;