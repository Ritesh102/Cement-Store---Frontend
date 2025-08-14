import React from 'react';
import products from './data/products';
import useCart from './hooks/useCart';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function App() {
  const { quantities, setQuantity, increment, totalItems } = useCart({});

  return (
    <div className="app">
      <Header totalItems={totalItems} />
      <main>
        <div className="grid">
          {products.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              qty={quantities[p.id] || 0}
              setQuantity={(id, q) => setQuantity(id, q)}
              increment={(id, delta) => increment(id, delta)}
            />
          ))}
        </div>

        <div className="footer-note">
          Tip: Use &lt;&lt; and &gt;&gt; to change by 5. Max per product = 20. Cart counter (top-right) syncs in real-time.
        </div>
      </main>
    </div>
  );
}
