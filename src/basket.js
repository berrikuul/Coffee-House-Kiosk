
import React from "react";
import "./Basket.css";

export default function Basket({ selectedCoffees, setSelectedCoffees, placedOrders, setPlacedOrders }) {

  const clearAll = () => {
    setSelectedCoffees([]);
    setPlacedOrders([]);
  };

  const totalPrice = selectedCoffees.reduce((sum, c) => sum + c.price * c.count, 0);
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h2>Order Status</h2>
      </div>

      <div className="basket-orders">
        {selectedCoffees.map(coffee => (
          <div className="basket-order-item" key={coffee.name}>
            <img src={coffee.image} alt={coffee.name} className="basket-order-img" />
            <div className="basket-order-info">
              <span className="coffee-name">{coffee.name}</span>
              <span className="coffee-count">({coffee.count})</span>
            </div>
            <span className="coffee-total">{(coffee.price * coffee.count).toFixed(2)} р.</span>
          </div>
        ))}
      </div>

      <div className="basket-summary">
        <div className="summary-line">
          <span>Скидка 10%</span>
          <span>-{discount.toFixed(2)} р.</span>
        </div>
        <div className="summary-line total">
          <span>К оплате</span>
          <span>{finalPrice.toFixed(2)} р.</span>
        </div>
        <button className="clear-all-btn" onClick={clearAll}>Удалить всё</button>
      </div>
    </div>
  );
}
