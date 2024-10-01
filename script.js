// Data produk (contoh dengan deskription dan gambar)
const products = [
    { name: 'Capybara', price: 500000,description: 'Stock seperti di gambar.', image: 'image/capybara.jpeg'},
    { name: 'Labubu', price: 750000,description: 'Hanya ready warna pink dan biru.', image: 'image/labubu.jpg' },
    { name: 'Cry Baby', price: 500000,description: 'Stock seperti di gambar.', image: 'image/cry baby.jpg' },
    { name: 'Onitsuka Tiger', price:2200000,description: 'Stock seperti di gambar uk 37-41.', image: 'image/Onitsuka Tiger.jpeg' },
    { name: 'Adidas Samba', price:4000000,description: 'Stock seperti di gambar uk 37-41.', image: 'image/Adidas.jpeg' },
    { name: 'Vasline Gluta Hya Pro', price: 300000,description: 'Stock hanya 170ml.', image: 'image/Vasline.jpeg' },
    { name: 'Jam Tangan Seiko', price: 5000000,description: 'Stock seperti di gambar.',image: 'image/Seiko.jpeg' },
    { name: 'Tas Diesel', price: 6000000,description: 'Stock seperti di gambar.',image: 'image/Diesel.jpeg' },
    { name: 'Van Cleef and Arpels', price: 2000000,description: 'Stock seperti di gambar.',image: 'image/Van.jpeg' },
    { name: 'Linx Rose Gold', price: 3500000,description: 'Stock seperti di gambar.',image: 'image/Linx.jpeg' },
];
// State to manage cart and order status
let cart = [];
let orderStatus = "Belum Dibayar";

// Menampilkan produk di halaman
const productContainer = document.getElementById('products');
products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px;">
        <p>${product.name} - Rp ${product.price.toLocaleString()}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${index})">Tambah ke Keranjang</button>
    `;
    productContainer.appendChild(productDiv);
});

function addToCart(index) {
    const selectedProduct = products[index];
    cart.push(selectedProduct);
    displayCart();
    calculateTotal();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
    });
}

function calculateTotal() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = `Total Belanja: Rp ${totalPrice.toLocaleString()}`;
}

// Checkout button event
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length > 0) {
        document.getElementById('checkout-form').style.display = 'block';
    } else {
        alert('Keranjang belanja kosong.');
    }
});

// Order form submission
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('checkout-form').style.display = 'none';
    document.getElementById('order-status').style.display = 'block';
});

// Payment confirmation
document.getElementById('confirm-payment-btn').addEventListener('click', function() {
    orderStatus = "Dikemas";
    document.getElementById('order-status-text').textContent = orderStatus;
    alert('Pembayaran berhasil! Pesanan sedang dikemas.');
    document.getElementById('order-status').style.display = 'none';
    document.getElementById('rating-section').style.display = 'block';
});

// Submit rating
document.getElementById('submit-rating-btn').addEventListener('click', function() {
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    alert(`Terima kasih! Anda memberikan rating ${rating} bintang. Review: ${review}`);
    document.getElementById('rating-section').style.display = 'none';
});


// Komentar
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text').value;
    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentText;
        commentList.appendChild(commentDiv);
        document.getElementById('comment-text').value = ''; // Reset form
    }
});
