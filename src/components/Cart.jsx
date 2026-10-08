import React from 'react';

function Cart({ cart, increaseQuantity, decreaseQuantity, removeItem, orderNow }) {
  // Menghitung total harga seluruh pesanan
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <p>Keranjang masih kosong.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    Rp{item.price.toLocaleString('id-ID')} x {item.quantity} = Rp{(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="cart-actions">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)} className="btn-remove">
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: Rp{totalPrice.toLocaleString('id-ID')}</h3>
            <button onClick={orderNow} className="btn-order">
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
