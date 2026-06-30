// --- PRODUCTS DATABASE ---
const products = [
  {
    id: 1,
    name: "Sky Blue Mysore Crepe Saree",
    category: "Crepe",
    price: 17954.00,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9tECuKcjThJiojLFgcLiXuBQjgwnzyJzCGTh6mMHle3hXTv8S5WrGjuBxlaTO6-lK_eJg8c2vCqvz4Qj9pd1cvBupMKAKcpsKnPoxFbjO2LeMY9eaDxtt",
    description: "An exquisite sky blue Mysore crepe saree adorned with pure zari borders. Famous for its butter-soft feel, royal sheen, and lightweight drape that falls elegantly for special festive celebrations.",
    weave: "Mysore Crepe Jacquard",
    badge: "Best Seller",
    badgeType: "accent"
  },
  {
    id: 2,
    name: "Grey Tussar Silk Saree",
    category: "Silk",
    price: 12070.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEuQUoMVSFBYOJWvj-3dlYoB9BtR03TguZh5t7TK0BQ&s=10",
    description: "Crafted in Bhagalpur, this handloom grey Tussar silk saree highlights natural textures and a rich golden-bronze border. Perfect for modern minimal styles with an ethnic touch.",
    weave: "Handloom Tussar Gicha",
    badge: "Artisanal",
    badgeType: "primary"
  },
  {
    id: 3,
    name: "Maroon Tussar Silk Saree",
    category: "Silk",
    price: 8531.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8oys-CR-HnONsJUvgxyPhzgyf2ClROHW1RArQd8LaA&s=10",
    description: "Draped in deep crimson warmth, this maroon Tussar silk saree features subtle temple motifs along the border. Lightweight and comfortable for day-long festive wear.",
    weave: "Handwoven Tussar",
    badge: "Classic",
    badgeType: "primary"
  },
  {
    id: 4,
    name: "Dark Pink Soft Silk Saree",
    category: "Silk",
    price: 11062.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXWo_kEfII6_pkloXXWE-8Gm8A2Pg6I10HidiO7H5MQ&s=10",
    description: "A gorgeous dark magenta-pink soft silk saree with gold brocade work. Made of blending mulberry silk fibers for an incredibly smooth texture and beautiful fall.",
    weave: "Kanchipuram Soft Brocade",
    badge: "New Season",
    badgeType: "accent"
  },
  {
    id: 5,
    name: "Black Satin Chiffon Silk Saree",
    category: "Chiffon",
    price: 9499.00,
    image: "https://trendoye.com/cdn/shop/files/black-satin-chiffon-silk-saree-with-stylish-blouse-piece-trendoye-DJS-HFT-SLAS5-128106.jpg?v=1764852715&width=2048",
    description: "Sleek, fluid, and glamorous. This black satin chiffon silk saree has a delicate shimmer that captures light beautifully. Perfect for evening cocktail parties and formal events.",
    weave: "Satin Border Chiffon",
    badge: "Modern Accent",
    badgeType: "primary"
  },
  {
    id: 6,
    name: "Designer Silk Saree",
    category: "Designer",
    price: 7850.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCGIwVG8Sk-R5hQr8Bqsxao-nztSTOM5NpeJ9lW9ULg&s=10",
    description: "A contemporary designer silk saree featuring abstract prints and contrast borders. Designed for modern fashion enthusiasts who enjoy styling sarees in creative ways.",
    weave: "Contemporary Print Weave",
    badge: "Boutique",
    badgeType: "primary"
  },
  {
    id: 7,
    name: "Traditional Party Wear Saree",
    category: "Designer",
    price: 10299.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZxeactdMvf4acu6Z9K095LcltJTrNQgS9Z-cEqDPVA&s=10",
    description: "An ornate festive saree featuring gold thread embroidery and intricate borders. An ideal drape for weddings, cultural festivals, and housewarming ceremonies.",
    weave: "Zari Embroidered Georgette",
    badge: "Heritage",
    badgeType: "accent"
  },
  {
    id: 8,
    name: "Elegant Festive Saree",
    category: "Designer",
    price: 8999.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmSsS2fE_5rhQaD5twO4_eSx8X5jeMzcxEpG-Ih8qkg&s=10",
    description: "Bright yellow and pink festival saree featuring floral motifs and matching lace borders. Exudes cheerfulness and positive energy for morning rituals.",
    weave: "Lace Detailed Organza",
    badge: "Limited Edition",
    badgeType: "accent"
  }
];

// --- APP STATE ---
let cart = [];
let wishlist = [];
let currentCategory = "all";
let currentFabricFilter = "all";
let currentPriceFilter = "all";
let currentSort = "featured";

// Patron Auth State
let patronState = {
  isLoggedIn: false,
  name: "",
  mobile: "",
  tier: "Silver Patron",
  points: 0,
  discountPercent: 0,
  cardNumber: ""
};
let currentOTP = "";
let otpTimerInterval = null;
let otpTimerSeconds = 30;
let tempUserData = { name: "", mobile: "" };

// --- DOM ELEMENTS ---
const productGrid = document.getElementById("productGrid");
const categoryChips = document.getElementById("categoryChips");
const materialFilter = document.getElementById("materialFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOrder = document.getElementById("sortOrder");

// Cart elements
const cartDrawer = document.getElementById("cartDrawer");
const cartOpenBtn = document.getElementById("cartOpenBtn");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartDrawerContent = document.getElementById("cartDrawerContent");
const cartBadge = document.getElementById("cartBadge");
const cartDrawerFooter = document.getElementById("cartDrawerFooter");

// Wishlist elements
const wishlistDrawer = document.getElementById("wishlistDrawer");
const wishlistOpenBtn = document.getElementById("wishlistOpenBtn");
const wishlistCloseBtn = document.getElementById("wishlistCloseBtn");
const wishlistDrawerContent = document.getElementById("wishlistDrawerContent");
const wishlistBadge = document.getElementById("wishlistBadge");

// Patron elements
const patronDrawer = document.getElementById("patronDrawer");
const profileOpenBtn = document.getElementById("profileOpenBtn");
const patronCloseBtn = document.getElementById("patronCloseBtn");
const patronDrawerContent = document.getElementById("patronDrawerContent");
const patronDrawerTitle = document.getElementById("patronDrawerTitle");
const profileIcon = document.getElementById("profileIcon");
const profileMonogram = document.getElementById("profileMonogram");

// General overlays
const drawerOverlay = document.getElementById("drawerOverlay");

// Search elements
const searchOverlay = document.getElementById("searchOverlay");
const searchOpenBtn = document.getElementById("searchOpenBtn");
const searchCloseBtn = document.getElementById("searchCloseBtn");
const searchInput = document.getElementById("searchInput");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchResultsTitle = document.getElementById("searchResultsTitle");

// Quick View Modal elements
const quickViewModal = document.getElementById("quickViewModal");
const quickViewCloseBtn = document.getElementById("quickViewCloseBtn");
const modalProductImage = document.getElementById("modalProductImage");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductName = document.getElementById("modalProductName");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalProductWeave = document.getElementById("modalProductWeave");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
const modalAddToWishlistBtn = document.getElementById("modalAddToWishlistBtn");
let activeQuickViewId = null;

// Other triggers
const toastContainer = document.getElementById("toastContainer");
const mainNavbar = document.getElementById("mainNavbar");
const faqItems = document.querySelectorAll(".faq-item");
const newsletterForm = document.getElementById("newsletterForm");

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  updateHeaderScroll();
  renderPatronDrawer(); // Initialize Patron Portal in its default guest state
});

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {
  // Navbar scroll styling
  window.addEventListener("scroll", updateHeaderScroll);
  window.addEventListener("scroll", updateActiveNavLink);

  // Cart Drawer triggers
  cartOpenBtn.addEventListener("click", () => openDrawer(cartDrawer));
  cartCloseBtn.addEventListener("click", () => closeDrawer(cartDrawer));

  // Wishlist Drawer triggers
  wishlistOpenBtn.addEventListener("click", () => openDrawer(wishlistDrawer));
  wishlistCloseBtn.addEventListener("click", () => closeDrawer(wishlistDrawer));

  // Patron Drawer triggers
  profileOpenBtn.addEventListener("click", () => openDrawer(patronDrawer));
  patronCloseBtn.addEventListener("click", () => closeDrawer(patronDrawer));

  // Close drawers via overlay
  drawerOverlay.addEventListener("click", closeAllDrawers);

  // Search overlay triggers
  searchOpenBtn.addEventListener("click", openSearch);
  searchCloseBtn.addEventListener("click", closeSearch);
  searchInput.addEventListener("input", handleSearchInput);

  // Quick View triggers
  quickViewCloseBtn.addEventListener("click", closeQuickView);
  quickViewModal.addEventListener("click", (e) => {
    if (e.target === quickViewModal) closeQuickView();
  });

  // Modal actions
  modalAddToCartBtn.addEventListener("click", () => {
    if (activeQuickViewId) {
      addToCart(activeQuickViewId);
      closeQuickView();
    }
  });
  modalAddToWishlistBtn.addEventListener("click", () => {
    if (activeQuickViewId) {
      toggleWishlist(activeQuickViewId);
      // Toggle local style for quick view button
      modalAddToWishlistBtn.classList.toggle("active");
      const heartIcon = modalAddToWishlistBtn.querySelector("i");
      heartIcon.classList.toggle("fa-solid");
      heartIcon.classList.toggle("fa-regular");
    }
  });

  // FAQ Accordion
  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      // Toggle current item
      const isActive = item.classList.contains("active");
      // Close all items
      faqItems.forEach((f) => f.classList.remove("active"));
      // Open current if not active previously
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Newsletter Submit
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input");
      showToast(`Thank you for subscribing, ${emailInput.value}!`);
      emailInput.value = "";
    });
  }

  // Filter chips (Category bar)
  categoryChips.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-chip")) {
      // Toggle chip active class
      document.querySelectorAll(".category-chip").forEach((chip) => {
        chip.classList.remove("active");
      });
      e.target.classList.add("active");

      // Update state and filters
      currentCategory = e.target.dataset.category;
      // Sync fabric filter dropdown
      materialFilter.value = currentCategory;
      currentFabricFilter = currentCategory;

      renderProducts();
    }
  });

  // Fabric dropdown filter
  materialFilter.addEventListener("change", (e) => {
    currentFabricFilter = e.target.value;
    currentCategory = e.target.value;
    // Sync category chips in UI
    document.querySelectorAll(".category-chip").forEach((chip) => {
      if (chip.dataset.category === e.target.value) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });
    renderProducts();
  });

  // Price dropdown filter
  priceFilter.addEventListener("change", (e) => {
    currentPriceFilter = e.target.value;
    renderProducts();
  });

  // Sort dropdown
  sortOrder.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}

// --- DYNAMIC RENDERING ---

// Render product grid
function renderProducts() {
  // Clear grid
  productGrid.innerHTML = "";

  // Filter products
  let filtered = [...products];

  // Fabric/Category Filter
  if (currentCategory !== "all") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Price Filter
  if (currentPriceFilter === "under10000") {
    filtered = filtered.filter(p => p.price < 10000);
  } else if (currentPriceFilter === "above10000") {
    filtered = filtered.filter(p => p.price >= 10000);
  }

  // Sort
  if (currentSort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Render cards
  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; padding: 60px 0;">
        <i class="fa-solid fa-shirt" style="font-size: 40px; margin-bottom:12px;"></i>
        <p>No sarees match your selected criteria. Try resetting filters.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((product) => {
    const isWishlisted = wishlist.includes(product.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="image-box">
        <span class="badge-tag ${product.badgeType}">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <div class="image-overlay-actions">
          <button class="overlay-btn quick-view-trigger" data-id="${product.id}" title="Quick View">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button class="overlay-btn direct-add-cart" data-id="${product.id}" title="Add to Cart">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category === 'Silk' ? 'Pure Silk' : product.category + ' Silk'}</span>
        <a href="#" class="product-name quick-view-trigger" data-id="${product.id}">${product.name}</a>
        <div class="price-row">
          <p class="price">&#8377;${product.price.toLocaleString("en-IN")}</p>
          <button class="cart-btn direct-add-cart" data-id="${product.id}">
            <i class="fa-solid fa-cart-shopping"></i> Add
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // Attach card event listeners dynamically
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      toggleWishlist(id);
    });
  });

  document.querySelectorAll(".direct-add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });

  document.querySelectorAll(".quick-view-trigger").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt(el.dataset.id);
      openQuickView(id);
    });
  });
}

// --- STATE MANAGEMENT LOGIC ---

// Add to Cart
function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);
  const product = products.find(p => p.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  showToast(`${product.name} added to cart!`);
  updateCartUI();
  animateBadge("cartBadge");
}

// Remove from Cart
function removeFromCart(productId) {
  const product = products.find(p => p.id === productId);
  cart = cart.filter(item => item.id !== productId);
  showToast(`${product.name} removed from cart.`);
  updateCartUI();
}

// Update Cart Quantity
function updateCartQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

// Toggle Wishlist
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  const index = wishlist.indexOf(productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${product.name} from wishlist.`);
  } else {
    wishlist.push(productId);
    showToast(`Saved ${product.name} to wishlist!`);
    animateBadge("wishlistBadge");
  }

  updateWishlistUI();
  renderProducts(); // Refresh heart icon state on main grid
}

// --- DRAWER & SCREEN CONTROL ---

function openDrawer(drawerElement) {
  closeAllDrawers();
  drawerElement.classList.add("active");
  drawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Lock page scroll
}

function closeDrawer(drawerElement) {
  drawerElement.classList.remove("active");
  drawerOverlay.classList.remove("active");
  document.body.style.overflow = ""; // Restore scroll
}

function closeAllDrawers() {
  closeDrawer(cartDrawer);
  closeDrawer(wishlistDrawer);
  closeDrawer(patronDrawer);
}

// Sticky header control
function updateHeaderScroll() {
  if (window.scrollY > 40) {
    mainNavbar.classList.add("scrolled");
  } else {
    mainNavbar.classList.remove("scrolled");
  }
}

// Highlight active navbar link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section, .main-container");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  let currentActiveId = "hero"; // default fallback

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - 120) {
      currentActiveId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentActiveId}`) {
      link.classList.add("active");
    }
  });
}

// Badge pop animation helper
function animateBadge(badgeId) {
  const badge = document.getElementById(badgeId);
  if (!badge) return;
  badge.style.animation = "none";
  // Trigger reflow
  badge.offsetHeight;
  badge.style.animation = "popBadge 0.3s ease";
}

// --- UPDATE CART DRAWER DYNAMICALLY ---
function updateCartUI() {
  // Update badge count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartBadge.innerText = totalItems;
  cartBadge.style.display = totalItems > 0 ? "flex" : "none";

  // Check empty state
  if (cart.length === 0) {
    cartDrawerContent.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your shopping cart is empty.</p>
        <a href="#collection" onclick="closeAllDrawers()" style="color:var(--accent-color); font-weight:600; text-decoration:none; margin-top:16px; display:inline-block;">Browse Sarees</a>
      </div>
    `;
    cartDrawerFooter.innerHTML = `
      <div class="cart-total-row">
        <span class="cart-total-label">Subtotal</span>
        <span class="cart-total-value" id="cartSubtotal">&#8377;0.00</span>
      </div>
      <button class="btn-checkout" id="checkoutBtn" disabled style="background-color:var(--gray-medium); cursor:not-allowed; box-shadow:none;">Proceed to Checkout</button>
    `;
    return;
  }

  // Populate drawer
  cartDrawerContent.innerHTML = "";
  let subtotalPrice = 0;

  cart.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return;

    subtotalPrice += product.price * cartItem.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-image" />
      <div class="cart-item-details">
        <a href="#" class="cart-item-name quick-view-direct" data-id="${product.id}">${product.name}</a>
        <div class="cart-item-price">&#8377;${product.price.toLocaleString("en-IN")}</div>
        <div class="cart-item-actions">
          <div class="quantity-control">
            <button class="quantity-btn dec-qty" data-id="${product.id}"><i class="fa-solid fa-minus"></i></button>
            <span class="quantity-value">${cartItem.quantity}</span>
            <button class="quantity-btn inc-qty" data-id="${product.id}"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="remove-item-btn" data-id="${product.id}" aria-label="Remove item">
            <i class="fa-regular fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    `;
    cartDrawerContent.appendChild(itemDiv);
  });

  // Calculate discounts & loyalty card reductions
  let discountAmount = 0;
  let finalTotalPrice = subtotalPrice;
  let discountRowHTML = "";

  if (patronState.isLoggedIn && patronState.discountPercent > 0) {
    discountAmount = subtotalPrice * (patronState.discountPercent / 100);
    finalTotalPrice = subtotalPrice - discountAmount;
    discountRowHTML = `
      <div class="cart-discount-row">
        <span style="color:var(--primary-color); font-size:12px; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">
          <i class="fa-solid fa-crown" style="margin-right:4px;"></i> Patron Discount (${patronState.discountPercent}%):
        </span>
        <span style="color:var(--primary-color); font-weight:700;">-₹${discountAmount.toLocaleString("en-IN")}</span>
      </div>
    `;
  }

  // Populate footer dynamically
  cartDrawerFooter.innerHTML = `
    <div style="margin-bottom: 16px; width:100%;">
      <div class="cart-total-row" style="margin-bottom: 8px;">
        <span class="cart-total-label" style="font-size:12px; font-weight:500; color:var(--gray-dark);">Items Subtotal</span>
        <span class="cart-total-value" style="font-size:16px; color:var(--dark-color);">&#8377;${subtotalPrice.toLocaleString("en-IN")}</span>
      </div>
      ${discountRowHTML}
      <div class="cart-total-row" style="border-top:1px dashed var(--gray-medium); padding-top:12px; margin-top:8px;">
        <span class="cart-total-label">Payable Total</span>
        <span class="cart-total-value" id="cartSubtotal" style="font-size:22px; color:var(--primary-color);">&#8377;${finalTotalPrice.toLocaleString("en-IN")}</span>
      </div>
    </div>
    <button class="btn-checkout" id="checkoutBtn">Proceed to Checkout</button>
  `;

  // Attach quantity and remove actions
  cartDrawerContent.querySelectorAll(".dec-qty").forEach(btn => {
    btn.addEventListener("click", () => updateCartQuantity(parseInt(btn.dataset.id), -1));
  });
  cartDrawerContent.querySelectorAll(".inc-qty").forEach(btn => {
    btn.addEventListener("click", () => updateCartQuantity(parseInt(btn.dataset.id), 1));
  });
  cartDrawerContent.querySelectorAll(".remove-item-btn").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.id)));
  });
  cartDrawerContent.querySelectorAll(".quick-view-direct").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeAllDrawers();
      openQuickView(parseInt(btn.dataset.id));
    });
  });

  // Re-bind Checkout Action on dynamically loaded checkoutBtn
  const checkoutBtnEl = document.getElementById("checkoutBtn");
  if (checkoutBtnEl) {
    checkoutBtnEl.addEventListener("click", () => {
      if (cart.length === 0) return;
      showToast("Opening secure checkout gateway...");
      setTimeout(() => {
        showToast("Order placed successfully! Custom measurements request sent.");
        // If logged in, reward loyalty points
        if (patronState.isLoggedIn) {
          const earnedPoints = Math.floor(finalTotalPrice / 100);
          patronState.points += earnedPoints;
          showToast(`Patron loyalty bonus: +${earnedPoints} points added to card!`);
          renderPatronDrawer(); // Refresh card display
        }
        cart = [];
        updateCartUI();
        closeAllDrawers();
      }, 1500);
    });
  }
}

// --- UPDATE WISHLIST DRAWER DYNAMICALLY ---
function updateWishlistUI() {
  // Update badge count
  wishlistBadge.innerText = wishlist.length;
  wishlistBadge.style.display = wishlist.length > 0 ? "flex" : "none";

  // Check empty state
  if (wishlist.length === 0) {
    wishlistDrawerContent.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-heart"></i>
        <p>No items saved to your wishlist yet.</p>
      </div>
    `;
    return;
  }

  // Populate drawer
  wishlistDrawerContent.innerHTML = "";

  wishlist.forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const itemDiv = document.createElement("div");
    itemDiv.className = "wishlist-item";
    itemDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="wishlist-item-image" />
      <div class="wishlist-item-info">
        <a href="#" class="wishlist-item-name quick-view-direct" data-id="${product.id}">${product.name}</a>
        <div class="wishlist-item-price">&#8377;${product.price.toLocaleString("en-IN")}</div>
      </div>
      <div class="wishlist-actions">
        <button class="add-to-cart-from-wishlist" data-id="${product.id}" title="Add to Cart">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
        <button class="remove-from-wishlist" data-id="${product.id}" title="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
    wishlistDrawerContent.appendChild(itemDiv);
  });

  // Attach wishlist click actions
  wishlistDrawerContent.querySelectorAll(".add-to-cart-from-wishlist").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
      toggleWishlist(id); // Move from wishlist to cart
    });
  });
  wishlistDrawerContent.querySelectorAll(".remove-from-wishlist").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });
  wishlistDrawerContent.querySelectorAll(".quick-view-direct").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeAllDrawers();
      openQuickView(parseInt(btn.dataset.id));
    });
  });
}

// --- SEARCH ENGINE CONTROL ---

function openSearch() {
  searchOverlay.classList.add("active");
  searchInput.focus();
  document.body.style.overflow = "hidden";
  handleSearchInput(); // Render default list
}

function closeSearch() {
  searchOverlay.classList.remove("active");
  searchInput.value = "";
  document.body.style.overflow = "";
}

function handleSearchInput() {
  const query = searchInput.value.toLowerCase().trim();
  searchResultsGrid.innerHTML = "";

  let matched = [];
  if (query === "") {
    searchResultsTitle.innerText = "Featured Collection";
    matched = products.slice(0, 4); // Show top 4 as suggestion
  } else {
    searchResultsTitle.innerText = "Matching Results";
    matched = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.weave.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }

  if (matched.length === 0) {
    searchResultsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; padding: 20px 0;">
        <p>No matches found for "${query}"</p>
      </div>
    `;
    return;
  }

  matched.forEach(product => {
    const item = document.createElement("div");
    item.className = "search-result-item";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="search-result-image" />
      <div class="search-result-info">
        <div class="search-result-name">${product.name}</div>
        <div class="search-result-price">&#8377;${product.price.toLocaleString("en-IN")}</div>
      </div>
    `;
    item.addEventListener("click", () => {
      closeSearch();
      openQuickView(product.id);
    });
    searchResultsGrid.appendChild(item);
  });
}

// --- QUICK VIEW MODAL WINDOW CONTROL ---

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewId = productId;
  modalProductImage.src = product.image;
  modalProductImage.alt = product.name;
  modalProductCategory.innerText = `${product.category} Collection`;
  modalProductName.innerText = product.name;
  modalProductPrice.innerHTML = `&#8377;${product.price.toLocaleString("en-IN")}`;
  modalProductDesc.innerText = product.description;
  modalProductWeave.innerText = product.weave;

  // Set active style for wishlist buttons in quick view
  const isWishlisted = wishlist.includes(productId);
  const heartIcon = modalAddToWishlistBtn.querySelector("i");
  if (isWishlisted) {
    modalAddToWishlistBtn.classList.add("active");
    heartIcon.className = "fa-solid fa-heart";
  } else {
    modalAddToWishlistBtn.classList.remove("active");
    heartIcon.className = "fa-regular fa-heart";
  }

  quickViewModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  quickViewModal.classList.remove("active");
  activeQuickViewId = null;
  document.body.style.overflow = "";
}

// --- TOAST NOTIFICATIONS ---

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  // Auto disappear after 3 seconds
  setTimeout(() => {
    toast.classList.add("fade-out");
    // Remove element after CSS slideout finishes (0.4s)
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

// ==========================================================================
// PATRON LOYALTY AUTHENTICATION & DASHBOARD ENGINE
// ==========================================================================

// Main coordinator for profile drawer content
function renderPatronDrawer() {
  if (patronState.isLoggedIn) {
    patronDrawerTitle.innerText = "Patron Profile";
    renderPatronProfile();
    // Update nav icons to monogram
    const firstLetter = patronState.name.trim().charAt(0).toUpperCase();
    profileIcon.style.display = "none";
    profileMonogram.innerText = firstLetter;
    profileMonogram.style.display = "flex";
  } else {
    patronDrawerTitle.innerText = "Patron Portal";
    profileIcon.style.display = "flex";
    profileMonogram.style.display = "none";
    profileMonogram.innerText = "";
    
    // Check if we are mid-verification (OTP screen) or normal login
    if (currentOTP !== "") {
      renderPatronOTPForm();
    } else {
      renderPatronLoginForm();
    }
  }
}

// Render Mobile Login / Signup screen
function renderPatronLoginForm() {
  patronDrawerContent.innerHTML = `
    <p class="otp-instruction" style="margin-bottom:28px;">
      Access your personalized dashboard, earn rewards on purchases, and unlock private collections by logging in with your mobile number.
    </p>
    <form id="patronLoginForm">
      <div class="auth-form-group">
        <label for="patronName">Full Name</label>
        <input type="text" id="patronName" placeholder="Enter your full name" required value="${tempUserData.name || ''}" />
      </div>
      <div class="auth-form-group">
        <label for="patronMobile">Mobile Number</label>
        <div class="phone-input-wrapper">
          <div class="phone-prefix">+91</div>
          <input type="tel" id="patronMobile" placeholder="10-digit number" maxlength="10" pattern="[0-9]{10}" required value="${tempUserData.mobile || ''}" />
        </div>
      </div>
      <button type="submit" class="btn-auth-submit" style="margin-top:24px;">Send Access OTP</button>
    </form>
  `;

  // Focus and restrict input numerical characters
  const mobileInput = document.getElementById("patronMobile");
  mobileInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  });

  // Submit Mobile Form
  const form = document.getElementById("patronLoginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("patronName").value.trim();
    const mobileVal = mobileInput.value.trim();

    if (nameVal.length < 2) {
      showToast("Please enter a valid name.");
      return;
    }
    if (mobileVal.length !== 10) {
      showToast("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Generate random 4 digit code
    const generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    currentOTP = generatedOTP;
    tempUserData = { name: nameVal, mobile: mobileVal };
    
    // Begin Resend cooldown timer
    otpTimerSeconds = 30;
    startOTPCountdown();

    // Transition to OTP screen
    renderPatronDrawer();

    // Trigger visual toast with code for easy developer & user copy
    setTimeout(() => {
      showToast(`[Saree Palace OTP] Verification passcode: ${generatedOTP}`);
    }, 800);
  });
}

// Render OTP entry screen
function renderPatronOTPForm() {
  patronDrawerContent.innerHTML = `
    <p class="otp-instruction">
      We sent a 4-digit verification passcode to <span>+91 ${tempUserData.mobile}</span> via SMS.
    </p>
    
    <div class="otp-grid">
      <input type="text" class="otp-digit" id="otpDigit1" maxlength="1" autocomplete="off" />
      <input type="text" class="otp-digit" id="otpDigit2" maxlength="1" autocomplete="off" />
      <input type="text" class="otp-digit" id="otpDigit3" maxlength="1" autocomplete="off" />
      <input type="text" class="otp-digit" id="otpDigit4" maxlength="1" autocomplete="off" />
    </div>

    <div class="otp-timer" id="otpTimerContainer">
      Resend OTP in <span>00:30</span>
    </div>

    <button id="verifyOtpBtn" class="btn-auth-submit" style="margin-top:36px;">Verify & Enter Portal</button>
    <button id="cancelOtpBtn" class="btn-logout" style="margin-top:14px; border:none; background:transparent;">Back to Login</button>
  `;

  const digits = document.querySelectorAll(".otp-digit");
  
  // Set up auto-tab focus shift UX
  digits.forEach((input, idx) => {
    input.addEventListener("input", (e) => {
      // Numbers only
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      
      if (e.target.value !== "") {
        // Shift focus forward
        if (idx < digits.length - 1) {
          digits[idx + 1].focus();
        }
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && e.target.value === "") {
        // Shift focus backward
        if (idx > 0) {
          digits[idx - 1].focus();
          digits[idx - 1].value = "";
        }
      }
    });
  });

  // Automatically focus first digit
  digits[0].focus();

  // Cancel OTP Action
  document.getElementById("cancelOtpBtn").addEventListener("click", () => {
    currentOTP = "";
    clearInterval(otpTimerInterval);
    renderPatronDrawer();
  });

  // Verify OTP button Action
  document.getElementById("verifyOtpBtn").addEventListener("click", () => {
    let enteredCode = "";
    digits.forEach(input => enteredCode += input.value);

    if (enteredCode.length !== 4) {
      showToast("Please enter all 4 digits.");
      return;
    }

    if (enteredCode === currentOTP || enteredCode === "1234") { // Allow 1234 as universal bypass
      clearInterval(otpTimerInterval);
      
      // Determine Patron tier based on mobile endings or mock profiles
      let calculatedTier = "Silver Patron";
      let discountRate = 5; // 5% discount
      let pointsAwarded = 250;
      
      if (tempUserData.mobile.endsWith("7") || tempUserData.mobile.endsWith("9")) {
        calculatedTier = "Royal Patron";
        discountRate = 10; // 10% discount
        pointsAwarded = 500;
      } else if (tempUserData.mobile.endsWith("3") || tempUserData.mobile.endsWith("5")) {
        calculatedTier = "Gold Patron";
        discountRate = 7; // 7% discount
        pointsAwarded = 350;
      }

      // Establish session
      patronState = {
        isLoggedIn: true,
        name: tempUserData.name,
        mobile: tempUserData.mobile,
        tier: calculatedTier,
        points: pointsAwarded,
        discountPercent: discountRate,
        cardNumber: `4912 3000 8594 ${Math.floor(1000 + Math.random() * 9000)}`
      };

      currentOTP = "";
      tempUserData = { name: "", mobile: "" };

      // Update drawers and UI lists
      showToast(`Welcome back, ${patronState.name}!`);
      showToast(`VIP Reward: ${calculatedTier} tier unlocked (${discountRate}% Discount)!`);
      
      updateCartUI(); // Recalculate shopping cart totals with new discount
      renderPatronDrawer(); // Transition to profile dashboard
    } else {
      showToast("Invalid verification passcode. Please try again.");
      // Shake inputs on failure
      const grid = document.querySelector(".otp-grid");
      grid.style.animation = "none";
      grid.offsetHeight; // trigger reflow
      grid.style.animation = "popBadge 0.3s ease";
      digits.forEach(input => input.value = "");
      digits[0].focus();
    }
  });
}

// Timer counting loops
function startOTPCountdown() {
  clearInterval(otpTimerInterval);
  updateOTPTimerDisplay();

  otpTimerInterval = setInterval(() => {
    otpTimerSeconds--;
    updateOTPTimerDisplay();

    if (otpTimerSeconds <= 0) {
      clearInterval(otpTimerInterval);
      const timerContainer = document.getElementById("otpTimerContainer");
      if (timerContainer) {
        timerContainer.innerHTML = `<button class="resend-otp-btn" id="resendOtpBtn">Resend Verification SMS</button>`;
        document.getElementById("resendOtpBtn").addEventListener("click", () => {
          // Re-trigger OTP Code
          const regenerated = Math.floor(1000 + Math.random() * 9000).toString();
          currentOTP = regenerated;
          otpTimerSeconds = 30;
          startOTPCountdown();
          renderPatronDrawer(); // Refresh state display
          showToast(`[Saree Palace] New verification code: ${regenerated}`);
        });
      }
    }
  }, 1000);
}

function updateOTPTimerDisplay() {
  const timerContainer = document.getElementById("otpTimerContainer");
  if (!timerContainer) return;
  const mins = Math.floor(otpTimerSeconds / 60);
  const secs = otpTimerSeconds % 60;
  const padSecs = secs < 10 ? `0${secs}` : secs;
  timerContainer.innerHTML = `Resend OTP in <span>0${mins}:${padSecs}</span>`;
}

// Render Active Profile dashboard
function renderPatronProfile() {
  patronDrawerContent.innerHTML = `
    <!-- Holographic Loyalty Card -->
    <div class="loyalty-card">
      <div class="loyalty-card-bg-glow"></div>
      <div class="loyalty-card-header">
        <div class="loyalty-card-logo">
          <span>S</span> Palace
        </div>
        <div class="loyalty-card-tier">${patronState.tier}</div>
      </div>
      <div class="loyalty-card-number">${patronState.cardNumber}</div>
      <div class="loyalty-card-footer">
        <div>
          <div class="patron-meta-label">Patron</div>
          <div class="patron-meta-value">${patronState.name}</div>
        </div>
        <div style="text-align:right;">
          <div class="patron-meta-label">Loyalty Code</div>
          <div class="patron-meta-value">&#8377; SAVEPATRON</div>
        </div>
      </div>
    </div>

    <!-- Patron Points Statistics -->
    <div class="patron-stats-row">
      <div class="patron-stat-box">
        <h5>Loyalty Points</h5>
        <p>${patronState.points} pts</p>
      </div>
      <div class="patron-stat-box">
        <h5>Cart Discount</h5>
        <p>${patronState.discountPercent}% OFF</p>
      </div>
    </div>

    <!-- Account Details menus -->
    <ul class="profile-menu">
      <li class="profile-menu-item">
        <a href="#" class="profile-menu-link">
          <span><i class="fa-solid fa-clock-rotate-left" style="margin-right:12px; color:var(--accent-color);"></i> Order History</span>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </li>
      <li class="profile-menu-item">
        <a href="#" class="profile-menu-link">
          <span><i class="fa-solid fa-map-location-dot" style="margin-right:12px; color:var(--accent-color);"></i> Shipping Addresses</span>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </li>
      <li class="profile-menu-item">
        <a href="#" class="profile-menu-link">
          <span><i class="fa-solid fa-gem" style="margin-right:12px; color:var(--accent-color);"></i> VIP Exclusive Offers</span>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </li>
      <li class="profile-menu-item">
        <a href="#" class="profile-menu-link">
          <span><i class="fa-solid fa-calendar-check" style="margin-right:12px; color:var(--accent-color);"></i> Virtual Styling Slots</span>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </li>
    </ul>

    <button id="logoutBtn" class="btn-logout">Logout from Portal</button>
  `;

  // Attach menu click placeholders
  document.querySelectorAll(".profile-menu-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Patron feature preview: Order sheets loading...");
    });
  });

  // Logout button trigger
  document.getElementById("logoutBtn").addEventListener("click", () => {
    // Reset state
    patronState = {
      isLoggedIn: false,
      name: "",
      mobile: "",
      tier: "Silver Patron",
      points: 0,
      discountPercent: 0,
      cardNumber: ""
    };
    currentOTP = "";
    tempUserData = { name: "", mobile: "" };

    showToast("Logged out of Patron Portal safely.");
    updateCartUI(); // Reset shopping cart back to normal values
    renderPatronDrawer(); // Render guest dashboard login forms
  });
}
