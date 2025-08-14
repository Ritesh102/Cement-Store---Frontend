import React, { useState, useEffect } from 'react';

const MAX_Q = 20;

export default function ProductCard({ product, qty, setQuantity, increment }) {
  // local error state for messages when hitting limit
  const [error, setError] = useState('');

  useEffect(() => {
    if (qty >= MAX_Q) {
      setError(`Maximum ${MAX_Q} allowed per order. Please place another order if required.`);
    } else {
      setError('');
    }
  }, [qty]);

  const handleAdd = () => setQuantity(product.id, 1);
  const handleInc = (d) => {
    const next = (qty || 0) + d;
    if (next >= MAX_Q) {
      setQuantity(product.id, MAX_Q);
      return;
    }
    setQuantity(product.id, Math.max(0, next));
  };

  const disabledInc = (qty || 0) >= MAX_Q;
  const disabledDec = (qty || 0) <= 0;

  return (
    <div className="card">
      <div className="prod-img">Image</div>
      <div style={{fontWeight:700}}>{product.name}</div>
      <div className="price-row">
        <div className="price">₹{product.price}</div>
        <div className="mrp">₹{product.mrp}</div>
        <div className="discount">{product.discount} off</div>
      </div>

      {!qty && (
        <button className="add-btn" onClick={handleAdd} style={{background:'#328616'}}>Add</button>
      )}

      {qty > 0 && (
        <>
          <div className="controls">
            <button
              className={`ctrl-btn ${((qty||0)===0) ? 'disabled' : ''}`}
              onClick={() => {
                const target = Math.max(0, (qty||0) - 5);
                setQuantity(product.id, target);
              }}
              disabled={disabledDec}
            >
              &lt;&lt;
            </button>

            <button
              className={`ctrl-btn ${disabledDec ? 'disabled' : ''}`}
              onClick={() => setQuantity(product.id, Math.max(0, (qty||0) - 1))}
              disabled={disabledDec}
            >
              -
            </button>

            <div className="qty">{qty}</div>

            <button
              className={`ctrl-btn ${disabledInc ? 'disabled' : ''}`}
              onClick={() => {
                const next = (qty||0) + 1;
                setQuantity(product.id, Math.min(MAX_Q, next));
              }}
              disabled={disabledInc}
            >
              +
            </button>

            <button
              className={`ctrl-btn ${disabledInc ? 'disabled' : ''}`}
              onClick={() => {
                const next = Math.min(MAX_Q, (qty||0) + 5);
                setQuantity(product.id, next);
              }}
              disabled={disabledInc}
            >
              &gt;&gt;
            </button>
          </div>

          {error && <div className="error">{error}</div>}
        </>
      )}

    </div>
  );
}
