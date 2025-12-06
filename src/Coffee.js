import "./Coffee.css";
import coffeeImage from "./Image coffee.png";
import { useNavigate } from "react-router-dom";
import OrderPage from "./basket.js";
import { useState } from 'react';
import { AddCoffeeBasket } from './App.js';
import { DelCoffeeBasket } from './App.js';

export default function CoffeePage({
  selectedCoffee,
  selectedCoffees,
  setSelectedCoffees,
  placeOrder,
  placedOrders,
  coffeesForBasket
}) {
  const [showBasket, setShowBasket] = useState(false);
  const [size, setSize] = useState("TALL");
  const [extras, setExtra] = useState(null);
  const [milk, setMilkType] = useState("OAT MILK");
  const navigate = useNavigate();

  if (!selectedCoffee) return null;

  const coffeeInBasket = selectedCoffees.find(c => c.name === selectedCoffee.name);


  const updateCoffeeOption = (updates) => {
  setSelectedCoffees(prev =>
    prev.map(c =>
      c.name === selectedCoffee.name
        ? { ...c, ...updates }
        : c
    )
  );
};

  const calcPrice = (coffee) => {
    let newPrice = coffee.price
    const size = {
      "SHORT": 1,
      "TALL": 1.2,
      "GRANDE": 1.3,
      "VINCE": 1.5,
    }
    newPrice *= size[coffee.size] || 1

    const milk = {
      "OAT MILK": 0.3,
      "SOY MILK":0.2,
      "ALMOND MILK": 0.4,
    }
    newPrice += milk[coffee.milk] || 0

    if (coffee.extras === "MILK") newPrice += 0.2
    if (coffee.extras === "SUGAR") newPrice += 0.1

    return Number(newPrice.toFixed(2));
  }

  return (
    <div className="coffee-detail-container">

      <div className="header">
        <button className="back-button" onClick={() => navigate("/")}>
          ← BACK TO MENU
        </button>

        <div className="basketWrapper" onClick={() => setShowBasket(true)}>
          <div className="basketIcon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M9.5 19.5C10.0523 19.5 10.5 19.0523 10.5 18.5C10.5 17.9477 10.0523 17.5 9.5 17.5C8.94772 17.5 8.5 17.9477 8.5 18.5C8.5 19.0523 8.94772 19.5 9.5 19.5Z"
                fill="#000" />
              <path fillRule="evenodd" clipRule="evenodd"
                d="M16.5 19.5C17.0523 19.5 17.5 19.0523 17.5 18.5C17.5 17.9477 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.9477 19.5 16.5 19.5Z"
                fill="#000" />
              <path fillRule="evenodd" clipRule="evenodd"
                d="M3 4C3 3.72386 3.22386 3.5 3.5 3.5H5.5C5.71767 3.5 5.91033 3.64082 5.97641 3.84822L9.36993 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15C17.5 15.2761 17.2761 15.5 17 15.5H9.00446C8.78679 15.5 8.59413 15.3592 8.52805 15.1518L5.13453 4.5H3.5C3.22386 4.5 3 4.27614 3 4Z"
                fill="#000" />
              <path
                d="M8.5 13L6 6H19.3371C19.6693 6 19.9092 6.31795 19.8179 6.63736L18.1036 12.6374C18.0423 12.852 17.8461 13 17.6228 13H8.5Z"
                fill="#000" />
            </svg>

            {coffeesForBasket.length > 0 && (
  <span className="basketCounter">{coffeesForBasket.length}</span>
)}

          </div>
        </div>
      </div>

      <div className="content">
        <div className="image-container">
          <img src={coffeeImage} alt="Cinnamon and Cocoa" />
        </div>

        <div className="details">
          <h1 className="coffee-title">{selectedCoffee.name}</h1>

          <p className="coffee-description">
            {selectedCoffee.description}
          </p>

          <div className="options">
            <div className="option-group">
              <span className="option-label">SIZE</span>
              <div className="buttons">
                <button className={`btn ${size === "SHORT" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setSize("SHORT"); updateCoffeeOption({ size: "SHORT" })}}>SHORT</button>
                <button className={`btn ${size === "TALL" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setSize("TALL"); updateCoffeeOption({ size: "TALL" })}}>TALL</button>
                <button className={`btn ${size === "GRANDE" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setSize("GRANDE"); updateCoffeeOption({ size: "GRANDE" })}}>GRANDE</button>
                <button className={`btn ${size === "VENTI" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setSize("VENTI"); updateCoffeeOption({ size: "VENTI" })}}>VENTI</button>
              </div>
            </div>

            <div className="option-group">
              <span className="option-label">EXTRA</span>
              <div className="buttons">
                <button className={`btn ${extras === "SUGAR" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setExtra("SUGAR"); updateCoffeeOption({ extras: "SUGAR" })}}>SUGAR</button>
                <button className={`btn ${extras === "MILK" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setExtra("MILK"); updateCoffeeOption({ extras: "MILK" })}}>MILK</button>
              </div>
            </div>

            <div className="option-group">
              <span className="option-label">MILK TYPE</span>
              <div className="buttons">
                <button className={`btn ${milk === "OAT MILK" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setMilkType("OAT MILK"); updateCoffeeOption({ milk: "OAT MILK" })}}>OAT MILK</button>
                <button className={`btn ${milk === "SOY MILK" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setMilkType("SOY MILK"); updateCoffeeOption({ milk: "SOY MILK" })}}>SOY MILK</button>
                <button className={`btn ${milk === "ALMOND MILK" ? "selected" : ""}`} disabled={!coffeeInBasket} onClick={() => {setMilkType("ALMOND MILK"); updateCoffeeOption({ milk: "ALMOND MILK" })}}>ALMOND MILK</button>
              </div>
            </div>
          </div>

          <div className="order-section">
            <span className="price">
              {coffeeInBasket
                ? calcPrice(coffeeInBasket) * coffeeInBasket.count
                : selectedCoffee.price}$ 
            </span>

            <div className="quantity">
              <button className="qty-btn" onClick={() => DelCoffeeBasket({ coffee: selectedCoffee, setSelectedCoffees })}>−</button>
              <span className="qty-number">{coffeeInBasket ? coffeeInBasket.count : 0}</span>
              <button className="qty-btn" onClick={() => AddCoffeeBasket({ coffee: selectedCoffee, setSelectedCoffees })}>+</button>
            </div>
          </div>

          <button
            className="place-order"
            onClick={() =>
              placeOrder({
                ...coffeeInBasket,
                price: calcPrice(coffeeInBasket)
              })
            }
            disabled={!coffeeInBasket}
          >
            PLACE ORDER
          </button>
        </div>
      </div>

      {showBasket && (
        <div className="modal-overlay" onClick={() => setShowBasket(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {(() => {
              const coffeesForBasket = [
                ...(selectedCoffees || []).map(sc => {
                  const placed = (placedOrders || []).find(po => po.name === sc.name);
                  return placed ? { ...sc, count: sc.count + placed.count } : sc;
                }),
                ...(placedOrders || []).filter(po => !(selectedCoffees || []).find(sc => sc.name === po.name))
              ];

              return <OrderPage selectedCoffees={coffeesForBasket} />;
            })()}

            <button className="close-btn" onClick={() => setShowBasket(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
