import React from 'react'
import './Cart.scss'

export default function Cart({cards, likedCards}) {
  const idToObjectMap = new Map(cards.map(obj => [obj.id, obj]));
  const cartCards = likedCards.map(id => idToObjectMap.get(id)).filter(obj => obj !== undefined);

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartCards.map((card) => (
        <div className="cart-label">
          <p>{card.name}</p>
          <p>${card.price}</p>
        </div>
      ))}
      <div className="cart-total">
        <p>Cart Total:</p>
        <p>${parseFloat(cartCards.reduce((acc, card) => acc + Number(card.price), 0).toFixed(2))}</p>
      </div>
    </div>
  );
}
