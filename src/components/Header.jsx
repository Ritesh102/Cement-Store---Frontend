import React from 'react';
export default function Header({ totalItems }) {
  return (
    <header className="header">
      <div className="title">HomeRun — Cement Store</div>
      <div className="cart" title="Cart">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
          <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
        </svg>
        {totalItems > 0 && <div className="badge">{totalItems}</div>}
      </div>
    </header>
  );
}
