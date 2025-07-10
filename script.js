// Product data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro - 128GB - Plata",
        price: 4999000,
        oldPrice: 5499000,
        category: "Smartphones",
        brand: "Apple",
        rating: 4.5,
        ratingCount: 128,
        src="/images/iphone15.png",
        description: "Pantalla Super Retina XDR, cámara triple 48MP, chip A17 Pro, 128GB de almacenamiento.",
        badge: "Nuevo"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 5999000,
        oldPrice: 6499000,
        category: "Smartphones",
        brand: "Samsung",
        rating: 4.8,
        ratingCount: 215,
        src="../images/s23.png",
        description: "Pantalla Dynamic AMOLED 2X de 6.8\", cámara 200MP, S Pen incluido, 256GB de almacenamiento.",
        badge: "Oferta"
    },
    {
        id: 3,
        name: "MacBook Pro 14\" M2 Pro",
        price: 8999000,
        oldPrice: 9999000,
        category: "Laptops",
        brand: "Apple",
        rating: 4.9,
        ratingCount: 178,
        image: "../images/mac.png",
        description: "Chip M2 Pro, pantalla Liquid Retina XDR, 16GB RAM, 512GB SSD, 14.2 pulgadas.",
        badge: "Popular"
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        price: 1499000,
        oldPrice: 1799000,
        category: "Audio",
        brand: "Sony",
        rating: 4.7,
        ratingCount: 342,
        image: "../images/soni.png",
        description: "Audífonos inalámbricos con cancelación de ruido líder, 30h de batería, sonido Hi-Res.",
        badge: "20% OFF"
    },
    {
        id: 5,
        name: "Xiaomi Redmi Note 12 Pro",
        price: 1299000,
        oldPrice: 1499000,
        category: "Smartphones",
        brand: "Xiaomi",
        rating: 4.3,
        ratingCount: 87,
        image: "../images/xiao.png",
        description: "Pantalla AMOLED 120Hz, cámara 50MP, carga rápida 67W, 128GB de almacenamiento.",
        badge: "Oferta"
    },
    {
        id: 6,
        name: "Apple Watch Series 8",
        price: 1999000,
        oldPrice: 2199000,
        category: "Accesorios",
        brand: "Apple",
        rating: 4.6,
        ratingCount: 156,
        image: "/images/wat.png",
        description: "Monitor de salud avanzado, resistente al agua, GPS, pantalla Always-On, 41mm.",
        badge: "Nuevo"
    },
    {
        id: 7,
        name: "Dell XPS 15",
        price: 7999000,
        oldPrice: 8999000,
        category: "Laptops",
        brand: "Dell",
        rating: 4.7,
        ratingCount: 92,
        image: "/images/dell.png",
        description: "Pantalla InfinityEdge 4K, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 3050.",
        badge: "Reacondicionado"
    },
    {
        id: 8,
        name: "Bose QuietComfort 45",
        price: 1299000,
        oldPrice: 1499000,
        category: "Audio",
        brand: "Bose",
        rating: 4.5,
        ratingCount: 203,
        image: "/images/bos.png",
        description: "Cancelación de ruido líder, sonido equilibrado, 24h de batería, Bluetooth 5.1.",
        badge: "15% OFF"
    },
    {
        id: 9,
        name: "Samsung Galaxy Tab S8 Ultra",
        price: 4999000,
        oldPrice: 5499000,
        category: "Tablets",
        brand: "Samsung",
        rating: 4.6,
        ratingCount: 76,
        image: "/images/sam.png",
        description: "Pantalla Super AMOLED 14.6\", S Pen incluido, 256GB, 8GB RAM, Snapdragon 8 Gen 1.",
        badge: "Oferta"
    },
    {
        id: 10,
        name: "PlayStation 5",
        price: 2499000,
        oldPrice: 2799000,
        category: "Gaming",
        brand: "Sony",
        rating: 4.8,
        ratingCount: 421,
        image: "/images/ps5.png",
        description: "Consola PS5 con lector de discos, control DualSense, 825GB SSD, 4K 120Hz.",
        badge: "Popular"
    },
    {
        id: 11,
        name: "AirPods Pro (2da Gen)",
        price: 999000,
        oldPrice: 1199000,
        category: "Audio",
        brand: "Apple",
        rating: 4.7,
        ratingCount: 312,
        image: "/images/air.png",
        description: "Cancelación activa de ruido, sonido adaptativo, estuche con carga MagSafe, 6h de batería.",
        badge: "Nuevo"
    },
    {
        id: 12,
        name: "LG OLED C2 55\"",
        price: 4999000,
        oldPrice: 5999000,
        category: "TV",
        brand: "LG",
        rating: 4.9,
        ratingCount: 134,
        image: "/images/lg.png",
        description: "TV OLED 4K 120Hz, AI ThinQ, Dolby Vision IQ, Game Optimizer, WebOS 22.",
        badge: "20% OFF"
    }
];

// Cart functionality
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const catalogGrid = document.getElementById('catalog-grid');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const floatingCart = document.getElementById('floating-cart');
const cartPreview = document.getElementById('cart-preview');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');
const countdown = document.getElementById('countdown');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSummary = document.getElementById('cart-summary');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const discountElement = document.getElementById('discount');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const pageLinks = document.querySelectorAll('[data-page]');
const priceRange = document.getElementById('price-range');

// Helper functions
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(price).replace('COP', '$');
}

// Display products on home page
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';
    
    productsToDisplay.slice(0, 8).forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Display all products on catalog page
function displayCatalogProducts(productsToDisplay) {
    catalogGrid.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        catalogGrid.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    let badgeHTML = '';
    if (product.badge) {
        badgeHTML = `<div class="product-badge">${product.badge}</div>`;
    }
    
    productCard.innerHTML = `
        ${badgeHTML}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                ${formatPrice(product.price)}
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <div class="product-rating">
                <div class="product-rating-stars">${stars}</div>
                <div class="product-rating-count">(${product.ratingCount})</div>
            </div>
            <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-cart-plus"></i> Añadir al carrito
            </button>
        </div>
    `;
    
    // Add event listener to "Add to cart" button
    productCard.querySelector('.add-to-cart').addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
    });
    
    return productCard;
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showFeedback(`${product.name} añadido al carrito`);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showFeedback('Producto removido del carrito');
}

// Update quantity in cart
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(newQuantity));
        updateCart();
    }
}

// Update cart display
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update floating cart preview
    updateFloatingCart();
    
    // Update cart page if visible
    if (document.getElementById('cart-page').classList.contains('active')) {
        updateCartPage();
    }
}

// Update floating cart preview
function updateFloatingCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartTotalPrice.textContent = '$0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)} x ${item.quantity}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotalPrice.textContent = formatPrice(total);
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                updateCart();
            }
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
                updateCart();
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Update cart page
function updateCartPage() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
                <a href="#" class="btn btn-primary" data-page="catalog" style="margin-top: 1rem;">Explorar productos</a>
            </div>
        `;
        
        // Add event listener to button
        cartItemsContainer.querySelector('[data-page="catalog"]').addEventListener('click', function(e) {
            e.preventDefault();
            showPage('catalog');
        });
        
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    let subtotal = 0;
    let discount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        if (item.oldPrice) {
            discount += (item.oldPrice - item.price) * item.quantity;
        }
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item-large';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-category">${item.category} • ${item.brand}</p>
                <p class="cart-item-price-large">${formatPrice(item.price)}</p>
                <div class="cart-item-actions-large">
                    <div class="quantity-selector">
                        <button class="quantity-btn-large minus" data-id="${item.id}">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                        <button class="quantity-btn-large plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item-large" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
            <div class="cart-item-total">
                <p class="cart-item-total-price">${formatPrice(itemTotal)}</p>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Calculate shipping (free for orders over $500,000)
    const shipping = subtotal >= 500000 ? 0 : 15000;
    const total = subtotal + shipping - discount;
    
    // Update summary
    subtotalElement.textContent = formatPrice(subtotal);
    shippingElement.textContent = shipping === 0 ? 'Gratis' : formatPrice(shipping);
    discountElement.textContent = `-${formatPrice(discount)}`;
    totalElement.textContent = formatPrice(total);
    
    // Add event listeners to quantity controls
    document.querySelectorAll('.quantity-btn-large.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                updateCart();
            }
        });
    });
    
    document.querySelectorAll('.quantity-btn-large.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
                updateCart();
            }
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateQuantity(productId, this.value);
        });
    });
    
    document.querySelectorAll('.remove-item-large').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Show feedback message
function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.position = 'fixed';
    feedback.style.bottom = '100px';
    feedback.style.right = '20px';
    feedback.style.backgroundColor = 'var(--secondary-color)';
    feedback.style.color = 'white';
    feedback.style.padding = '12px 24px';
    feedback.style.borderRadius = '8px';
    feedback.style.zIndex = '1000';
    feedback.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    feedback.style.animation = 'fadeInUp 0.3s ease';
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.transition = 'all 0.5s ease';
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(10px)';
        setTimeout(() => feedback.remove(), 500);
    }, 3000);
}

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm.length < 2) {
        searchResults.classList.remove('active');
        return;
    }
    
    const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    ).slice(0, 5);
    
    if (results.length > 0) {
        searchResults.innerHTML = '';
        results.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-item';
            
            resultItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="search-item-info">
                    <div class="search-item-name">${product.name}</div>
                    <div class="search-item-price">${formatPrice(product.price)}</div>
                </div>
            `;
            
            resultItem.addEventListener('click', () => {
                searchInput.value = product.name;
                searchResults.classList.remove('active');
                // Filter products to show only this one
                displayProducts([product]);
            });
            
            searchResults.appendChild(resultItem);
        });
        searchResults.classList.add('active');
    } else {
        searchResults.classList.remove('active');
    }
});

// Price range filter
priceRange.addEventListener('input', function() {
    const maxPrice = parseInt(this.value);
    document.querySelector('.price-values span:last-child').textContent = formatPrice(maxPrice);
    
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    
    const activePage = document.querySelector('.page.active').id;
    if (activePage === 'home-page') {
        displayProducts(filteredProducts);
    } else if (activePage === 'catalog-page') {
        displayCatalogProducts(filteredProducts);
    }
});

// Floating cart toggle
floatingCart.addEventListener('click', function(e) {
    e.stopPropagation();
    cartPreview.classList.toggle('active');
});

// Close cart when clicking outside
document.addEventListener('click', function() {
    cartPreview.classList.remove('active');
});

// Prevent cart from closing when clicking inside it
cartPreview.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Page navigation
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(`${pageId}-page`).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // If showing cart page, update it
    if (pageId === 'cart') {
        updateCartPage();
    }
    
    // If showing catalog page, display all products
    if (pageId === 'catalog') {
        displayCatalogProducts(products);
    }
}

// Add event listeners to nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
        showPage(pageId);
    });
});

// Add event listeners to other page links
pageLinks.forEach(link => {
    if (!link.classList.contains('nav-link')) {
        link.addEventListener('click', function(e) {
            if (this.hasAttribute('data-page')) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                showPage(pageId);
            }
        });
    }
});

// Countdown timer for flash sale
function updateCountdown() {
    let hours = 2;
    let minutes = 0;
    let seconds = 0;
    
    const interval = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            clearInterval(interval);
            countdown.innerHTML = '<i class="fas fa-bolt"></i> Oferta terminada';
            return;
        }
        
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        countdown.innerHTML = `<i class="fas fa-bolt"></i> ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this demo, we'll just show a success message
    showFeedback('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
    
    // Reset form
    this.reset();
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input').value;
    
    // Here you would typically send the email to a server
    // For this demo, we'll just show a success message
    showFeedback('¡Gracias por suscribirte a nuestro newsletter!');
    
    // Reset form
    this.reset();
});

// Checkout button
checkoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showFeedback('Tu carrito está vacío');
        return;
    }
    
    // Here you would typically redirect to a checkout page
    // For this demo, we'll show a success message
    showFeedback('¡Compra realizada con éxito! Gracias por tu pedido.');
    
    // Clear cart
    cart = [];
    updateCart();
});

// Initialize the page
function init() {
    displayProducts(products);
    updateCountdown();
    updateCart();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
