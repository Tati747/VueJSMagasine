Vue.component('header_component', {
    template: `<div class="header">
<div class="container">
<div class="leftHeader">
<a href="index.html"><img src="images/header/logo.png" alt=""></a>
<img class="searchIcon" src="images/header/search.png" alt="">
</div>
<div class="rightHeader">
<img class="bars" src="images/header/bars.png" alt="">
<a href="registration.html"><img class="userIcon" src="images/header/user.png" alt=""></a>
<span class="cartIconWrap">
<img class="cartIcon" src="images/header/cart.png" alt="">
<span>0</span>
</span>
<div class="basket hidden">
                    <div class="basketRow basketHeader">
                        <div>Название товара</div>
                        <div>Количество</div>
                        <div>Цена за шт.</div>
                        <div>Итого</div>
                    </div>

                    <div class="basketTotal">
                       <a href="./cart.html"> Товаров в корзине на сумму: $</a>
                        <span class="basketTotalValue">0</span>
                    </div>
                </div>
</div>
</div>
    </div>`
})

Vue.component('main_component', {
    template: `  <div class="start">
    <div class="start_container">
        <img src="images/start.png">
        <div class="slogan">

            <p class="slogan_first">THE BRAND<br>
                <div class="slogan_second">OF LUXERIOUS <span class="slogan_second_color">FASHION</span></div>

        </div>
    </div>
</div>`
})

Vue.component('preposition_component', {
    template: `<div class="container">
    <div class="preposition_block">

        <div class="preposition_block_women">
            <p class="preposition_text">30% OFF<br><span class="preposition_text_color">FOR WOMEN</span></p>
        </div>

        <div class="preposition_block_man">
            <p class="preposition_text">30% OFF<br><span class="preposition_text_color">FOR MEN</span></p>
        </div>

        <div class="preposition_block_child">
            <p class="preposition_text">30% OFF<br><span class="preposition_text_color">FOR KIDS</span></p>
        </div>
    </div>

    <div class="preposition_block_two">


        <p class="preposition_text">LUXIROUS & TRENDY<br><span class="preposition_text_color">ACCESORIES</span>
        </p>

    </div>
</div>`
})

Vue.component('featured_component', {
    template: `<div class="featured container">
    <h2 class="featuredHeader">Fetured Items</h2>
    <div class="featuredTitle">Shop for items based on what we featured in this week</div>

    <!-- Здесь будут появляться карточки товаров -->
    <div class="featuredItems">

    </div>


</div> `
})

Vue.component('button_component', {
    template: `<div class="container_product_button">
        <a href="catalog.html" class="product_button">Browse All Product</a>
    </div>`
})

Vue.component('services_component', {
    template: `<div class="services">
    <div class="container">

        <div class="serivceUnit">
            <img src="images/services/delivery.svg" alt="">
            <div class="servicesTitle">
                Free Delivery
            </div>
            <div class="servicesText">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </div>
        </div>

        <div class="serivceUnit">
            <img src="images/services/discount.svg" alt="">
            <div class="servicesTitle">
                Sales & discounts
            </div>
            <div class="servicesText">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </div>
        </div>

        <div class="serivceUnit">
            <img src="images/services/assurance.svg" alt="">
            <div class="servicesTitle">
                Quality assurance
            </div>
            <div class="servicesText">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </div>
        </div>
    </div>
</div>`
})

Vue.component('subscribe_component', {
    template: `
    <div class="subscribe">
        <div class="container">

        <div class="subscribeLeft">
            <img src="images/subscribeUser.png" alt="">
            <div class="subscribeUserText">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
            </div>
        </div>

        <div class="subscribeRight">
            <div class="subscribeTitle">
                SUBSCRIBE
            </div>
            <div class="subscribeText">
                FOR OUR NEWLETTER AND PROMOTION
            </div>
            <form action="" class="subscribeForm">
                <input type="text" placeholder="Enter Your Email">
                <button>Subscribe</button>
            </form>
        </div>

    </div>
</div>`
})

Vue.component('footer_component', {
    template: `
    <div class="footer">
        <div class="container">
            <div class="footerLeft">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
            <div class="footerRight">
                &copy; 2021 Brand All Rights Reserved.
            </div>
        </div>
    </div>`
})
Vue.component('newarrivals_component', {
    template: `<div class="newArrivals">
    <div class="container">
        <h1>NEW ARRIVALS</h1>
        <nav>
            <a href="#">HOME</a>
            <span>/</span>
            <a href="#">MEN</a>
            <span>/</span>
            <a href="#">NEW ARRIVALS</a>
        </nav>
    </div>
</div>`
})

Vue.component('filters_component', {
    template: `<div class="filters">
    <div class="container">
        <div class="filtersLeft">
            <span class="filterLabel">FILTER</span>
            <img class="filterIcon" src="images/filter.svg" alt="">
            <div class="filterPopup hidden">
                <nav class="filterCategory">
                    <div class="filterCategoryHeader">CATEGORY</div>
                    <div class="hidden">
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies & Sweatshirts</a>
                        <a href="#">Jackets & Coats</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Sweaters & Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </nav>
                <nav class="filterCategory">
                    <div class="filterCategoryHeader">BRAND</div>
                    <div class="hidden">
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies & Sweatshirts</a>
                        <a href="#">Jackets & Coats</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Sweaters & Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </nav>
                <nav class="filterCategory">
                    <div class="filterCategoryHeader">DESIGNER</div>
                    <div class="hidden">
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies & Sweatshirts</a>
                        <a href="#">Jackets & Coats</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Sweaters & Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="filtersRight">
            <div class="filterTrending">
                TRENDING NOW
                <img src="images/filterArrow.svg" alt="">
            </div>
            <div class="filterSize">
                <div class="filterSizeWrap">
                    SIZE
                    <img src="images/filterArrow.svg" alt="">
                </div>
                <div class="filterSizes hidden">
                    <div>
                        <input type="checkbox"> XS
                    </div>
                    <div>
                        <input type="checkbox"> S
                    </div>
                    <div>
                        <input type="checkbox"> M
                    </div>
                    <div>
                        <input type="checkbox"> L
                    </div>
                </div>
            </div>
            <div class="filterPrice">
                PRICE
                <img src="images/filterArrow.svg" alt="">
            </div>
        </div>
    </div>
</div>`
})

Vue.component('pagination_component', {
    template: `<div class="pagination">
    <a href="#">
        <img src="images/chevronLeft.svg" alt="">
    </a>
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6.....20</a>
    <a href="#">
        <img src="images/chevronRight.svg" alt="">
    </a>
</div>`
})

Vue.component('product-component', {
    template: `<div class="product">
    <div class="product_container">
    <img src="images/chevronLeft.svg">
    <img src="images/start.png">
    <img src="images/chevronRight.svg">
    </div>
</div>`
})

Vue.component('description_component', {
    template: `<div class="product_card">
    <p class="product_card_title">MEN COLLECTION</p>
    <p class="element_decoration"></p>
    <p class="product_name">MOSCHINO CHEAP AND CHIC</p>
    <p class="product_description">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.
    </p>
    <p class="product_price">$561</p>
    <p class="element_decoration_two"></p>
    <div class="choose">
        <p class="choose_text">CHOOSE COLOR</p><img src="images/filterArrow.svg" alt="">
        <p class="choose_text">CHOOSE SIZE</p><img src="images/filterArrow.svg" alt="">
        <p class="choose_text">QUANTITY</p><img src="images/filterArrow.svg" alt="">
    </div>
    <a href="#" class="product_button">Add to Cart</a>
</div>`


})

Vue.component('shopping_component', {
    template: `<div class="newArrivals">
    <div class="container">
        <h1>SHOPPING CART</h1>
    </div>
</div>`
})

Vue.component('cart_component', {
    template: `<div class="container">
    <div class="basic_content">
    <div class="item">
        <div class="item_cart">
            <div class="item_picture"><a href="product.html"><img src="images/featured/0.jpg"></a></div>
            <div class="item_description">
                <p class="item_name">MANGO PEOPLE T-SHIRT</p>
                <p class="item_price">Price: <span class="product-price">$300</span> </p>
                <p class="item_size">Size: Xl </p>
                <p class="item_quantity">Quantity: 2</p>
            </div>
            <div class="item_close"><img src="images/delete.svg"></div>
        </div>

        <div class="item_cart">
            <div class="item_picture"><img src="images/featured/1.jpg""></div>
            <div class="item_description">
                <p class="item_name">MANGO PEOPLE T-SHIRT</p>
                <p class="item_price">Price: <span class="product-price">$300</span> </p>
                <p class="item_size">Size: Xl </p>
                <p class="item_quantity">Quantity: 2</p>
            </div>
            <div class="item_close"><img src="images/delete.svg"></div>
        </div>

        <div class="buttons">
            <a href="#" class="clear">CLEAR SHOPPING CART</a>
            <a href="#" class="continue">CONTINUE SHOPPING</a>
        </div>
    </div>

    <div class="form">
        <div class="shipping">
            <p>SHIPPING ADRESS</p>
            <input class="adress" type="text" placeholder="Bangladesh" required>
            <input class="adress" type="text" placeholder="State" required>
            <input class="adress" type="text" placeholder="Postcode / Zip" required>
            <input class="get" type="submit" value="GET A QUOTE">
        </div>
        <div class="checkout">
            <p class="sub_total">SUB TOTAL $900</p>
            <p class="grand_total">GRAND TOTAL <span class="product-price">$900</span></p>
            <p class="element_decoration_two"></p>
            <a href="#" class="proceed">PROCEED TO CHECKOUT</a>
        </div>
    </div>
    </div>
</div>`
})

Vue.component('registration_component', {
    template: `<div class="newArrivals">
<div class="container">
    <h1>REGISTRATION</h1>
</div>
</div>`
})

Vue.component('form_component', {
    template: `    <div class="container">

    <div class="content">
        <div class="shipping">
            <p class="title">Your Name</p>
            <input class="name" type="text" placeholder="First Name" required>
            <input class="name" type="text" placeholder="Last Name" required>
            <p class="title">Login details</p>
            <input class="name" type="email" placeholder="Email" required>
            <input class="name" type="password" placeholder="Password" required>
            <p class="shipping_text">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
            <a href="#" class="proceed">JOIN NOW</a>
        </div>


        <div class="information">
            <p class="info">LOYALTY HAS ITS PERKS</p>
            <p class="info">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
            <div class="information_text">
                <img src="images/ok.svg">
                <p class="info">15% off welcome offer</p>
            </div>
            <div class="information_text">
            <img src="images/ok.svg">
                <p class="info">Free shipping, returns and exchanges on all orders</p>
            </div>
            <div class="information_text">
            <img src="images/ok.svg">
                <p class="info">$10 off a purchase on your birthday

                </p>
            </div>
            <div class="information_text">
            <img src="images/ok.svg">
                <p class="info">Early access to products</p>
            </div>
            <div class="information_text">
            <img src="images/ok.svg">
                <p class="info">Exclusive offers & rewards</p>
            </div>


        </div>
    </div>
</div>`
})



const vue = new Vue({
    el: '#app',
})