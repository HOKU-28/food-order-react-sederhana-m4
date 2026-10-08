import React from 'react';
import MenuItem from './MenuItem';

function Menu({ menu, addToCart }) {
  return (
    <div className="menu-container">
      <h2>Daftar Menu</h2>
      <div className="menu-list">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
