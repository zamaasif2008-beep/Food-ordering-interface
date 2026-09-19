// COMPLETE FOOD CATALOGUE
const foodData = [
  {
    id: "bev-1",
    name: "Virgin Mojito",
    category: "beverages",
    price: 140,
    rating: 4.8,
    isVeg: true,
    tag: "Chilled Refreshment",
    isChefPick: true,
    desc: "Muddled fresh mint leaves, zesty lime wedges, sparkling soda, and crushed ice.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bev-2",
    name: "Iced Cold Coffee",
    category: "beverages",
    price: 160,
    rating: 4.9,
    isVeg: true,
    tag: "Bestseller",
    isChefPick: true,
    desc: "Creamy slow-brewed Arabica espresso shaken with chilled milk and dark chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bev-3",
    name: "Kadak Masala Chai",
    category: "beverages",
    price: 60,
    rating: 4.7,
    isVeg: true,
    tag: "Hot & Spiced",
    desc: "Traditional clay-pot Indian tea infused with cardamom, crushed ginger, and cloves.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bev-4",
    name: "Belgian Chocolate Milkshake",
    category: "shakes",
    price: 190,
    rating: 4.9,
    isVeg: true,
    tag: "Decadent",
    isChefPick: true,
    desc: "Thick velvety shake made with imported Belgian ganache, ice cream, and dark curls.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bev-5",
    name: "Fresh Strawberry Milkshake",
    category: "shakes",
    price: 180,
    rating: 4.6,
    isVeg: true,
    tag: "Seasonal",
    desc: "Real Mahabaleshwar strawberries blended into rich dairy cream with vanilla pearls.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bev-6",
    name: "Crunchy Oreo Thickshake",
    category: "shakes",
    price: 185,
    rating: 4.8,
    isVeg: true,
    tag: "Kids Favorite",
    desc: "Double cream Oreo cookies blended with Madagascar vanilla ice cream and hot fudge.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "wrap-1",
    name: "Authentic Chicken Shawarma",
    category: "wraps",
    price: 210,
    rating: 4.9,
    isVeg: false,
    tag: "Chef Special",
    isChefPick: true,
    desc: "Slow-roasted vertical spit chicken, pickled veggies, and house-whipped toum garlic sauce in rumali.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "wrap-2",
    name: "Crispy Paneer & Veggie Wrap",
    category: "wraps",
    price: 175,
    rating: 4.7,
    isVeg: true,
    tag: "Crispy Veg",
    desc: "Marinated cottage cheese fingers, crunchy slaw, capsicum, and chipotle mayo wrapped tight.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "wrap-3",
    name: "Malabar Parotta with Kurma",
    category: "breads",
    price: 160,
    rating: 4.8,
    isVeg: true,
    tag: "Flaky & Hot",
    desc: "Two ultra-flaky, layered Malabar parottas served with rich aromatic coconut-spiced vegetable kurma.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "wrap-4",
    name: "Burmese Chicken Egg Atho",
    category: "street",
    price: 195,
    rating: 4.8,
    isVeg: false,
    tag: "Street Legend",
    desc: "Tossed noodles with fried onions, cabbage, roasted garlic oil, shredded chicken, and boiled egg.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "wrap-5",
    name: "Steamed Himalayan Momos",
    category: "street",
    price: 150,
    rating: 4.8,
    isVeg: true,
    tag: "Spicy Dip",
    desc: "Delicate steamed dumplings stuffed with herbs, cabbage, and paneer, served with fire chutney.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "chk-1",
    name: "Smoky BBQ Chicken Wings",
    category: "chicken",
    price: 260,
    rating: 4.9,
    isVeg: false,
    tag: "Charred",
    desc: "Tender chicken wings glazed in hickory-smoked barbecue reduction and toasted sesame.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "chk-2",
    name: "Herb & Garlic Grilled Chicken",
    category: "chicken",
    price: 290,
    rating: 4.8,
    isVeg: false,
    tag: "High Protein",
    desc: "Juicy breast fillet marinated in rosemary, cracked black pepper, garlic butter, and grilled.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "chk-3",
    name: "Indo-Chinese Chilli Chicken",
    category: "chicken",
    price: 240,
    rating: 4.8,
    isVeg: false,
    tag: "Spicy Gravy",
    desc: "Crisp boneless chicken tossed with dark soy, spring onion bulbs, and spicy green chilies.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "rice-1",
    name: "Wok-Tossed Paneer Fried Rice",
    category: "rice",
    price: 220,
    rating: 4.7,
    isVeg: true,
    tag: "Wok Hei",
    desc: "Long grain basmati tossed with crisp golden paneer cubes, chopped scallions, and pepper.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "rice-2",
    name: "Classic Chicken Fried Rice",
    category: "rice",
    price: 250,
    rating: 4.9,
    isVeg: false,
    tag: "Popular",
    desc: "Shredded chicken and aromatic basmati rice wok-tossed over extreme flames with scallions.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "rice-3",
    name: "Double Egg Fried Rice",
    category: "rice",
    price: 195,
    rating: 4.6,
    isVeg: false,
    tag: "Protein Packed",
    desc: "Golden scrambled eggs wok-charred with fluffy rice, crushed garlic, and aromatic seasoning.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "des-1",
    name: "Belgian Chocolate Truffle Cake",
    category: "desserts",
    price: 210,
    rating: 4.9,
    isVeg: true,
    tag: "Rich Truffle",
    isChefPick: true,
    desc: "Layers of moist dark chocolate sponge covered in silky 70% pure cocoa truffle ganache.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "main-1",
    name: "Gourmet Truffle Smash Burger",
    category: "burgers",
    price: 280,
    rating: 4.9,
    isVeg: false,
    tag: "Signature",
    desc: "Double smashed chicken patties, melted aged cheddar, caramelized shallots, and brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "main-2",
    name: "Royal Dum Chicken Biryani",
    category: "biryani",
    price: 320,
    rating: 4.9,
    isVeg: false,
    tag: "Heritage",
    isChefPick: true,
    desc: "Slow-cooked handi dum biryani with marinated bone-in chicken, saffron milk, and fried onion.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
  }
];

// CATEGORIES
const categories = [
  { id: "all", label: "✨ All Dishes" },
  { id: "pureveg", label: "🌱 Pure Veg" },
  { id: "chicken", label: "🍗 Chicken Grills" },
  { id: "wraps", label: "🌯 Shawarma & Wraps" },
  { id: "rice", label: "🍚 Fried Rice" },
  { id: "street", label: "🥟 Atho & Momos" },
  { id: "beverages", label: "☕ Mojito & Coffee" },
  { id: "shakes", label: "🥤 Milkshakes" },
  { id: "desserts", label: "🍰 Cakes & Desserts" },
  { id: "burgers", label: "🍔 Burgers" },
  { id: "biryani", label: "🍛 Biryani" }
];

// STATE STORAGE
let activeCategory = "all";
let searchQuery = "";
let quickFilter = null; // 'under200' | 'topRated' | 'favorites'
let cart = JSON.parse(localStorage.getItem("tastora_cart") || "{}");
let favorites = JSON.parse(localStorage.getItem("tastora_favs") || "[]");
let orderHistory = JSON.parse(localStorage.getItem("tastora_history") || "[]");
let appliedCoupon = null;
let selectedInstructions = [];
let currentCustomizingItem = null;
let lastPlacedOrder = null;

// DOM REFS
const foodGrid = document.getElementById("foodGrid");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const currentCategoryHeading = document.getElementById("currentCategoryHeading");
const itemCountLabel = document.getElementById("itemCountLabel");
const favCountSpan = document.getElementById("favCountSpan");

const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartItemsList = document.getElementById("cartItemsList");
const subtotalVal = document.getElementById("subtotalVal");
const discountLine = document.getElementById("discountLine");
const discountVal = document.getElementById("discountVal");
const deliveryFeeVal = document.getElementById("deliveryFeeVal");
const cartTotalVal = document.getElementById("cartTotalVal");
const drawerItemSummary = document.getElementById("drawerItemSummary");
const freeDeliveryBar = document.getElementById("freeDeliveryBar");
const freeDeliveryMsg = document.getElementById("freeDeliveryMsg");
const upsellContainer = document.getElementById("upsellContainer");
const upsellCard = document.getElementById("upsellCard");

const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoFeedback = document.getElementById("promoFeedback");

const mobileCartBar = document.getElementById("mobileCartBar");
const mobileItemCount = document.getElementById("mobileItemCount");
const mobileTotalPrice = document.getElementById("mobileTotalPrice");
const mobileViewCartBtn = document.getElementById("mobileViewCartBtn");

const checkoutTriggerBtn = document.getElementById("checkoutTriggerBtn");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
const confirmCashBtn = document.getElementById("confirmCashBtn");
const confirmCardBtn = document.getElementById("confirmCardBtn");
const onlineGatewayLink = document.getElementById("onlineGatewayLink");

const successModal = document.getElementById("successModal");
const successBackdrop = document.getElementById("successBackdrop");
const successMethodText = document.getElementById("successMethodText");
const orderTokenNum = document.getElementById("orderTokenNum");
const startTrackingBtn = document.getElementById("startTrackingBtn");
const viewReceiptBtn = document.getElementById("viewReceiptBtn");

const trackerModal = document.getElementById("trackerModal");
const trackerBackdrop = document.getElementById("trackerBackdrop");
const closeTrackerBtn = document.getElementById("closeTrackerBtn");
const dismissTrackerBtn = document.getElementById("dismissTrackerBtn");
const trackOrderId = document.getElementById("trackOrderId");
const countdownClock = document.getElementById("countdownClock");

const customModal = document.getElementById("customModal");
const customBackdrop = document.getElementById("customBackdrop");
const closeCustomBtn = document.getElementById("closeCustomBtn");
const customItemName = document.getElementById("customItemName");
const customItemPrice = document.getElementById("customItemPrice");
const customTotalSpan = document.getElementById("customTotalSpan");
const confirmCustomAddBtn = document.getElementById("confirmCustomAddBtn");
const addonCheese = document.getElementById("addonCheese");
const addonDip = document.getElementById("addonDip");

const ordersModal = document.getElementById("ordersModal");
const ordersBackdrop = document.getElementById("ordersBackdrop");
const openOrdersBtn = document.getElementById("openOrdersBtn");
const closeOrdersBtn = document.getElementById("closeOrdersBtn");
const pastOrdersList = document.getElementById("pastOrdersList");

const receiptModal = document.getElementById("receiptModal");
const receiptBackdrop = document.getElementById("receiptBackdrop");
const closeReceiptBtn = document.getElementById("closeReceiptBtn");

const pinataCanvas = document.getElementById("pinataCanvas");

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderMenu();
  updateCartUI();
  updateFavoritesCount();
  setupEventListeners();
  initCanvas();
  renderUpsell();
});

// CATEGORY TABS
function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      cat => `
      <button class="cat-pill ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `
    )
    .join("");

  document.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      quickFilter = null;
      document.querySelectorAll(".quick-chip").forEach(c => c.classList.remove("active"));
      document.querySelectorAll(".cat-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu();
    });
  });
}

// MENU RENDERING
function renderMenu() {
  const filtered = foodData.filter(item => {
    let matchesCat = true;
    if (activeCategory === "pureveg") {
      matchesCat = item.isVeg === true;
    } else if (activeCategory !== "all") {
      matchesCat = item.category === activeCategory;
    }

    if (quickFilter === "under200" && item.price >= 200) return false;
    if (quickFilter === "topRated" && item.rating < 4.8) return false;
    if (quickFilter === "favorites" && !favorites.includes(item.id)) return false;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  const matchedCat = categories.find(c => c.id === activeCategory);
  currentCategoryHeading.textContent = quickFilter
    ? `Filtered Dishes (${quickFilter})`
    : matchedCat
    ? matchedCat.label.replace(/^[^\s]+\s/, '')
    : "Dishes";

  itemCountLabel.textContent = `Showing ${filtered.length} freshly prepared items`;

  if (filtered.length === 0) {
    foodGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <h3>No dishes match your craving</h3>
        <p style="margin-top: 8px;">Try clearing filters or search to browse our full menu</p>
      </div>
    `;
    return;
  }

  foodGrid.innerHTML = filtered
    .map(item => {
      const isFav = favorites.includes(item.id);
      const inCartQty = cart[item.id] ? (typeof cart[item.id] === 'number' ? cart[item.id] : cart[item.id].qty) : 0;

      return `
      <article class="food-card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="card-top-badges">
            <span class="diet-pill ${item.isVeg ? 'diet-veg' : 'diet-nonveg'}">
              ${item.isVeg ? '● VEG' : '▲ NON-VEG'}
            </span>
            ${item.isChefPick ? `<span class="chef-badge">CHEF PICK</span>` : ''}
          </div>

          <button class="card-fav-btn" onclick="toggleFavorite('${item.id}')" title="Save to Favorites">
            ${isFav ? '❤️' : '🤍'}
          </button>

          <span class="rating-badge">★ ${item.rating}</span>
        </div>

        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>

          <div class="card-footer">
            <span class="price-tag">₹${item.price}</span>
            <div class="card-cta-group">
              <button class="customize-trigger-btn" onclick="openCustomizer('${item.id}')">Custom</button>
              <div id="btn-wrap-${item.id}">
                ${
                  inCartQty > 0
                    ? `
                    <div class="stepper">
                      <button onclick="decrementItem('${item.id}')">−</button>
                      <span>${inCartQty}</span>
                      <button onclick="incrementItem('${item.id}')">+</button>
                    </div>
                  `
                    : `
                    <button class="add-btn" onclick="incrementItem('${item.id}')">ADD +</button>
                  `
                }
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

// FAVORITES
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("tastora_favs", JSON.stringify(favorites));
  updateFavoritesCount();
  renderMenu();
}

function updateFavoritesCount() {
  favCountSpan.textContent = favorites.length;
}

// CART MANAGEMENT
function incrementItem(id) {
  if (!cart[id]) {
    cart[id] = { qty: 1, spice: "Standard", addons: [], basePrice: getItemPrice(id) };
  } else if (typeof cart[id] === "number") {
    cart[id] = { qty: cart[id] + 1, spice: "Standard", addons: [], basePrice: getItemPrice(id) };
  } else {
    cart[id].qty += 1;
  }
  saveAndSync();
}

function decrementItem(id) {
  if (cart[id]) {
    const currentQty = typeof cart[id] === "number" ? cart[id] : cart[id].qty;
    if (currentQty <= 1) {
      delete cart[id];
    } else if (typeof cart[id] === "number") {
      cart[id] -= 1;
    } else {
      cart[id].qty -= 1;
    }
    saveAndSync();
  }
}

function getItemPrice(id) {
  const item = foodData.find(f => f.id === id);
  return item ? item.price : 0;
}

function saveAndSync() {
  localStorage.setItem("tastora_cart", JSON.stringify(cart));
  updateCartUI();
  renderMenu();
  renderUpsell();
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalCount = 0;

  Object.entries(cart).forEach(([id, entry]) => {
    const qty = typeof entry === "number" ? entry : entry.qty;
    const item = foodData.find(f => f.id === id);
    if (item) {
      let unitPrice = item.price;
      if (entry.addons && entry.addons.length > 0) {
        entry.addons.forEach(ad => { unitPrice += ad.price; });
      }
      subtotal += unitPrice * qty;
      totalCount += qty;
    }
  });

  // Calculate discounts
  let discount = 0;
  let deliveryFee = subtotal >= 500 || subtotal === 0 ? 0 : 40;

  if (appliedCoupon === "TASTORA50" && subtotal >= 250) {
    discount = 50;
  } else if (appliedCoupon === "FEAST100" && subtotal >= 600) {
    discount = 100;
  } else if (appliedCoupon === "FREEDEL") {
    deliveryFee = 0;
  }

  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);
  return { subtotal, discount, deliveryFee, grandTotal, totalCount };
}

function updateCartUI() {
  const { subtotal, discount, deliveryFee, grandTotal, totalCount } = calculateCartTotals();

  cartCountBadge.textContent = totalCount;
  drawerItemSummary.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'} selected`;
  subtotalVal.textContent = `₹${subtotal}`;

  if (discount > 0) {
    discountLine.style.display = "flex";
    discountVal.textContent = `-₹${discount}`;
  } else {
    discountLine.style.display = "none";
  }

  deliveryFeeVal.textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
  cartTotalVal.textContent = `₹${grandTotal}`;

  document.querySelectorAll(".pay-amount-label").forEach(el => {
    el.textContent = `₹${grandTotal}`;
  });

  // Free delivery progress
  const freeThreshold = 500;
  if (subtotal >= freeThreshold || appliedCoupon === "FREEDEL") {
    freeDeliveryBar.style.width = "100%";
    freeDeliveryMsg.textContent = "🎉 Congratulations! Free Delivery Unlocked";
  } else {
    const pct = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    freeDeliveryBar.style.width = `${pct}%`;
    freeDeliveryMsg.textContent = `Add ₹${freeThreshold - subtotal} more for FREE delivery`;
  }

  // Mobile Sticky Bar
  if (totalCount > 0) {
    mobileCartBar.classList.add("visible");
    mobileItemCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    mobileTotalPrice.textContent = `₹${grandTotal}`;
  } else {
    mobileCartBar.classList.remove("visible");
  }

  // Render items in drawer
  if (totalCount === 0) {
    cartItemsList.innerHTML = `<div class="empty-state">Your bag is empty.<br>Add some delicious food to get started!</div>`;
    return;
  }

  cartItemsList.innerHTML = Object.entries(cart)
    .map(([id, entry]) => {
      const item = foodData.find(f => f.id === id);
      if (!item) return "";
      const qty = typeof entry === "number" ? entry : entry.qty;
      const spiceTag = entry.spice && entry.spice !== "Standard" ? ` • ${entry.spice}` : "";
      const addonsTag = entry.addons && entry.addons.length > 0 ? ` • +${entry.addons.map(a => a.name).join(", ")}` : "";

      let singlePrice = item.price;
      if (entry.addons) entry.addons.forEach(a => { singlePrice += a.price; });

      return `
      <div class="cart-item-row">
        <div class="item-info">
          <h4>${item.name}</h4>
          <small>${spiceTag}${addonsTag}</small>
          <span>₹${singlePrice * qty}</span>
        </div>
        <div class="stepper">
          <button onclick="decrementItem('${item.id}')">−</button>
          <span>${qty}</span>
          <button onclick="incrementItem('${item.id}')">+</button>
        </div>
      </div>
    `;
    })
    .join("");
}

// FREQUENTLY PAIRED UPSELL
function renderUpsell() {
  const upsellItem = foodData.find(f => f.id === "bev-1"); // Virgin Mojito
  if (cart["bev-1"]) {
    upsellContainer.style.display = "none";
  } else {
    upsellContainer.style.display = "block";
    upsellCard.innerHTML = `
      <div class="upsell-card-info">
        <h5>${upsellItem.name}</h5>
        <span>₹${upsellItem.price}</span>
      </div>
      <button class="upsell-add-btn" onclick="incrementItem('${upsellItem.id}')">+ Add</button>
    `;
  }
}

// CUSTOMIZATION MODAL
let chosenSpice = "Regular Mild";

function openCustomizer(id) {
  const item = foodData.find(f => f.id === id);
  if (!item) return;
  currentCustomizingItem = item;
  chosenSpice = "Regular Mild";

  customItemName.textContent = item.name;
  customItemPrice.textContent = `Base: ₹${item.price}`;
  addonCheese.checked = false;
  addonDip.checked = false;

  document.querySelectorAll(".opt-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.spice === chosenSpice);
  });

  calcCustomTotal();
  customModal.classList.add("open");
  customBackdrop.classList.add("open");
}

function calcCustomTotal() {
  if (!currentCustomizingItem) return;
  let total = currentCustomizingItem.price;
  if (addonCheese.checked) total += parseInt(addonCheese.value);
  if (addonDip.checked) total += parseInt(addonDip.value);
  customTotalSpan.textContent = total;
}

[addonCheese, addonDip].forEach(ch => ch.addEventListener("change", calcCustomTotal));

document.querySelectorAll(".opt-pill").forEach(p => {
  p.addEventListener("click", () => {
    document.querySelectorAll(".opt-pill").forEach(b => b.classList.remove("active"));
    p.classList.add("active");
    chosenSpice = p.dataset.spice;
  });
});

confirmCustomAddBtn.addEventListener("click", () => {
  if (!currentCustomizingItem) return;
  const addons = [];
  if (addonCheese.checked) addons.push({ name: "Cheddar", price: 35 });
  if (addonDip.checked) addons.push({ name: "Garlic Dip", price: 25 });

  cart[currentCustomizingItem.id] = {
    qty: (cart[currentCustomizingItem.id]?.qty || 0) + 1,
    spice: chosenSpice,
    addons: addons,
    basePrice: currentCustomizingItem.price
  };

  customModal.classList.remove("open");
  customBackdrop.classList.remove("open");
  saveAndSync();
});

closeCustomBtn.addEventListener("click", () => {
  customModal.classList.remove("open");
  customBackdrop.classList.remove("open");
});

// EVENT LISTENERS
function setupEventListeners() {
  // Search
  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value.trim();
    renderMenu();
  });

  // Quick Chips
  document.getElementById("filterUnder200").addEventListener("click", function () {
    toggleQuickFilter(this, "under200");
  });
  document.getElementById("filterTopRated").addEventListener("click", function () {
    toggleQuickFilter(this, "topRated");
  });
  document.getElementById("filterFavorites").addEventListener("click", function () {
    toggleQuickFilter(this, "favorites");
  });

  function toggleQuickFilter(btn, filterName) {
    if (quickFilter === filterName) {
      quickFilter = null;
      btn.classList.remove("active");
    } else {
      document.querySelectorAll(".quick-chip").forEach(c => c.classList.remove("active"));
      quickFilter = filterName;
      btn.classList.add("active");
    }
    renderMenu();
  }

  // Drawer
  const openDrawer = () => {
    cartDrawer.classList.add("open");
    cartBackdrop.classList.add("open");
  };
  const closeDrawer = () => {
    cartDrawer.classList.remove("open");
    cartBackdrop.classList.remove("open");
  };

  openCartBtn.addEventListener("click", openDrawer);
  mobileViewCartBtn.addEventListener("click", openDrawer);
  closeCartBtn.addEventListener("click", closeDrawer);
  cartBackdrop.addEventListener("click", closeDrawer);

  // Delivery Notes / Instructions
  document.querySelectorAll(".inst-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
      const note = chip.dataset.note;
      if (selectedInstructions.includes(note)) {
        selectedInstructions = selectedInstructions.filter(n => n !== note);
      } else {
        selectedInstructions.push(note);
      }
    });
  });

  // Coupon Engine
  applyPromoBtn.addEventListener("click", () => {
    const code = promoInput.value.trim().toUpperCase();
    if (code === "TASTORA50") {
      appliedCoupon = code;
      promoFeedback.style.color = "#10b981";
      promoFeedback.textContent = "🎉 TASTORA50 applied! ₹50 off";
    } else if (code === "FEAST100") {
      appliedCoupon = code;
      promoFeedback.style.color = "#10b981";
      promoFeedback.textContent = "🎉 FEAST100 applied! ₹100 off";
    } else if (code === "FREEDEL") {
      appliedCoupon = code;
      promoFeedback.style.color = "#10b981";
      promoFeedback.textContent = "🎉 FREEDEL applied! Free Delivery active";
    } else {
      appliedCoupon = null;
      promoFeedback.style.color = "#ef4444";
      promoFeedback.textContent = "Invalid coupon code.";
    }
    updateCartUI();
  });

  // Checkout Modal
  checkoutTriggerBtn.addEventListener("click", () => {
    const { totalCount } = calculateCartTotals();
    if (totalCount === 0) {
      alert("Please add items to your cart before proceeding!");
      return;
    }
    closeDrawer();
    checkoutModal.classList.add("open");
    checkoutBackdrop.classList.add("open");
  });

  const closeCheckout = () => {
    checkoutModal.classList.remove("open");
    checkoutBackdrop.classList.remove("open");
  };
  closeCheckoutBtn.addEventListener("click", closeCheckout);
  checkoutBackdrop.addEventListener("click", closeCheckout);

  // Slot selector
  const slotInstant = document.getElementById("slotInstant");
  const slotSchedule = document.getElementById("slotSchedule");
  slotInstant.addEventListener("click", () => {
    slotInstant.classList.add("active");
    slotSchedule.classList.remove("active");
  });
  slotSchedule.addEventListener("click", () => {
    slotSchedule.classList.add("active");
    slotInstant.classList.remove("active");
  });

  // Payment Tabs
  const payTabs = document.querySelectorAll(".pay-tab");
  payTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetMethod = tab.dataset.method;
      payTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      document.querySelectorAll(".pay-panel").forEach(p => p.classList.remove("active"));
      const panel = document.getElementById(`panel-${targetMethod}`);
      if (panel) panel.classList.add("active");
    });
  });

  // Confirmations
  confirmCashBtn.addEventListener("click", () => {
    closeCheckout();
    triggerCelebration("Cash on Delivery");
  });

  confirmCardBtn.addEventListener("click", () => {
    closeCheckout();
    triggerCelebration("Debit / Credit Card");
  });

  onlineGatewayLink.addEventListener("click", () => {
    setTimeout(() => {
      closeCheckout();
    }, 400);
  });

  // Order Tracker Open
  startTrackingBtn.addEventListener("click", () => {
    successModal.classList.remove("open");
    successBackdrop.classList.remove("open");
    openLiveTracker();
  });

  // Receipt Modal
  viewReceiptBtn.addEventListener("click", () => {
    successModal.classList.remove("open");
    successBackdrop.classList.remove("open");
    openReceiptModal();
  });

  closeReceiptBtn.addEventListener("click", () => {
    receiptModal.classList.remove("open");
    receiptBackdrop.classList.remove("open");
  });

  // Close Live Tracker
  closeTrackerBtn.addEventListener("click", () => {
    trackerModal.classList.remove("open");
    trackerBackdrop.classList.remove("open");
  });
  dismissTrackerBtn.addEventListener("click", () => {
    trackerModal.classList.remove("open");
    trackerBackdrop.classList.remove("open");
  });

  // Order History Modal
  openOrdersBtn.addEventListener("click", () => {
    renderPastOrders();
    ordersModal.classList.add("open");
    ordersBackdrop.classList.add("open");
  });
  closeOrdersBtn.addEventListener("click", () => {
    ordersModal.classList.remove("open");
    ordersBackdrop.classList.remove("open");
  });
}

// SUCCESS CELEBRATION
function triggerCelebration(paymentMethod) {
  const token = Math.floor(1000 + Math.random() * 9000);
  orderTokenNum.textContent = token;
  successMethodText.textContent = `Paid via ${paymentMethod}. Master chef has fired up the wok!`;

  // Store order history
  const { grandTotal, totalCount } = calculateCartTotals();
  lastPlacedOrder = {
    id: token,
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    items: JSON.parse(JSON.stringify(cart)),
    total: grandTotal,
    count: totalCount,
    method: paymentMethod
  };
  orderHistory.unshift(lastPlacedOrder);
  localStorage.setItem("tastora_history", JSON.stringify(orderHistory));

  successModal.classList.add("open");
  successBackdrop.classList.add("open");

  // Reset cart
  cart = {};
  saveAndSync();

  // Piñata blast + party chime sound
  firePinataBlast();
  playPartyPopSound();
}

// LIVE ORDER TRACKER
let countdownInterval = null;

function openLiveTracker() {
  if (lastPlacedOrder) {
    trackOrderId.textContent = lastPlacedOrder.id;
  }
  trackerModal.classList.add("open");
  trackerBackdrop.classList.add("open");

  // 28 min countdown
  let remainingSeconds = 28 * 60 + 45;
  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      countdownClock.textContent = "ARRIVED!";
      return;
    }
    remainingSeconds--;
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    countdownClock.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

// RECEIPT GENERATION
function openReceiptModal() {
  if (!lastPlacedOrder) return;
  document.getElementById("receiptDate").textContent = `Date: ${lastPlacedOrder.date}`;
  document.getElementById("receiptOrderNum").textContent = `ORDER #TAS-${lastPlacedOrder.id}`;

  const itemsContainer = document.getElementById("receiptItems");
  itemsContainer.innerHTML = Object.entries(lastPlacedOrder.items)
    .map(([id, entry]) => {
      const item = foodData.find(f => f.id === id);
      if (!item) return "";
      const qty = typeof entry === "number" ? entry : entry.qty;
      return `
      <div class="receipt-item-row">
        <span>${qty}x ${item.name}</span>
        <span>₹${item.price * qty}</span>
      </div>
    `;
    })
    .join("");

  document.getElementById("receiptTotals").innerHTML = `
    <div class="receipt-item-row" style="font-weight: 800; margin-top: 6px;">
      <span>TOTAL PAID:</span>
      <span>₹${lastPlacedOrder.total}</span>
    </div>
    <div style="font-size: 0.75rem; color: #6b7280; margin-top: 4px;">Method: ${lastPlacedOrder.method}</div>
  `;

  receiptModal.classList.add("open");
  receiptBackdrop.classList.add("open");
}

// PAST ORDERS & REORDER
function renderPastOrders() {
  if (orderHistory.length === 0) {
    pastOrdersList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No past orders found.</p>`;
    return;
  }

  pastOrdersList.innerHTML = orderHistory
    .map(
      (order, idx) => `
      <div class="past-order-card">
        <div>
          <h4 style="font-size: 0.95rem; color: #fff;">Order #TAS-${order.id}</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">${order.date} • ${order.count} items</p>
          <span style="font-size: 0.85rem; color: var(--primary); font-weight: 700;">₹${order.total}</span>
        </div>
        <button class="reorder-btn" onclick="reorderOldOrder(${idx})">Reorder ↺</button>
      </div>
    `
    )
    .join("");
}

function reorderOldOrder(index) {
  const chosen = orderHistory[index];
  if (!chosen) return;
  cart = JSON.parse(JSON.stringify(chosen.items));
  saveAndSync();
  ordersModal.classList.remove("open");
  ordersBackdrop.classList.remove("open");
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("open");
}

// WEB AUDIO API SYNTHESIZED PARTY POP SOUND
function playPartyPopSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // 1. Pop Burst
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(450, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.8, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);

    // 2. Sparkle Chime
    setTimeout(() => {
      const chime = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chime.type = "triangle";
      chime.frequency.setValueAtTime(880, ctx.currentTime); // A5
      chime.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.3);

      chimeGain.gain.setValueAtTime(0.4, ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      chime.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chime.start();
      chime.stop(ctx.currentTime + 0.35);
    }, 100);
  } catch (e) {
    // AudioContext blocked by browser policy
  }
}

// PIÑATA PARTICLE EXPLOSION
let canvasCtx;
let particles = [];
let animationId = null;

function initCanvas() {
  canvasCtx = pinataCanvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
  pinataCanvas.width = window.innerWidth;
  pinataCanvas.height = window.innerHeight;
}

function firePinataBlast() {
  resizeCanvas();
  particles = [];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const colors = ["#f59e0b", "#fbbf24", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6", "#ef4444", "#ffffff"];

  for (let i = 0; i < 180; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 15 + 6;
    particles.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 5,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.012 + 0.007,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 14,
      gravity: 0.28
    });
  }

  if (animationId) cancelAnimationFrame(animationId);
  renderBlast();
}

function renderBlast() {
  canvasCtx.clearRect(0, 0, pinataCanvas.width, pinataCanvas.height);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.vx *= 0.98;
    p.alpha -= p.decay;
    p.rotation += p.rotSpeed;

    if (p.alpha > 0) {
      canvasCtx.save();
      canvasCtx.translate(p.x, p.y);
      canvasCtx.rotate((p.rotation * Math.PI) / 180);
      canvasCtx.globalAlpha = Math.max(0, p.alpha);
      canvasCtx.fillStyle = p.color;
      canvasCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      canvasCtx.restore();
    }
  }

  particles = particles.filter(p => p.alpha > 0 && p.y < pinataCanvas.height + 50);

  if (particles.length > 0) {
    animationId = requestAnimationFrame(renderBlast);
  } else {
    canvasCtx.clearRect(0, 0, pinataCanvas.width, pinataCanvas.height);
  }
}
