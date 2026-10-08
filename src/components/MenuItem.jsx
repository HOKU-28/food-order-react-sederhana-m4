import React from 'react';

function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <div>
        <h3>{item.name}</h3>
        <p>Rp{item.price.toLocaleString('id-ID')}</p>
      </div>
      <button onClick={() => addToCart(item)}>Tambah</button>
    </div>
  );
}

export default MenuItem;
