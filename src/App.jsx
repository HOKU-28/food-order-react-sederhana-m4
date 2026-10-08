import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

// Data daftar menu restoran
const menuData = [
  { id: 1, name: 'Chicken Rice', price: 25000 },
  { id: 2, name: 'Beef Burger', price: 30000 },
  { id: 3, name: 'French Fries', price: 15000 },
  { id: 4, name: 'Spaghetti', price: 28000 },
  { id: 5, name: 'Fried Chicken', price: 22000 }
];

function App() {
  // State untuk menyimpan daftar item dalam keranjang belanja
  const [cart, setCart] = useState([]);

  // useEffect sederhana untuk memantau perubahan pada keranjang belanja
  useEffect(() => {
    console.log("Keranjang diperbarui:", cart);
  }, [cart]);

  // Fungsi untuk menambahkan item ke dalam keranjang
  function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  // Fungsi untuk menambah jumlah quantity item
  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Fungsi untuk mengurangi jumlah quantity item
  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Fungsi untuk menghapus item dari keranjang
  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Fungsi ketika tombol 'Pesan Sekarang' diklik
  function orderNow() {
    if (cart.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }

    alert('Pesanan berhasil dibuat!');
    setCart([]);
  }

  return (
    <div className="app">
      <h1>Food Order</h1>
      <p className="subtitle">Menu Restoran Sederhana</p>

      <div className="content">
        <Menu menu={menuData} addToCart={addToCart} />
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          orderNow={orderNow}
        />
      </div>
    </div>
  );
}

export default App;
