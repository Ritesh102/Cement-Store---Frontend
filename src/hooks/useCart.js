import { useState, useCallback } from 'react';

/*
 Simple hook to manage cart state at top-level.
 Exposes:
 - quantities: map productId -> qty
 - totalItems: derived sum
 - setQuantity(productId, qty)
 - increment(productId, delta)
 - reset(productId)
*/
export default function useCart(initial = {}) {
  const [quantities, setQuantities] = useState(initial);

  const setQuantity = useCallback((productId, qty) => {
    setQuantities(prev => {
      const copy = { ...prev };
      if (qty <= 0) {
        delete copy[productId];
      } else {
        copy[productId] = qty;
      }
      return copy;
    });
  }, []);

  const increment = useCallback((productId, delta) => {
    setQuantities(prev => {
      const cur = prev[productId] || 0;
      const next = cur + delta;
      const copy = { ...prev };
      if (next <= 0) {
        delete copy[productId];
      } else {
        copy[productId] = next;
      }
      return copy;
    });
  }, []);

  const totalItems = Object.values(quantities).reduce((s, v) => s + v, 0);

  return { quantities, setQuantity, increment, totalItems };
}
