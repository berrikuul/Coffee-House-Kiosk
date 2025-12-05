function OrderPage({ selectedCoffee }) {
  return (
    <div className="orderPage">
      <h2>Ваша корзина</h2>
      {selectedCoffee.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        selectedCoffee.map(coffee => (
          <div key={coffee.name}>
            {coffee.name} — {coffee.count} шт. — {coffee.price * coffee.count}₽
          </div>
        ))
      )}
    </div>
  );
}

export default OrderPage;
