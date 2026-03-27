// ========== MENU DATABASE ==========
const menuDB = {
    burger_king: [
        { name: "chicken_burger", price: 12.50, img: "Images/chicken_burger.jpg" },
        { name: "Vegan_burger", price: 14.00, img: "Images/Vegan_burger.jpg" },
        { name: "Crispy_kings", price: 11.00, img: "Images/Crispy_kings.jpg" },
        { name: "whoppers", price: 11.00, img: "Images/whoppers.jpg"} 
    ],
    burger_KFC: [
        { name: "cheese_burger", price: 10.50, img: "Images/cheese_burger.jpg" },
        { name: "orriginal_burger", price: 13.00, img: "Images/orriginal_burger.jpg" },
        { name: "zinger_burger", price: 13.00, img: "Images/zinger_burger.jpg" },
        { name: "chicken_burger", price: 13.00, img: "Images/burger_with_chicken.jpg" }
    ],
    texas_chicken: [
        { name: "cheese_burger", price: 10.50, img: "https://i.pinimg.com/1200x/c7/27/d4/c727d45eb8ef1ed323d0e9e3c14111c5.jpg" },
        { name: "orriginal_burger", price: 13.00, img: "https://i.pinimg.com/736x/10/18/49/1018494b5c2a9b8cacd75db9dcb1dc40.jpg" },
        { name: "zinger_burger", price: 13.00, img: "https://i.pinimg.com/736x/8a/7b/78/8a7b78f884dbedb703c7002bd0a9388d.jpg" },
        { name: "Chicken_Teders", price: 13.00, img: "https://i.pinimg.com/1200x/66/9e/40/669e40de91603f580cc1b5b401e92e50.jpg" }
    ],
    burger_bio: [
        { name: "cheese_burger", price: 10.50, img: "https://i.pinimg.com/1200x/96/91/82/969182dcd1840e64ef7d1419a52253ad.jpg" },
        { name: "set_burger", price: 13.00, img: "https://i.pinimg.com/736x/00/ed/39/00ed390bb97eef0ec52bda0665badd65.jpg" },
        { name: "sandwich", price: 13.00, img: "https://i.pinimg.com/736x/7f/a5/d9/7fa5d999491955979a15e9c0ad649807.jpg" },
        { name: "chicken_burger", price: 13.00, img: "https://i.pinimg.com/736x/e5/df/6a/e5df6a695af69cec44d11faf4f7b7a33.jpg" }
    ],
    pizza_hut: [
        { name: "Buffalo pizza", price: 9.99, img: "Images/buffalo_pizza.jpg" },
        { name: "Pepperoni_Pizza", price: 11.99, img: "Images/Pepperoni_Pizza.jpg" },
        { name: "Cheese and chicken_pizza", price: 11.99, img: "Images/cheese&chicken_pizza.jpg" },
        { name: "Vegetarain Pizza", price: 11.99, img: "Images/vegetarain_pizza.jpg" }
    ],
    pasta_pizza: [
        { name: "BBQ Chicken Pizza", price: 8.99, img: "Images/BBQ_Chicken_Pizza.jpg" },
        { name: "Cheese Pizza", price: 10.99, img: "Images/Cheese_pizza.jpg" },
        { name: "Cheesy Pizza Crust", price: 11.99, img: "Images/Cheesy_pizza_crust.jpg" },
        { name: "Supreme Pizza", price: 11.99, img: "Images/supreme_pizza.jpg" }
    ],
    pizza_hayyat: [
        { name: "Buffalo pizza", price: 9.99, img: "Images/buffalo_pizza.jpg" },
        { name: "Pepperoni_Pizza", price: 11.99, img: "Images/Pepperoni_Pizza.jpg" },
        { name: "Cheese and chicken_pizza", price: 11.99, img: "Images/cheese&chicken_pizza.jpg" },
        { name: "Vegetarain Pizza", price: 11.99, img: "Images/vegetarain_pizza.jpg" }
    ],
    house_pizza: [
        { name: "BBQ Chicken Pizza", price: 8.99, img: "Images/BBQ_Chicken _Pizza.jpg" },
        { name: "Cheese Pizza", price: 10.99, img: "Images/Cheese_pizza.jpg" },
        { name: "Cheesy Pizza Crust", price: 11.99, img: "Images/Cheesy_pizza_crust.jpg" },
        { name: "Supreme Pizza", price: 11.99, img: "Images/supreme_pizza.jpg" }
    ],
    Rainbow_ice_cream: [
        { name: "rainbow brownie", price: 12.5, img: "Images/rainbow_brownie.jpg" },
        { name: "bars ice cream", price: 10.5, img: "Images/bars_icecream.jpg" },
        { name: "Ninja ice cream", price: 10.5, img: "Images/ninja_ice_cream.jpg" },
        { name: "Bubblegum ice cream", price: 10.5, img: "Images/bubblegum_ice_cream.jpg" }
    ],
    Ice_cream: [
        { name: "Churn Cotton", price: 12.5, img: "Images/churn_cotton_ice_cream.jpg" },
        { name: "Circus Animal", price: 12.5, img: "Images/circus_animal_ice_cream.jpg" },
        { name: "Cherry Coke", price: 12.5, img: "Images/cherry_coke_ice_cream.jpg" },
        { name: "Blueberry Swirl", price: 12.5, img: "Images/blueberry_swirl.jpg" }
    ],
    yummy_ice_cream: [
        { name: "rainbow brownie", price: 12.5, img: "Images/rainbow_brownie.jpg" },
        { name: "bars ice cream", price: 10.5, img: "Images/bars_icecream.jpg" },
        { name: "Ninja ice cream", price: 10.5, img: "Images/ninja_ice_cream.jpg" },
        { name: "Bubblegum ice cream", price: 10.5, img: "Images/bubblegum_ice_cream.jpg" }
    ],
    fradel_ice_cream: [
        { name: "Churn Cotton", price: 12.5, img: "Images/churn_cotton_ice_cream.jpg" },
        { name: "Circus Animal", price: 12.5, img: "Images/circus_animal_ice_cream.jpg" },
        { name: "Cherry Coke", price: 12.5, img: "Images/cherry_coke_ice_cream.jpg" },
        { name: "Blueberry Swirl", price: 12.5, img: "Images/blueberry_swirl.jpg" }
    ],
    starbuck_coffee: [
        { name: "Mexican Horchata", price: 3.5, img: "Images/mexican_horchata.jpg" },
        { name: "Blackberry Smoothie", price: 3.5, img: "Images/blackberry_smoothie.jpg" },
        { name: "Iced Coffee", price: 3.5, img: "Images/iced_coffee.jpg" },
        { name: "Beverage", price: 3.5, img: "Images/beverage.jpg" }
    ],
    tube_coffee: [
        { name: "Latte", price: 3.5, img: "Images/latte.jpg" },
        { name: "Americano", price: 3.5, img: "Images/Americano.jpg" },
        { name: "Matcha Milk", price: 3.5, img: "Images/Matcha_milk.jpg" },
        { name: "Chocolate Milk", price: 3.5, img: "Images/chocolate_milk.jpg" }
    ],
    brown_coffee: [
        { name: "Mexican Horchata", price: 3.5, img: "Images/mexican_horchata.jpg" },
        { name: "Blackberry Smoothie", price: 3.5, img: "Images/blackberry_smoothie.jpg" },
        { name: "Iced Coffee", price: 3.5, img: "Images/iced_coffee.jpg" },
        { name: "Beverage", price: 3.5, img: "Images/beverage.jpg" }
    ],
    KOl: [
        { name: "Latte", price: 3.5, img: "Images/latte.jpg" },
        { name: "Americano", price: 3.5, img: "Images/Americano.jpg" },
        { name: "Matcha Milk", price: 3.5, img: "Images/Matcha_milk.jpg" },
        { name: "Chocolate Milk", price: 3.5, img: "Images/chocolate_milk.jpg" }
    ],
    seafoods_home: [
        { name: "Grilled Shrimp", price: 3.5, img: "Images/grilled_shrimp.jpg" },
        { name: "Fried Shrimp", price: 3.5, img: "Images/Fried_Shrimp.jpg" },
        { name: "Salmon Sashimi", price: 3.5, img: "Images/salmon_sashimi.jpg" },
        { name: "Soy Salmon Steak", price: 3.5, img: "Images/soy_salmon_steak.jpg" }
    ],
    fresh_seafoods: [
        { name: "Lobster Thermidor", price: 3.5, img: "Images/lobster_thermidor.jpg" },
        { name: "Backed Sea Scallops", price: 3.5, img: "Images/backed_sea_scallops.jpg" },
        { name: "Grilled Octopus", price: 3.5, img: "Images/grilled_octopus.jpg" },
        { name: "Oyster Shooter", price: 3.5, img: "Images/oyster_shooter.jpg" }
    ],
    mommy_seafoods: [
        { name: "Grilled Shrimp", price: 3.5, img: "Images/grilled_shrimp.jpg" },
        { name: "Fried Shrimp", price: 3.5, img: "Images/Fried_Shrimp.jpg" },
        { name: "Salmon Sashimi", price: 3.5, img: "Images/salmon_sashimi.jpg" },
        { name: "Soy Salmon Steak", price: 3.5, img: "Images/soy_salmon_steak.jpg" }
    ],
    Sonora_seafoods: [
        { name: "Lobster Thermidor", price: 3.5, img: "Images/lobster_thermidor.jpg" },
        { name: "Backed Sea Scallops", price: 3.5, img: "Images/backed_sea_scallops.jpg" },
        { name: "Grilled Octopus", price: 3.5, img: "Images/grilled_octopus.jpg" },
        { name: "Oyster Shooter", price: 3.5, img: "Images/oyster_shooter.jpg" }
    ],
    healthy_home: [
        { name: "Paleo Grilled Chicken Cobb Salad", price: 3.5, img: "Images/paleo_grilled_chicken_cobb_salad.jpg" },
        { name: "Chicken Shawarma With Creamy Garlic Sauce", price: 3.5, img: "Images/Chicken_shawarma_with_creamy_garlic_sauce.jpg" },
        { name: "Salmon Sashimi", price: 3.5, img: "Images/salmon_salad.jpg" },
        { name: "Grilled Chicken Caesar Salad", price: 3.5, img: "https://i.pinimg.com/736x/d3/d5/ff/d3d5ff73673cc1e63829b4c49e2c1300.jpg" }
    ],
    salad_fresh: [
        { name: "salad with chicken", price: 3.5, img: "https://i.pinimg.com/1200x/5f/39/e4/5f39e4f1d4134db377be2f7a01a0f4b5.jpg" },
        { name: "Zesty Grilled Chicken Salad", price: 3.5, img: "https://i.pinimg.com/736x/0c/b2/69/0cb269e7d4abea0809fab8b5a15295ee.jpg" },
        { name: "White Balsamic Vinaigrette", price: 3.5, img: "https://i.pinimg.com/736x/eb/cb/b9/ebcbb960d5d992314b90ba13029e05b3.jpg" },
        { name: "Zesty Avocado & Egg Salad Bowl", price: 3.5, img: "https://i.pinimg.com/1200x/4e/88/f2/4e88f2e77e82fd9ab142beaae7ef02b0.jpg" }
    ],
    home_salad: [
        { name: "Paleo Grilled Chicken Cobb Salad", price: 3.5, img: "Images/paleo_grilled_chicken_cobb_salad.jpg" },
        { name: "Chicken Shawarma With Creamy Garlic Sauce", price: 3.5, img: "Images/Chicken_shawarma_with_creamy_garlic_sauce.jpg" },
        { name: "Salmon Sashimi", price: 3.5, img: "Images/salmon_salad.jpg" },
        { name: "Grilled Chicken Caesar Salad", price: 3.5, img: "https://i.pinimg.com/736x/d3/d5/ff/d3d5ff73673cc1e63829b4c49e2c1300.jpg" }
    ],
    green_home: [
        { name: "salad with chicken", price: 3.5, img: "https://i.pinimg.com/1200x/5f/39/e4/5f39e4f1d4134db377be2f7a01a0f4b5.jpg" },
        { name: "Zesty Grilled Chicken Salad", price: 3.5, img: "https://i.pinimg.com/736x/0c/b2/69/0cb269e7d4abea0809fab8b5a15295ee.jpg" },
        { name: "White Balsamic Vinaigrette", price: 3.5, img: "https://i.pinimg.com/736x/eb/cb/b9/ebcbb960d5d992314b90ba13029e05b3.jpg" },
        { name: "Zesty Avocado & Egg Salad Bowl", price: 3.5, img: "https://i.pinimg.com/1200x/4e/88/f2/4e88f2e77e82fd9ab142beaae7ef02b0.jpg" }
    ]
};

// ========== GLOBAL VARIABLES ==========
let cart = [];
let total = 0;
let currentBalance = 245.75;
let selectedAmount = null;

// ========== LOGIN FUNCTIONS ==========
function toggleProfile() {
    document.getElementById("loginModal").classList.add("active");
}

function loginUser() {
    const name = document.getElementById("loginName").value.trim();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!name) {
        alert("Please enter your name");
        return;
    }

    if (!email) {
        alert("Please enter your email");
        return;
    }

    if (!password) {
        alert("Please enter your password");
        return;
    }

    // Save user
    localStorage.setItem("user", name);

    document.getElementById("username").innerText = name;

    // Close modal
    document.getElementById("loginModal").classList.remove("active");

    // Clear inputs
    document.getElementById("loginName").value = "";
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";

    showTemporaryNotification(`Welcome back, ${name}!`);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const loginModal = document.getElementById("loginModal");
    if (loginModal && loginModal.style.display === 'flex') {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    }
});
// ========== CART FUNCTIONS ==========
function toggleCart() {
    let panel = document.getElementById("cartPanel");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
        updateCartDisplay();
    }
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1,
            totalPrice: price
        });
    }
    
    updateCartTotal();
    updateCartDisplay();
    
    // Animation for cart icon
    const cartIcon = document.querySelector('.cart-box');
    if (cartIcon) {
        cartIcon.classList.add('cart-animation');
        setTimeout(() => {
            cartIcon.classList.remove('cart-animation');
        }, 300);
    }
    
    showTemporaryNotification(`${name} added to cart!`);
}

function updateCartTotal() {
    total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("totalPrice").innerText = total.toFixed(2);
}

function updateCartDisplay() {
    let cartHTML = "";
    
    if (cart.length === 0) {
        cartHTML = "<p style='text-align: center; padding: 20px;'>Your cart is empty</p>";
    } else {
        cart.forEach((item, index) => {
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong>
                        <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                        <div class="cart-item-total">Total: $${item.totalPrice.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity(${index}, -1)" class="qty-btn">-</button>
                        <span class="qty-number">${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" class="qty-btn">+</button>
                        <button onclick="removeItem(${index})" class="remove-btn">🗑️</button>
                    </div>
                </div>
            `;
        });
    }
    
    document.getElementById("cartItems").innerHTML = cartHTML;
}

function updateQuantity(index, change) {
    const item = cart[index];
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeItem(index);
    } else {
        item.quantity = newQuantity;
        item.totalPrice = item.price * item.quantity;
        updateCartTotal();
        updateCartDisplay();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartTotal();
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some items first.");
        return;
    }
    
    if (currentBalance >= total) {
        currentBalance -= total;
        updateWalletDisplay();
        
        addTransaction(`Food Order`, -total);
        
        alert(`✅ Order placed successfully!\nTotal: $${total.toFixed(2)}\nRemaining balance: $${currentBalance.toFixed(2)}`);
        
        cart = [];
        updateCartTotal();
        updateCartDisplay();
        
        const cartPanel = document.getElementById("cartPanel");
        if (cartPanel) cartPanel.style.display = "none";
    } else {
        alert(`❌ Insufficient balance!\n\nYour balance: $${currentBalance.toFixed(2)}\nOrder total: $${total.toFixed(2)}\n\nPlease add money to your wallet.`);
        showAddMoneyForm();
    }
}

// ========== SEARCH FUNCTION ==========

function searchFood() {
    let searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
    
    console.log("Searching for:", searchTerm); // Debug
    
    if (searchTerm === "") {
        alert("Please enter what you want to eat!");
        return;
    }
    
    let results = [];
    let totalItems = 0;
    
    for (let key in menuDB) {
        let restaurantName = getRestaurantName(key);
        console.log("Checking restaurant:", key, restaurantName); // Debug
        
        if (restaurantName.toLowerCase().includes(searchTerm)) {
            menuDB[key].forEach(item => {
                results.push({
                    ...item,
                    restaurantName: restaurantName,
                    restaurantId: key
                });
                totalItems++;
            });
        } else {
            menuDB[key].forEach(item => {
                if (item.name.toLowerCase().includes(searchTerm)) {
                    results.push({
                        ...item,
                        restaurantName: restaurantName,
                        restaurantId: key
                    });
                    totalItems++;
                }
            });
        }
    }
    
    console.log("Found results:", results.length); // Debug
    
    if (results.length === 0) {
        alert(`No results found for "${searchTerm}". Try something else!`);
    }
    
    displaySearchResultsModal(results, searchTerm);
}
function getRestaurantName(key) {
    const restaurantNames = {
        // Burger
        burger_king: "Burger King",
        burger_KFC: "KFC Burger",
        texas_chicken: "Texas Chicken",
        burger_bio: "Burger Bio",
        
        // Pizza
        pizza_hut: "Pizza Hut",
        pasta_pizza: "Pasta Pizza",
        pizza_hayyat: "Pizza Hayyat",
        house_pizza: "House Pizza",
        
        // Ice Cream
        Rainbow_ice_cream: "Rainbow Ice Cream",
        Ice_cream: "Ice Cream Paradise",
        yummy_ice_cream: "Yummy Ice Cream",
        fradel_ice_cream: "Fradel Ice Cream",
        
        // Coffee
        starbuck_coffee: "Starbucks Coffee",
        tube_coffee: "Tube Coffee",
        brown_coffee: "Brown Coffee",
        KOl: "KOL Coffee",
        
        // Seafood
        seafoods_home: "Seafoods Home",
        fresh_seafoods: "Fresh Seafoods",
        mommy_seafoods: "Mommy Seafoods",
        Sonora_seafoods: "Sonora Seafoods",
        
        // Healthy
        healthy_home: "Healthy Foods",
        salad_fresh: "Salad Fresh",
        home_salad: "Home Salad",
        green_home: "Green Fresh"
    };
    return restaurantNames[key] || key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
}
function displaySearchResultsModal(results, searchTerm) {
    let existingModal = document.getElementById('searchResultsModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'searchResultsModal';
    modal.className = 'modal';
    modal.style.display = 'flex';
    
    let resultsHtml = `
        <div class="modal-content search-results-content">
            <div class="modal-header">
                <h3><i class="fas fa-search"></i> Search Results for "${searchTerm}"</h3>
                <button class="close-modal-btn" onclick="closeSearchModal()">&times;</button>
            </div>
            <div class="modal-body">
    `;
    
    if (results.length === 0) {
        resultsHtml += `
            <div class="no-results">
                <i class="fas fa-utensils"></i>
                <p>No items found for "${searchTerm}"</p>
                <small>Try searching for: burger, pizza, coffee, seafood, chicken, salad, or ice cream</small>
            </div>
        `;
    } else {
        resultsHtml += `<div class="search-results-grid">`;
        results.forEach(item => {
            // Clean up item name for display
            const displayName = item.name.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
            resultsHtml += `
                <div class="search-result-item">
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Food'">
                    <div class="result-info">
                        <h4>${displayName}</h4>
                        <p class="restaurant-name"><i class="fas fa-store"></i> ${item.restaurantName}</p>
                        <p class="price">$${item.price.toFixed(2)}</p>
                        <button class="add-to-cart-btn" onclick="addToCartFromSearch('${displayName.replace(/'/g, "\\'")}', ${item.price})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;
        });
        resultsHtml += `</div>`;
    }
    
    resultsHtml += `
            </div>
        </div>
    `;
    
    modal.innerHTML = resultsHtml;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeSearchModal();
        }
    };
}

function closeSearchModal() {
    const modal = document.getElementById('searchResultsModal');
    if (modal) {
        modal.remove();
    }
}

function addToCartFromSearch(itemName, price) {
    addToCart(itemName, price);
    closeSearchModal();
}

function showTemporaryNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'temp-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ========== WALLET FUNCTIONS ==========
function updateWalletDisplay() {
    const balanceEl = document.getElementById('walletBalance');
    if (balanceEl) {
        balanceEl.textContent = `$${currentBalance.toFixed(2)}`;
    }
}

function showAddMoneyForm() {
    document.querySelector('.balance-card').style.display = 'none';
    document.getElementById('add-money-form').style.display = 'block';
}

function hideAddMoneyForm() {
    document.querySelector('.balance-card').style.display = 'block';
    document.getElementById('add-money-form').style.display = 'none';
    document.getElementById('custom-amount').value = '';
    selectedAmount = null;
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = '#c1461c';
    });
}

function selectAmount(amount, event) {
    selectedAmount = amount;
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = '#c1461c';
    });
    event.target.style.background = '#c1461c';
    event.target.style.color = 'white';
}

function addMoneyToWallet() {
    let amount = selectedAmount;
    const customInput = document.getElementById('custom-amount');
    if (!amount && customInput.value) {
        amount = parseFloat(customInput.value);
    }
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    currentBalance += amount;
    addTransaction(`Wallet Top-up`, amount);
    updateWalletDisplay();
    hideAddMoneyForm();
    alert(`$${amount.toFixed(2)} added successfully!`);
}

function withdrawMoney() {
    alert('Withdrawal feature coming soon!');
}

function addTransaction(description, amount) {
    const transactionList = document.querySelector('.transaction-history');
    if (transactionList) {
        const newItem = document.createElement('div');
        newItem.className = 'transaction-item';
        const isPositive = amount > 0;
        newItem.innerHTML = `
            <div class="transaction-details">
                <h4>${description}</h4>
                <p>${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div class="transaction-amount ${isPositive ? 'positive' : 'negative'}">
                ${isPositive ? '+' : '-'}$${Math.abs(amount).toFixed(2)}
            </div>
        `;
        transactionList.insertBefore(newItem, transactionList.children[1]);
    }
}

// ========== SECTION NAVIGATION ==========
function hideAllSections() {
    const sections = [
        'homeMain',
        'burgerRestaurants', 'burgerFoodList',
        'pizzaRestaurants', 'pizzaFoodList',
        'icecreamRestaurants', 'icecreamFoodList',
        'coffeeRestaurants', 'coffeeFoodList',
        'seafoodRestaurants', 'seafoodFoodList',
        'healthyRestaurants', 'healthyFoodList',
        'walletSection',
        'notificationSection',
        'contactSection',
        'settingsSection'
    ];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function showMain() {
    hideAllSections();
    document.getElementById('homeMain').style.display = 'block';
    document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-nav li:first-child').classList.add('active');
}

function showWallet() {
    hideAllSections();
    document.getElementById('walletSection').style.display = 'block';
    updateWalletDisplay();
    const balanceCard = document.querySelector('.balance-card');
    if (balanceCard) balanceCard.style.display = 'block';
    const addForm = document.getElementById('add-money-form');
    if (addForm) addForm.style.display = 'none';
    document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-nav li:nth-child(2)').classList.add('active');
}

function showNotifications() {
    hideAllSections();
    document.getElementById('notificationSection').style.display = 'block';
    document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-nav li:nth-child(3)').classList.add('active');
}

function showContact() {
    hideAllSections();
    document.getElementById('contactSection').style.display = 'block';
    document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-nav li:nth-child(4)').classList.add('active');
}

function showSettings() {
    hideAllSections();
    document.getElementById('settingsSection').style.display = 'block';
    document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-nav li:nth-child(5)').classList.add('active');
}

// ========== RESTAURANT FUNCTIONS ==========
function showBurgerRestaurants() { 
    hideAllSections(); 
    document.getElementById('burgerRestaurants').style.display = 'block'; 
}

function showPizzaRestaurants() { 
    hideAllSections(); 
    document.getElementById('pizzaRestaurants').style.display = 'block'; 
}

function showIcecreamRestaurants() { 
    hideAllSections(); 
    document.getElementById('icecreamRestaurants').style.display = 'block'; 
}

function showCoffeeRestaurants() { 
    hideAllSections(); 
    document.getElementById('coffeeRestaurants').style.display = 'block'; 
}

function showSeafoodRestaurants() { 
    hideAllSections(); 
    document.getElementById('seafoodRestaurants').style.display = 'block'; 
}

function showHealthyRestaurants() { 
    hideAllSections(); 
    document.getElementById('healthyRestaurants').style.display = 'block'; 
}

// ========== MENU FUNCTIONS ==========
function openBurgerMenu(restaurantKey) {
    const container = document.getElementById('foodContainer');
    container.innerHTML = '';
    const items = menuDB[restaurantKey] || [];
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200'">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
    hideAllSections();
    document.getElementById('burgerFoodList').style.display = 'block';
}

function openPizzaMenu(restaurantKey) {
    const container = document.getElementById('pizzaFoodContainer');
    container.innerHTML = '';
    (menuDB[restaurantKey] || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200'">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
    hideAllSections();
    document.getElementById('pizzaFoodList').style.display = 'block';
}

function openIcecreamMenu(restaurantKey) {
    const container = document.getElementById('icecreamFoodContainer');
    container.innerHTML = '';
    (menuDB[restaurantKey] || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200'">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
    hideAllSections();
    document.getElementById('icecreamFoodList').style.display = 'block';
}

function openCoffeeMenu(restaurantKey) {
    const container = document.getElementById('coffeeFoodContainer');
    container.innerHTML = '';
    (menuDB[restaurantKey] || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200'">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
    hideAllSections();
    document.getElementById('coffeeFoodList').style.display = 'block';
}

function openSeafoodMenu(restaurantKey) {
    const container = document.getElementById('seafoodFoodContainer');
    container.innerHTML = '';
    (menuDB[restaurantKey] || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200'">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
    hideAllSections();
    document.getElementById('seafoodFoodList').style.display = 'block';
}

function openHealthyMenu(restaurantKey) {
    const container = document.getElementById('healthyFoodContainer');
    container.innerHTML = '';
    (menuDB[restaurantKey] || []).forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200'">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
    hideAllSections();
    document.getElementById('healthyFoodList').style.display = 'block';
}

// ========== BACK FUNCTIONS ==========
function backToMain() { showMain(); }
function backToBurgerRestaurants() { hideAllSections(); document.getElementById('burgerRestaurants').style.display = 'block'; }
function backToPizzaRestaurants() { hideAllSections(); document.getElementById('pizzaRestaurants').style.display = 'block'; }
function backToIceCreamRestaurants() { hideAllSections(); document.getElementById('icecreamRestaurants').style.display = 'block'; }
function backToCoffeeRestaurants() { hideAllSections(); document.getElementById('coffeeRestaurants').style.display = 'block'; }
function backToSeafoodRestaurants() { hideAllSections(); document.getElementById('seafoodRestaurants').style.display = 'block'; }
function backToHealthyRestaurants() { hideAllSections(); document.getElementById('healthyRestaurants').style.display = 'block'; }
function backToMainIceCream() { showMain(); }
function backToMainCoffee() { showMain(); }
function backToMainSeafood() { showMain(); }
function backToMainHealthy() { showMain(); }

// ========== SETTINGS FUNCTIONS ==========
function editProfile() {
    alert("Edit Profile feature coming soon! You can update your name, email, etc.");
}

function changePassword() {
    alert("Change Password feature coming soon! You would enter old and new password.");
}

function managePayment() {
    alert("Payment Methods management coming soon! You would see saved cards.");
}

function changeLanguage() {
    let lang = prompt("Enter preferred language (e.g., English, Khmer, French):", "English");
    if (lang && lang.trim() !== '') {
        document.getElementById('languageDisplay').innerText = lang;
        showTemporaryNotification(`Language changed to ${lang}`);
    }
}

function changeCurrency() {
    let curr = prompt("Enter currency (e.g., USD, EUR, GBP, KHR):", "USD");
    if (curr && curr.trim() !== '') {
        let display = curr.toUpperCase();
        // Simple mapping for common currencies
        if (display === 'USD') display = 'US Dollar ($)';
        else if (display === 'EUR') display = 'Euro (€)';
        else if (display === 'GBP') display = 'British Pound (£)';
        else if (display === 'KHR') display = 'Cambodian Riel (៛)';
        else if (display === 'JPY') display = 'Japanese Yen (¥)';
        else display = curr;
        document.getElementById('currencyDisplay').innerText = display;
        showTemporaryNotification(`Currency changed to ${curr.toUpperCase()}`);
        
        // Optional: Update all displayed prices (if you want to implement currency conversion)
        // updateAllPrices(display);
    }
}

// ========== SUPPORT FUNCTIONS ==========
function openHelp() {
    alert("Help Center – Frequently Asked Questions\n\n" +
          "1. How to place an order?\n   - Browse restaurants, add items to cart, and checkout.\n\n" +
          "2. How to add money to wallet?\n   - Go to Wallet section and click 'Add Money'.\n\n" +
          "3. How to search for food?\n   - Use the search bar on the home page.\n\n" +
          "4. How to contact support?\n   - Go to Contact Us section.");
    showTemporaryNotification('Help Center opened');
}

function viewPrivacy() {
    alert("Privacy Policy – FOODIE App\n\n" +
          "We value your privacy. Your personal information is secure with us. " +
          "We do not share your data with third parties without your consent. " +
          "For more details, please contact our support team.");
    showTemporaryNotification('Privacy Policy viewed');
}

function viewTerms() {
    alert("Terms of Service – FOODIE App\n\n" +
          "By using this app, you agree to our terms:\n" +
          "1. You must be 18 years or older.\n" +
          "2. All orders are final.\n" +
          "3. Refunds are processed within 7 business days.\n" +
          "4. We reserve the right to modify terms at any time.\n\n" +
          "Thank you for using FOODIE!");
    showTemporaryNotification('Terms of Service viewed');
}
// ========== LOAD ALL RESTAURANTS FOR HOME PAGE ==========
function loadAllRestaurants() {
    const container = document.getElementById("allRestaurants");
    if (!container) return;
    
    container.innerHTML = "";
    
    // Define all restaurants with their details
    const restaurantsConfig = [
        { id: "burger_king", name: "Burger King", img: "Images/king_burger.jpg", category: "burger" },
        { id: "burger_KFC", name: "KFC Burger", img: "Images/KFC.jpg", category: "burger" },
        { id: "texas_chicken", name: "Texas Chicken", img: "https://i.pinimg.com/1200x/15/58/f9/1558f9690dfaaa3471660d53f3e44456.jpg", category: "burger" },
        { id: "burger_bio", name: "Burger Bio", img: "https://i.pinimg.com/1200x/96/bf/84/96bf847a8ef87ffd6ffcfa2a90004211.jpg", category: "burger" },
        { id: "pizza_hut", name: "Pizza Hut", img: "Images/pizza_hut.jpg", category: "pizza" },
        { id: "pasta_pizza", name: "Pasta Pizza", img: "Images/pasta_pizza.jpg", category: "pizza" },
        { id: "Rainbow_ice_cream", name: "Rainbow Ice Cream", img: "Images/rainbow_ice_cream.jpg", category: "icecream" },
        { id: "Ice_cream", name: "Ice Cream Paradise", img: "Images/ice_cream.jpg", category: "icecream" },
        { id: "starbuck_coffee", name: "Starbucks Coffee", img: "Images/starbucks_coffee.jpg", category: "coffee" },
        { id: "tube_coffee", name: "Tube Coffee", img: "Images/tube_coffee.jpg", category: "coffee" },
        { id: "brown_coffee", name: "Brown Coffee", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUeYPXDhQWVHu4kgdIiege1fjKuCn61UJkA&s", category: "coffee" },
        { id: "KOl", name: "KOL Coffee", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtwjy1-fjaydh8qgYZ0uMiAJTN7ktw4-jvw&s", category: "coffee" },
        { id: "seafoods_home", name: "Seafoods Home", img: "Images/seafoods_home.jpg", category: "seafood" },
        { id: "fresh_seafoods", name: "Fresh Seafoods", img: "Images/fresh_seafoods.jpg", category: "seafood" },
        { id: "mommy_seafoods", name: "Mommy Seafoods", img: "https://cdn.redbox.menu/cache-prod/61a661a5-8621-481b-95f3-427ab6cc0d32__xl.jpg", category: "seafood" },
        { id: "sonora_seafoods", name: "Sonora Seafoods", img: "https://i.pinimg.com/736x/85/ff/6c/85ff6ca7973458eb30fa7a289c54419d.jpg", category: "seafood" },
        { id: "healthy_home", name: "Healthy Foods", img: "https://i.pinimg.com/736x/55/81/86/558186dee5bd6012136fe1a4caf6af2d.jpg", category: "healthy" },
        { id: "salad_fresh", name: "Salad Fresh", img: "https://i.pinimg.com/736x/fc/a4/85/fca48567ec6ebcc4367b8ab1ff73d291.jpg", category: "healthy" },
        { id: "home_salad", name: "Home Salad", img: "https://i.pinimg.com/736x/cb/a6/88/cba688058baffbf0b48c562ab7444a92.jpg", category: "healthy" },
        { id: "green_home", name: "Green Fresh", img: "https://i.pinimg.com/1200x/17/de/17/17de17fa8735675f348ef86aeafd095f.jpg", category: "healthy" }
    ];
    
    // Add restaurants to container
    restaurantsConfig.forEach(restaurant => {
        const div = document.createElement("div");
        div.className = "restaurant-card";
        
        div.innerHTML = `
            <img src="${restaurant.img}" alt="${restaurant.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${restaurant.name}'">
            <h3>${restaurant.name}</h3>
            <span class="category-badge">${restaurant.category.toUpperCase()}</span>
        `;
        
        div.onclick = function() {
            openRestaurantByCategory(restaurant.id, restaurant.category);
        };
        
        container.appendChild(div);
    });
}

function openRestaurantByCategory(restaurantId, category) {
    switch(category) {
        case 'burger':
            openBurgerMenu(restaurantId);
            break;
        case 'pizza':
            openPizzaMenu(restaurantId);
            break;
        case 'icecream':
            openIcecreamMenu(restaurantId);
            break;
        case 'coffee':
            openCoffeeMenu(restaurantId);
            break;
        case 'seafood':
            openSeafoodMenu(restaurantId);
            break;
        case 'healthy':
            openHealthyMenu(restaurantId);
            break;
        default:
            alert('Restaurant menu coming soon!');
    }
}

// ========== CONTACT FORM HANDLER ==========
function handleContactForm(event) {
    if (event) event.preventDefault();
    
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Simulate sending message
    alert(`✅ Message sent successfully!\n\nThank you ${name} for contacting us.\nWe'll reply to ${email} within 24 hours.`);
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    return false;
}

// ========== NOTIFICATION TOGGLES ==========
function setupNotificationToggles() {
    const pushToggle = document.querySelector('#pushNotifications');
    const emailToggle = document.querySelector('#emailNotifications');
    const smsToggle = document.querySelector('#smsNotifications');
    
    if (pushToggle) {
        pushToggle.addEventListener('change', function() {
            const status = this.checked ? 'enabled' : 'disabled';
            showTemporaryNotification(`Push notifications ${status}`);
        });
    }
    
    if (emailToggle) {
        emailToggle.addEventListener('change', function() {
            const status = this.checked ? 'enabled' : 'disabled';
            showTemporaryNotification(`Email notifications ${status}`);
        });
    }
    
    if (smsToggle) {
        smsToggle.addEventListener('change', function() {
            const status = this.checked ? 'enabled' : 'disabled';
            showTemporaryNotification(`SMS notifications ${status}`);
        });
    }
}

// ========== INITIALIZE APP ==========
function initializeApp() {
    // Show home section
    showMain();
    
    // Update wallet display
    updateWalletDisplay();
    
    // Load all restaurants
    loadAllRestaurants();
    
    
    // Setup notification toggles
    setupNotificationToggles();
    
    // Add Enter key support for search
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                searchFood();
            }
        });
    }
    
    // Close cart panel when clicking outside
    document.addEventListener('click', function(e) {
        const cartPanel = document.getElementById("cartPanel");
        const cartBox = document.querySelector('.cart-box');
        if (cartPanel && cartPanel.style.display === 'block') {
            if (!cartPanel.contains(e.target) && (!cartBox || !cartBox.contains(e.target))) {
            cartPanel.style.display = 'none';
        }
    }
        
        // Close login modal when clicking outside
        const loginModal = document.getElementById("loginModal");
        if (loginModal && loginModal.style.display === 'flex') {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
         }
    });
    
    // Setup contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = handleContactForm;
    }
    
    
    console.log('FOODIE App initialized successfully! 🍔');
}

// ========== WINDOW LOAD EVENT ==========
window.onload = function() {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        document.getElementById("username").innerText = savedUser;
    }
    initializeApp();
};
