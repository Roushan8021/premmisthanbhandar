// Product Data
const products = [
    // Pizzas
    {
        id: 1,
        name: "Veg Pizza",
        description: "Delicious veg pizza with fresh vegetables and cheese",
        price: 220,
        category: "pizza",
        images: [
            "https://i.postimg.cc/RZTnS2Pb/istockphoto-184098729-612x612.webp",
            "https://i.postimg.cc/FKsk7G8F/photo-1617470702892-e01504297e84.jpg"
        ]
    },
    {
        id: 2,
        name: "Paneer Pizza",
        description: "Tasty pizza with paneer and special spices",
        price: 290,
        category: "pizza",
        images: [
            "https://i.postimg.cc/TP7LmgvV/istockphoto-1211260137-612x612.jpg",
            "https://i.postimg.cc/bJZGRrqK/istockphoto-1222240358-612x612.jpg"
        ]
    },
    // Sweets
    {
        id: 3,
        name: "Gulab Jamun (1 Kg)",
        description: "Soft and juicy gulab jamun, perfect for any occasion",
        price: 280,
        category: "sweets",
        images: [
            "https://i.postimg.cc/KvVV8sWF/istockphoto-617379496-612x612.jpg",
            "https://i.postimg.cc/WbtCjPXX/istockphoto-668147754-612x612.jpg"
        ]
    },
    {
        id: 4,
        name: "Rasgulla (1 Kg)",
        description: "Fresh and spongy rasgulla in light sugar syrup",
        price: 350,
        category: "sweets",
        images: [
            "https://i.postimg.cc/Bvh2JRhB/gettyimages-1467679192-612x612.jpg",
            "https://i.postimg.cc/5t9wdfmt/gettyimages-874235424-612x612.jpg"
        ]
    },
    {
        id: 5,
        name: "Rasmalai (1 Kg)",
        description: "Creamy and delicious rasmalai with dry fruits",
        price: 350,
        category: "sweets",
        images: [
            "https://i.postimg.cc/tCMTCpyT/istockphoto-507622943-612x612.jpg",
            "https://i.postimg.cc/Yq90Hj5Z/istockphoto-514481051-612x612.jpg"
        ]
    },
    {
        id: 6,
        name: "Kaju Katli (1 Kg)",
        description: "Premium quality kaju katli with silver coating",
        price: 970,
        category: "sweets",
        images: [
            "https://i.postimg.cc/gcLtBKJT/istockphoto-1502854325-612x612.jpg",
            "https://i.postimg.cc/C1XPxRv7/istockphoto-1665591012-612x612.jpg"
        ]
    },
    {
        id: 7,
        name: "Barfi (1 Kg)",
        description: "Traditional barfi with rich flavor",
        price: 430,
        category: "sweets",
        images: [
            "https://i.postimg.cc/wBSLtDp1/kaju-katli-1000x1000.jpg",
            "https://i.postimg.cc/q7t2Mj9f/kaju-katli-barfi-1000x1000.jpg"
        ]
    },
    {
        id: 8,
        name: "Besan Ladoo (1 Kg)",
        description: "Homemade besan ladoo with pure ghee",
        price: 290,
        category: "sweets",
        images: [
            "https://i.postimg.cc/xCvJc75Z/istockphoto-1370116569-612x612.jpg",
            "https://i.postimg.cc/hvKJxr3t/istockphoto-982302046-612x612.jpg"
        ]
    },
    {
        id: 9,
        name: "Peda (1 Kg)",
        description: "Soft and milky peda with kesar flavor",
        price: 430,
        category: "sweets",
        images: [
            "https://i.postimg.cc/fyHbdh98/2022022600-1661229646-6503078-1652762.jpg",
            "https://i.postimg.cc/wMxv3B7t/40739.jpg"
        ]
    },
    {
        id: 10,
        name: "Besan Papdi (1 Kg)",
        description: "Crispy besan papdi with perfect sweetness",
        price: 310,
        category: "sweets",
        images: [
            "https://i.postimg.cc/PJHDyhNh/360-F-468933112-Ih-Bqk3-ZPfcsnw8-Pgzgm-Kl-Zf-MVQTZy-Xx-Q.webp",
            "https://i.postimg.cc/T1cDHSWb/360-F-823255478-gy-LKC1y-F1tj-UNFx2-Fd-Xw7os-Zb-Uw9-H2t-I.webp"
        ]
    },
    {
        id: 11,
        name: "Gond Ke Laddu (1 Kg)",
        description: "Nutritious gond laddu with dry fruits",
        price: 520,
        category: "sweets",
        images: [
            "https://i.postimg.cc/Z5XCjZDg/istockphoto-1344574567-612x612.jpg",
            "https://i.postimg.cc/PqZNRcgq/istockphoto-1472611097-612x612.jpg"
        ]
    },
    {
        id: 12,
        name: "Malai Cream Chop (1 Kg)",
        description: "Creamy and rich malai cream chop",
        price: 430,
        category: "sweets",
        images: [
            "https://i.postimg.cc/vTX4vVpL/b4c1fe018c0fac44baccc8ca2c47cdb5.jpg",
            "https://i.postimg.cc/3rZ0hsd4/images-1.jpg"
        ]
    },
    // Cakes
    {
        id: 13,
        name: "Black Forest Cake (1 Pound)",
        description: "Classic black forest cake with cherries and cream",
        price: 350,
        category: "cake",
        images: [
            "https://i.postimg.cc/j5MTg4S5/Choco-oreo-cake.jpg",
            "https://i.postimg.cc/zBz5Fc56/oreo-cake-22103.jpg"
        ]
    },
    {
        id: 14,
        name: "Vanilla Cake (1 Pound)",
        description: "Soft and fluffy vanilla cake with buttercream",
        price: 350,
        category: "cake",
        images: [
            "https://i.postimg.cc/PfFh1y7V/31158.webp",
            "https://i.postimg.cc/SR5hqQ8b/new-design-103.jpg"
        ]
    },
    {
        id: 15,
        name: "Doll Cake (1 Pound)",
        description: "Beautiful doll cake perfect for birthdays",
        price: 350,
        category: "cake",
        images: [
            "https://i.postimg.cc/26QGr0Zk/barbie-n204.jpg",
            "https://i.postimg.cc/C5YRpNGV/doll-1000x1000.jpg"
        ]
    },
    {
        id: 16,
        name: "Chocolate Cake (1 Pound)",
        description: "Rich chocolate cake with chocolate ganache",
        price: 350,
        category: "cake",
        images: [
            "https://i.postimg.cc/Qdc3G3dv/chocolate-cream-cake-half-kg-1.webp",
            "https://i.postimg.cc/02TsBQPp/velvety-chocolate-truffle-cakes-half-kg-1.jpg"
        ]
    },
    {
        id: 17,
        name: "Butterscotch Cake (1 Pound)",
        description: "Delicious butterscotch cake with butterscotch chips",
        price: 350,
        category: "cake",
        images: [
            "https://i.postimg.cc/fLRn9Sfh/butterscotch-1001.jpg",
            "https://i.postimg.cc/fLq4jW8S/golden-butterscotch-fantasy-1.webp"
        ]
    },
    {
        id: 18,
        name: "Black Forest Oreo Kit Kat Cake (3 Pound)",
        description: "Premium black forest cake with Oreo and Kit Kat",
        price: 950,
        category: "cake",
        images: [
            "https://i.postimg.cc/yxGswvd1/1660717759-1657696456-1kg-500gms-2-tier-oreo-five-star-chocolate-cake.jpg",
            "https://i.postimg.cc/yxGswvd1/1660717759-1657696456-1kg-500gms-2-tier-oreo-five-star-chocolate-cake.jpg"
        ]
    },
    {
        id: 19,
        name: "Vanilla Gold Cake (3 Pound)",
        description: "Elegant vanilla cake with golden decorations",
        price: 920,
        category: "cake",
        images: [
            "https://i.postimg.cc/D09RrD0X/1538215525-CAKE54323.jpg",
            "https://i.postimg.cc/D09RrD0X/1538215525-CAKE54323.jpg"
        ]
    },
    {
        id: 20,
        name: "Chocolate Oreo Kit Kat Cake (3 Pound)",
        description: "Chocolate lover's dream with Oreo and Kit Kat",
        price: 1000,
        category: "cake",
        images: [
            "https://i.postimg.cc/YCRM7rjD/1660718453-1657695087-3kg-2-tier-oreo-drip-dairy-milk-chocolate-cake.jpg",
            "https://i.postimg.cc/YCRM7rjD/1660718453-1657695087-3kg-2-tier-oreo-drip-dairy-milk-chocolate-cake.jpg"
        ]
    },
    // Snacks
    {
        id: 21,
        name: "Paneer Chilli (1 Plate)",
        description: "Spicy and tangy paneer chilli with capsicum",
        price: 230,
        category: "snacks",
        images: [
            "https://i.postimg.cc/jqhBF89t/1000-F-419426143-d-CNQf-DTxj28q-PZvb-LGsfj-Sxy-TXksz2z-S.jpg",
            "https://i.postimg.cc/DyyRkrks/istockphoto-697316634-612x612.jpg"
        ]
    },
    {
        id: 22,
        name: "Manchurian (1 Plate)",
        description: "Crispy vegetable balls in tangy sauce",
        price: 130,
        category: "snacks",
        images: [
            "https://i.postimg.cc/6QdMGqxt/1000-F-391310727-UDWXh-Muo1h-Xxny21-GIz-P71-Q7a-Ectz-HMJ.jpg",
            "https://i.postimg.cc/fb4HLXF8/1000-F-802442564-u-HRi-D5-Lc3-GUHo-O4-DJjjqtj-OLj5-Qwg5f-C.jpg"
        ]
    },
    {
        id: 23,
        name: "Paneer Dosa (1 Plate)",
        description: "Crispy dosa stuffed with paneer filling",
        price: 150,
        category: "snacks",
        images: [
            "https://i.postimg.cc/x87vZVV6/istockphoto-1156896041-612x612.jpg",
            "https://i.postimg.cc/Gt9PzhVB/istockphoto-1271649503-612x612.jpg"
        ]
    },
    {
        id: 24,
        name: "Masala Dosa (1 Plate)",
        description: "Traditional masala dosa with potato filling",
        price: 120,
        category: "snacks",
        images: [
            "https://i.postimg.cc/wMSNV5DP/360-F-37818424-i-EAe-I3ng-DZ3p-Nw-Q8i-Zvm2-AIDz-VDRQmhz.webp",
            "https://i.postimg.cc/ZYg64mXc/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus-466689-22963.jpg"
        ]
    },
    {
        id: 25,
        name: "Roti (10 Pieces)",
        description: "Freshly made soft rotis",
        price: 160,
        category: "snacks",
        images: [
            "https://i.postimg.cc/4xvc69yL/360-F-246741178-c-Fyflg-N2-Poxy-PVZg-Hh-Vpl8-RAA7pa7-A2a.webp",
            "https://i.postimg.cc/hGSdpt7S/360-F-408593113-OSe-Kd-U70-Gsnp2-W0-Xy-D4-Pg-G1l2-JE42o-KG.webp"
        ]
    },
    {
        id: 26,
        name: "Paneer Burger",
        description: "Juicy paneer patty with veggies and sauces",
        price: 110,
        category: "snacks",
        images: [
            "https://i.postimg.cc/LhKqf9pF/sandwich-hamburger-with-juicy-burgers-tomato-red-cabbage-2829-4119.webp",
            "https://i.postimg.cc/fy0tJ31v/side-view-chicken-burger-with-sliced-tomato-lettuce-board-141793-4817.webp"
        ]
    },
    // Drinks
    {
        id: 27,
        name: "Coca-Cola (2 Liter)",
        description: "Refreshing Coca-Cola soft drink",
        price: 120,
        category: "drinks",
        images: [
            "https://i.postimg.cc/PrYy7NNZ/istockphoto-458709281-612x612.jpg",
            "https://i.postimg.cc/wjz2YHsr/istockphoto-488032515-612x612.jpg"
        ]
    },
    {
        id: 28,
        name: "Maaza (2 Liter)",
        description: "Mango flavored refreshing drink",
        price: 120,
        category: "drinks",
        images: [
            "https://i.postimg.cc/N06wfQNr/Dn-Mh-FXs-W4-AAi2-AG.png",
            "https://i.postimg.cc/PqsjjCMj/images-2.jpg"
        ]
    },
    {
        id: 29,
        name: "Sprite (2 Liter)",
        description: "Lemon-lime flavored carbonated drink",
        price: 120,
        category: "drinks",
        images: [
            "https://i.postimg.cc/Kv6VKd37/3325889a-e5ea-4e24-acbb-9a5978b3c2be-79f43da4727299d0ca5a5b5a0267d97e.jpg",
            "https://i.postimg.cc/m2zJgbk2/sprite-bottle-jlg.png"
        ]
    }
];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const cartSidebar = document.querySelector('.cart-sidebar');
const overlay = document.querySelector('.overlay');
const checkoutBtn = document.getElementById('checkout-btn');
const loginBtn = document.getElementById('login-btn');
const authModal = document.querySelector('.auth-modal');
const closeAuthBtn = document.querySelector('.close-auth');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authSwitchBtn = document.getElementById('auth-switch-btn');
const authSwitchText = document.getElementById('auth-switch-text');
const authModalTitle = document.getElementById('auth-modal-title');
const checkoutModal = document.querySelector('.checkout-modal');
const orderConfirmation = document.querySelector('.order-confirmation');
const continueShoppingBtn = document.getElementById('continue-shopping');
const getLocationBtn = document.getElementById('get-location-btn');
const locationError = document.querySelector('.location-error');
const confirmOrderBtn = document.getElementById('confirm-order-btn');
const upiOption = document.getElementById('upi-option');
const codOption = document.getElementById('cod-option');
const upiIdDisplay = document.getElementById('upi-id-display');
const categoryItems = document.querySelectorAll('.category-item');

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let userLocation = null;

// Initialize the app
function init() {
    renderProducts();
    updateCart();
    checkAuthStatus();
    setupEventListeners();
}

// Render products based on category
function renderProducts(category = 'all') {
    productGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-images">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="image-nav">
                    <span class="active"></span>
                    <span></span>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="order-now" data-id="${product.id}">Order Now</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    // Add event listeners for image navigation
    document.querySelectorAll('.product-images').forEach(imagesContainer => {
        const img = imagesContainer.querySelector('img');
        const spans = imagesContainer.querySelectorAll('.image-nav span');
        const product = products.find(p => p.images[0] === img.src);
        
        spans[0].addEventListener('click', () => {
            img.src = product.images[0];
            spans[0].classList.add('active');
            spans[1].classList.remove('active');
        });
        
        spans[1].addEventListener('click', () => {
            img.src = product.images[1];
            spans[1].classList.add('active');
            spans[0].classList.remove('active');
        });
    });
    
    // Add event listeners for add to cart and order now buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.order-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
            openCart();
        });
    });
}

// Cart functions
function addToCart(productId) {
    if (!isLoggedIn) {
        openAuthModal('login');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart`);
}

function updateCart() {
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartSubtotal.textContent = '₹0';
        cartTotal.textContent = '₹40';
        checkoutBtn.disabled = true;
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price} x ${item.quantity} = ₹${itemTotal}</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Update totals
    const deliveryFee = 40;
    const total = subtotal + deliveryFee;
    
    cartSubtotal.textContent = `₹${subtotal}`;
    cartTotal.textContent = `₹${total}`;
    
    // Add event listeners for quantity controls
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    checkoutBtn.disabled = false;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Cart sidebar functions
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Auth functions
function checkAuthStatus() {
    if (isLoggedIn) {
        loginBtn.innerHTML = '<i class="fas fa-user-check"></i>';
    } else {
        loginBtn.innerHTML = '<i class="fas fa-user"></i>';
    }
}

function openAuthModal(type = 'login') {
    if (type === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        authModalTitle.textContent = 'Login';
        authSwitchText.textContent = "Don't have an account? ";
        authSwitchBtn.textContent = 'Register';
    } else {
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        authModalTitle.textContent = 'Register';
        authSwitchText.textContent = "Already have an account? ";
        authSwitchBtn.textContent = 'Login';
    }
    
    authModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // In a real app, you would validate with your backend
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    closeAuthModal();
    checkAuthStatus();
    showNotification('Login successful');
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Simple validation
    if (!name || !email || !phone || !password || !confirmPassword) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    // In a real app, you would register with your backend
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    closeAuthModal();
    checkAuthStatus();
    showNotification('Registration successful');
}

// Checkout functions
function openCheckoutModal() {
    if (!userLocation) {
        getLocation();
    }
    
    checkoutModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function getLocation() {
    if (navigator.geolocation) {
        getLocationBtn.disabled = true;
        getLocationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Getting Location...';
        locationError.style.display = 'none';
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // In a real app, you would display the map with the user's location
                getLocationBtn.innerHTML = '<i class="fas fa-check-circle"></i> Location Found';
                showNotification('Location found successfully');
            },
            (error) => {
                console.error('Error getting location:', error);
                locationError.style.display = 'block';
                getLocationBtn.disabled = false;
                getLocationBtn.innerHTML = '<i class="fas fa-location-arrow"></i> Use Current Location';
            }
        );
    } else {
        locationError.textContent = 'Geolocation is not supported by this browser.';
        locationError.style.display = 'block';
    }
}

function confirmOrder() {
    if (!userLocation) {
        showNotification('Please enable location services to continue', 'error');
        return;
    }
    
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Prepare order details
    const orderDetails = {
        items: cart,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 40),
        location: userLocation,
        paymentMethod,
        timestamp: new Date().toISOString()
    };
    
    // In a real app, you would send this to your backend
    console.log('Order confirmed:', orderDetails);
    
    // Send WhatsApp notification (this is a simulated version)
    const whatsappMessage = `New Order Received!\n\nItems:\n${cart.map(item => `- ${item.name} x${item.quantity} (₹${item.price * item.quantity})`).join('\n')}\n\nTotal: ₹${orderDetails.total}\n\nPayment Method: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI Payment'}\n\nLocation: https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}`;
    
    // This would open WhatsApp with a pre-filled message in a real app
    // window.open(`https://wa.me/917366034767?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // For demo purposes, we'll just show a confirmation
    closeCheckoutModal();
    orderConfirmation.classList.add('active');
    overlay.classList.add('active');
    
    // Clear cart
    cart = [];
    updateCart();
}

// Notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event listeners
function setupEventListeners() {
    // Cart sidebar
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
            openAuthModal('login');
            return;
        }
        openCart();
    });
    
    closeCartBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', () => {
        closeCart();
        closeAuthModal();
        closeCheckoutModal();
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length === 0) return;
        openCheckoutModal();
    });
    
    // Auth modal
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal(isLoggedIn ? 'profile' : 'login');
    });
    
    closeAuthBtn.addEventListener('click', closeAuthModal);
    
    loginTab.addEventListener('click', () => {
        openAuthModal('login');
    });
    
    registerTab.addEventListener('click', () => {
        openAuthModal('register');
    });
    
    authSwitchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (authSwitchBtn.textContent === 'Register') {
            openAuthModal('register');
        } else {
            openAuthModal('login');
        }
    });
    
    document.getElementById('login-submit').addEventListener('click', login);
    document.getElementById('register-submit').addEventListener('click', register);
    
    // Checkout modal
    getLocationBtn.addEventListener('click', getLocation);
    confirmOrderBtn.addEventListener('click', confirmOrder);
    
    // Payment options
    upiOption.addEventListener('click', () => {
        document.getElementById('upi').checked = true;
        upiOption.classList.add('active');
        codOption.classList.remove('active');
        upiIdDisplay.style.display = 'block';
    });
    
    codOption.addEventListener('click', () => {
        document.getElementById('cod').checked = true;
        codOption.classList.add('active');
        upiOption.classList.remove('active');
        upiIdDisplay.style.display = 'none';
    });
    
    // Order confirmation
    continueShoppingBtn.addEventListener('click', () => {
        orderConfirmation.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Category filtering
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            renderProducts(item.getAttribute('data-category'));
        });
    });
}

// Initialize the app
init();