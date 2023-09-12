// Sample data for shoes (replace with your own)
const shoes = [
    { id: 1, name: 'Running Shoe', price: 49.99 },
    { id: 2, name: 'Casual Shoe', price: 39.99 },
    { id: 3, name: 'Athletic Shoe', price: 59.99 },
];

// DOM elements
const shoeList = document.getElementById('shoe-list');
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.querySelector('.close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const cartCount = document.getElementById('cart-count');

// Initialize cart
const cart = [];

// Populate shoe list
shoes.forEach(shoe => {
    const shoeItem = document.createElement('div');
    shoeItem.innerHTML = `
        <h3>${shoe.name}</h3>
        <p>Price: $${shoe.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${shoe.id}">Add to Cart</button>
    `;
    shoeList.appendChild(shoeItem);
});

// Add to cart click event
shoeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const shoeId = parseInt(e.target.getAttribute('data-id'));
        const shoe = shoes.find(item => item.id === shoeId);
        if (shoe) {
            cart.push(shoe);
            updateCart();
        }
    }
});

// Update cart and open cart modal
cartButton.addEventListener('click', () => {
    openCartModal();
    updateCart();
});

// Close cart modal
closeCartModal.addEventListener('click', () => {
    closeCartModalFunction();
});

// Checkout button click event
checkoutButton.addEventListener('click', () => {
    alert('Checkout functionality is not implemented in this example.');
});

// Update the cart UI
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Open cart modal
function openCartModal() {
    cartModal.style.display = 'block';
}

// Close cart modal
function closeCartModalFunction() {
    cartModal.style.display = 'none';
}

// Close cart modal when clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeCartModalFunction();
    }
});

// Close cart modal when pressing the ESC key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartModalFunction();
    }
});
