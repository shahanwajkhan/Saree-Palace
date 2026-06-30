# 👑 Saree Palace — Luxury Handloom & Silk Storefront

Saree Palace is a premium, fully responsive, and highly interactive e-commerce boutique storefront designed for generational handloom masterpieces, fine tussar silks, and royal Mysore crepes. The application features a rich, editorial-style layout, modern stateful interactions, and a simulated Patron Loyalty program with phone OTP authentication.

Live Demo: https://saree-palace-eight.vercel.app/

---

## ✨ Features

### 1. ⚜️ Premium Brand Design Language
- **Luxury Aesthetic**: Sophisticated visual palette incorporating rich royal burgundy (`#6B1D2F`), gold accents (`#C5A059`), deep charcoal, and warm off-white.
- **Elegant Typography**: Loaded Google Fonts `Playfair Display` for high-end serif titles and `Outfit` for clean sans-serif UI elements.
- **Responsive Layout**: Adapts gracefully across desktop, tablet, and mobile screens with custom portrait card aspect ratios (1:1.35) and grid alignments.
- **Visual Grid Spacing**: All visual gaps and alignments have been precisely tuned for an immersive, premium fashion presentation.

### 2. 🔐 Patron Portal & Loyalty Verification
- **Simulated OTP Login**: Dynamic phone-number authentication using simulated SMS verification codes.
- **Intelligent OTP Grid**: Custom 4-digit input grid with auto-focus shifting (moving forward on type and backspacing on delete).
- **Gamified Loyalty Card**: Glassmorphic digital membership cards tracking points, tier status, and member codes.
- **Tier-based Cart Discounts**: Mobile number suffixes automatically determine Patron Tiers on verification:
  - **Royal Patron** (10% Off + 500 starting pts)
  - **Gold Patron** (7% Off + 350 starting pts)
  - **Silver Patron** (5% Off + 250 starting pts)
- **Accumulated Point Rewards**: Earns points dynamically (1 point for every ₹100 spent) upon checkout.

### 3. 🛍️ Stateful E-Commerce Core
- **Shopping Cart Drawer**: Sliding panel detailing items, quantity controls (+/- buttons), loyalty discounts, item subtotals, and payable grand totals.
- **Wishlist Drawer**: Sliding panel storing liked sarees, supporting direct "Add to Cart" migration.
- **Real-time Catalog Filters**: Responsive filter chips and dropdown selectors to filter items by fabric material, price range, and sort by price.
- **Fuzzy Search Overlay**: Dynamic full-screen search input matching names, descriptions, fabrics, or weaves.
- **Product Quick View Modal**: Modal detailing product specifications (length, care, weave type) and larger imagery.
- **Toast Notifications**: Micro-feedback popups confirming shopper actions (e.g., adding to cart, logging out).
- **Scroll Spy Navigation**: Active menu links highlight dynamically as the user scrolls.

---

## 🛠️ Technology Stack

- **Markup**: HTML5 (Semantic Structure, Meta SEO tags)
- **Styling**: Vanilla CSS3 (Custom CSS Custom Variables, Media Queries, Glassmorphic Backdrop filters)
- **Logic**: Vanilla ES6 JavaScript (Stateful arrays, DOM event bubbling, auto-focus hooks)
- **Assets**: Google Fonts, FontAwesome Icons, Unsplash Editorial Media

---

## 🚀 Getting Started

No build tools or installation steps are required. This is a clean, dependency-free static website.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shahanwajkhan/Saree-Palace.git
   ```
2. **Launch the app**:
   Open [index.html](index.html) directly in any modern browser, or run a local server:
   ```bash
   # Using python
   python -m http.server 8000
   # Or using NodeJS
   npx serve .
   ```
3. **Test the OTP login**:
   Open the Patron Portal (user icon in the header), enter your name and a 10-digit mobile number, and hit **Send OTP**. You will see the verification code pop up inside a Toast notification. (Enter `1234` as a developer bypass).

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
