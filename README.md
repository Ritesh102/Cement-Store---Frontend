# Cement Store — Product Listing + Cart Interaction 

## Overview
This is a small React app that implements the HomeRun assignment:
- Product grid (4 dummy cement products)
- Add button → quantity controls: [<<] [-] [Qty] [+] [>>]
- + / - change quantity by 1; << / >> change by -5 / +5
- Max quantity 20 per product — shows error and disables increments
- Global cart counter updates in real-time

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open the dev server URL printed by Vite.

## Project structure
- src/
  - main.jsx
  - App.jsx
  - index.css
  - data/products.js
  - components/
    - Header.jsx
    - ProductCard.jsx
  - hooks/
    - useCart.js
  - index.css

## Notes
- Built with React hooks and context-like `useCart` for global counter sync.
- No backend required; product data is static in `src/data/products.js`.
- CTA button color: `#328616`.

You can modify product data, styles, and layout freely.

