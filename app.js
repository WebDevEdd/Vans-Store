const productsAPI = [
    //SHOES LIST
    {   name: 'Classic Blue',
        key: 1,
        type: 'shoes',
        color: 'Blue',
        img: './VansStoreImages/Shoes/ClassicBlue.png',
        price: 49.99,
    },
    {   name: 'Classic Red',
        key: 2,
        type: 'shoes',
        color: 'Red',
        img: './VansStoreImages/Shoes/ClassicRed.png',
        price: 49.99,
    },
    {   name: 'Classic All Black',
        key: 3,
        type: 'shoes',
        color: 'Black',
        img: './VansStoreImages/Shoes/ClassicAllBlack.png',
        price: 49.99,
    },
    {   name: 'Classic Burgundy',
        key: 4,
        type: 'shoes',
        color: 'Burgundy',
        img: './VansStoreImages/Shoes/ClassicBurgundy.png',
        price: 49.99,
    },
    {   name: 'Old Skool Black Flames',
        key: 5,
        type: 'shoes',
        color: 'Black',
        img: './VansStoreImages/Shoes/OldSkoolBlackFlames.png',
        price: 59.99,
    },
    {   name: 'Old Skool Floral',
        key: 6,
        type: 'shoes',
        color: 'Blue',
        img: './VansStoreImages/Shoes/OldSkoolFloral.png',
        price: 59.99,
    },
    {   name: 'Old Skool Grey',
        key: 7,
        type: 'shoes',
        color: 'Grey',
        img: './VansStoreImages/Shoes/OldSkoolGrey.png',
        price: 59.99,
    },
    {   name: 'Old Skool Turquoise',
        key: 8,
        type: 'shoes',
        color: 'Turquoise',
        img: './VansStoreImages/Shoes/OldSkoolTurquoise.png',
        price: 59.99,
    },
    {   name: 'Old Skool Yacht Club',
        key: 9,
        type: 'shoes',
        color: 'Green',
        img: './VansStoreImages/Shoes/OldSkoolYachtClub.png',
        price: 59.99,
    },
    {   name: 'Old Skool Yellow',
        key: 10,
        type: 'shoes',
        color: 'Yellow',
        img: './VansStoreImages/Shoes/OldSkoolYellow.png',
        price: 59.99,
    },
    {   name: 'Slip-On Angel Print',
        key: 11,
        type: 'shoes',
        color: 'Yellow',
        img: './VansStoreImages/Shoes/SlipOnAngelPrint.png',
        price: 39.99,
    },
    {   name: 'Slip-On Blue',
        key: 12,
        type: 'shoes',
        color: 'Blue',
        img: './VansStoreImages/Shoes/SlipOnBlue.png',
        price: 39.99,
    },
    //Shirts List
    {   name: 'T-Shirt Black',
        key: 13,
        type: 'shirts',
        color: 'Black',
        img: './VansStoreImages/Shirts/ShirtBlack.png',
        price: 19.99,
    },
    {   name: 'T-Shirt Blue',
        key: 14,
        type: 'shirts',
        color: 'Blue',
        img: './VansStoreImages/Shirts/ShirtBlue.png',
        price: 29.99,
    },
    {   name: 'T-Shirt BlueGreen',
        key: 15,
        type: 'shirts',
        color: 'Blue',
        img: './VansStoreImages/Shirts/ShirtBlueGreen.png',
        price: 19.99,
    },
    {   name: 'T-Shirt White',
        key: 16,
        type: 'shirts',
        color: 'White',
        img: './VansStoreImages/Shirts/ShirtWhite.png',
        price: 19.99,
    },
    {   name: 'T-Shirt Yellow',
        key: 17,
        type: 'shirts',
        color: 'Yellow',
        img: './VansStoreImages/Shirts/ShirtYellow.png',
        price: 29.99,
    },
    //Hoodies List
    {   name: 'Hoodie Army',
        key: 18,
        type: 'shoes',
        color: 'Green',
        img: './VansStoreImages/Hoodies/HoodieArmy.png',
        price: 79.99,
    },
    {   name: 'Hoodie Black',
        key: 19,
        type: 'shoes',
        color: 'Black',
        img: './VansStoreImages/Hoodies/HoodieBlack.png',
        price: 59.99,
    },
    {   name: 'Hoodie Burgundy',
        key: 20,
        type: 'shoes',
        color: 'Burgundy',
        img: './VansStoreImages/Hoodies/HoodieBurgundy.png',
        price: 59.99,
    },
    {   name: 'Hoodie Grey',
        key: 21,
        type: 'shoes',
        color: 'Grey',
        img: './VansStoreImages/Hoodies/HoodieGrey.png',
        price: 59.99,
    },
    {   name: 'Hoodie Orange',
        key: 22,
        type: 'shoes',
        color: 'Orange',
        img: './VansStoreImages/Hoodies/HoodieOrange.png',
        price: 59.99,
    },
];

// function where products array is pulled and cards are made
function createCrards(){
    // declared the element where card content will be pushed
    const container = document.querySelector('.products');

    // looped through products and added to elements
    productsAPI.forEach(product => {
        const cardContent = `
            <div class='product-card-container' id='${product.key}'>
                <img class='product-card-image' src=${product.img} alt=${product.name}>
                <h2 class='product-card-title'>${product.name}</h2>
                <p class='product-card-price'>$${product.price}</p>
                <button class='add-to-cart add-to-cart-btn'>add to cart</button>
                
            </div>
        `;
        // pushed new content to container
        container.innerHTML += cardContent;
    });
};
createCrards();

//add to cart functinality
function addToCart(){
    // select all cart buttons
    const atcBtn = document.querySelectorAll('.add-to-cart-btn');

    // cart container to push new element
    const cart = document.querySelector('.cart-container');


    atcBtn.forEach(item => {
        item.addEventListener('click', function(){
            // get id to find product in array
            const product = item.parentElement.id;

            // with id you can locate the item
            const newProduct = productsAPI[product - 1];
            
            var cartItemQty = 1;

            // button will be replaced by this
            const addedToCart = document.createElement('p');
            addedToCart.classList.add('added-to-cart');
            addedToCart.innerHTML = 'added to cart';

            // content for new row
            const cartItemContent = `
                <div id=${newProduct.key} class="cart-item-row">
                    <div class='cart-item'>
                        <img class='cart-item-img' src=${newProduct.img} alt="">
                    </div>
                    <p class="cart-item cart-item-name">${newProduct.name}</p>
                    <p class="cart-item cart-item-price">$${newProduct.price}</p>
                    
                    <p class="cart-item cart-item-qty">
                        <button class="qty-btn qty-btn-minus">-</button>
                            ${cartItemQty}
                        <button class="qty-btn qty-btn-plus">+</button>
                    </p>
                </div>
            `;
            item.classList.add('add-to-cart-remove');
            item.parentElement.appendChild(addedToCart);

            // push new cart element to cart
            cart.innerHTML += cartItemContent;
            
        })
    })
    
};
addToCart();

