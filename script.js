const menuData = [
  { id: 1, name: "Classic Cheeseburger", price: 249, cat: "fastfood", diet: "nonveg", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Crispy French Fries", price: 149, cat: "fastfood", diet: "veg", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Margherita Pizza", price: 399, cat: "pizza", diet: "veg", img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Pepperoni Pizza", price: 499, cat: "pizza", diet: "nonveg", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Steamed Veg Momos", price: 129, cat: "asian", diet: "veg", img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Paneer Roll", price: 179, cat: "rolls", diet: "veg", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Chicken Shawarma", price: 199, cat: "rolls", diet: "nonveg", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "Veg Wrap", price: 159, cat: "rolls", diet: "veg", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" },
  { id: 9, name: "Hakka Noodles", price: 219, cat: "asian", diet: "veg", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
  { id: 10, name: "Chicken Dum Biryani", price: 349, cat: "indian", diet: "nonveg", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
  { id: 11, name: "Butter Chicken", price: 429, cat: "indian", diet: "nonveg", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
  { id: 12, name: "Paneer Tikka Masala", price: 369, cat: "indian", diet: "veg", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80" },
  { id: 13, name: "Sizzling Brownie", price: 229, cat: "desserts", diet: "veg", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
  { id: 14, name: "Classic Tiramisu", price: 249, cat: "desserts", diet: "veg", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80" },
  { id: 15, name: "Hot Coffee", price: 119, cat: "drinks", diet: "veg", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80" },
  { id: 16, name: "Virgin Mojito", price: 149, cat: "drinks", diet: "veg", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80" }
];

const categories = [
  { id: "all", label: "✨ All" }, { id: "fastfood", label: "🍔 Burgers" },
  { id: "pizza", label: "🍕 Pizza" }, { id: "rolls", label: "🌯 Rolls & Wraps" },
  { id: "asian", label: "🥢 Momos & Asian" }, { id: "indian", label: "🍛 Indian & Biryani" }, 
  { id: "desserts", label: "🍰 Desserts" }, { id: "drinks", label: "☕ Drinks" }
];

let currentCat = "all";
let cart = [];

function init() {
  const catHTML = categories.map(c => 
    `<button class="cat-btn ${currentCat === c.id ? 'active' : ''}" onclick="setCategory('${c.id}')">${c.label}</button>`
  ).join('');
  document.getElementById('cat-container').innerHTML = catHTML;
  renderMenu();
}

function setCategory(cat) { currentCat = cat; init(); }

function renderMenu() {
  const searchInput = document.getElementById('search');
  const query = searchInput ? searchInput.value.toLowerCase() : "";
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  
  const filtered = menuData.filter(item => {
    const matchCat = currentCat === 'all' || item.cat === currentCat;
    const matchSearch = item.name.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6c655b;">No items found. Try searching something else!</div>`;
    return;
  }

  grid.innerHTML = filtered.map((item, index) => `
    <div class="card" id="card-${item.id}" style="animation-delay: ${index * 0.05}s">
      <div class="diet ${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></div>
      <div class="card-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.name}</h3>
        <div class="card-bottom">
          <span class="price">₹${item.price}</span>
          <button class="btn" onclick="addToCart(event, ${item.id})">Add +</button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCart() {
  const cartEl = document.getElementById('cart');
  const overlayEl = document.getElementById('overlay');
  if (cartEl) cartEl.classList.toggle('active');
  if (overlayEl) overlayEl.classList.toggle('active');
}

function addToCart(event, id) {
  const item = menuData.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  
  updateCart();

  // --- Fly to Cart Animation Logic ---
  const cardEl = document.getElementById(`card-${id}`);
  const imgEl = cardEl ? cardEl.querySelector('img') : null;
  const cartBtn = document.getElementById('cart-btn-target');

  if (imgEl && cartBtn) {
    const imgRect = imgEl.getBoundingClientRect();
    const cartRect = cartBtn.getBoundingClientRect();

    const flyer = imgEl.cloneNode(true);
    flyer.style.position = 'fixed';
    flyer.style.zIndex = '9999';
    flyer.style.left = imgRect.left + 'px';
    flyer.style.top = imgRect.top + 'px';
    flyer.style.width = imgRect.width + 'px';
    flyer.style.height = imgRect.height + 'px';
    flyer.style.borderRadius = '15px';
    flyer.style.objectFit = 'cover';
    flyer.style.transition = 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
    document.body.appendChild(flyer);

    flyer.getBoundingClientRect();

    const targetX = cartRect.left + cartRect.width / 2 - 20;
    const targetY = cartRect.top + cartRect.height / 2 - 20;

    flyer.style.left = targetX + 'px';
    flyer.style.top = targetY + 'px';
    flyer.style.width = '40px';
    flyer.style.height = '40px';
    flyer.style.opacity = '0.3';
    flyer.style.transform = 'scale(0.3) rotate(360deg)';

    setTimeout(() => {
      flyer.remove();
      const countBadge = document.getElementById('cart-count');
      if (countBadge) {
        countBadge.style.transform = 'scale(1.5)';
        setTimeout(() => countBadge.style.transform = 'scale(1)', 200);
      }
    }, 700);
  }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  }
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const countBadge = document.getElementById('cart-count');
  if (!cartContainer || !countBadge) return;

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  countBadge.innerText = totalQty;

  if (cart.length === 0) {
    cartContainer.innerHTML = `<div style="text-align:center; margin-top:50px; color:#888;">Cart is empty.</div>`;
  } else {
    cartContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div>
          <div style="font-weight:600;">${item.name}</div>
          <div style="color:#ff6b35;">₹${item.price}</div>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `).join('');
  }

  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const tax = total > 0 ? 40 + Math.round(total * 0.05) : 0;
  
  document.getElementById('cart-total').innerText = `₹${total}`;
  document.getElementById('cart-tax').innerText = `₹${tax}`;
  document.getElementById('cart-final').innerText = `₹${total + tax}`;
}

function openCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  toggleCart();
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('active');
}

function closeCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('active');
}

function switchPayment(method) {
  document.querySelectorAll('.payment-details-box').forEach(box => box.classList.remove('active'));
  const targetBox = document.getElementById('details-' + method);
  if (targetBox) targetBox.classList.add('active');
}

function processPayment() {
  const selectedInput = document.querySelector('input[name="payment"]:checked');
  const selectedMethod = selectedInput ? selectedInput.value : 'cod';
  let msg = "";
  
  if (selectedMethod === 'cod') {
    msg = "Order placed successfully! Pay via Cash on Delivery upon arrival.";
  } else if (selectedMethod === 'card') {
    const cardNum = document.getElementById('dummy-card-num').value;
    if(!cardNum) { alert("Please enter card details"); return; }
    msg = "Card payment processed successfully via dummy card!";
  } else if (selectedMethod === 'gpay') {
    msg = "Redirecting to payment website...";
  }
  
  alert(msg);
  cart = [];
  updateCart();
  closeCheckout();
}

window.onload = init;