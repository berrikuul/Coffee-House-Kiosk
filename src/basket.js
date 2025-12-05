function OrderPage({ selectedCoffees }) {
  return (
    <div className="orderPage">
      <h2>Ваша корзина</h2>
      {selectedCoffees.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        selectedCoffees.map(coffee => (
          <div key={coffee.name}>
            {coffee.name} — {coffee.count} шт. — {coffee.price * coffee.count}₽
          </div>
        ))
      )}
    </div>
  );
}

export default OrderPage;
