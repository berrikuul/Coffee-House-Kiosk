import './App.css';
import { useState, useMemo, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import OrderPage from "./basket.js";
import Coffee from "./Coffee.js"


const coffeeMenu = {
  Cappucino: [
    {
      name: "Classic Cappucino",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Espresso with steamed milk and a thick layer of foam.",
      price: 4.5,
      size: "Small",
      extras: "",
      milk: "Whole",
      count: 0,
    },
    {
      name: "Vanilla Cappucino",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Cappucino with a touch of vanilla syrup.",
      price: 5,
      size:  "Small",
      extras: "",
      milk: "Whole",
      count: 0
    }
  ],

  Latte: [
    {
      name: "Classic Latte",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Smooth espresso with steamed milk.",
      price: 4.5,
      size:  "Small",
      extras: "",
      milk: "Whole",
      count: 0
    },
    {
      name: "Vanilla Latte",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Latte with a touch of vanilla syrup.",
      price: 5,
      size:  "Small",
      extras: "",
      milk: "Almond",
      count: 0
    }
  ],

  Americano: [
    {
      name: "Classic Americano",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Espresso diluted with hot water.",
      price: 3.5,
      size: "Small",
      extras: "",
      milk: "None",
      count: 0
    },
    {
      name: "Iced Americano",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Chilled espresso with water and ice.",
      price: 4,
      size: "Small",
      extras: "",
      milk: "None",
      count: 0
    }
  ],

  Espresso: [
    {
      name: "Single Espresso",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Pure shot of espresso.",
      price: 2.5,
      size: "Small",
      extras: "",
      milk: "None",
      count: 0
    },
    {
      name: "Double Espresso",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Two shots of rich espresso.",
      price: 3.5,
      size: "Small",
      extras: "",
      milk: "None",
      count: 0
    }
  ],

  Mocha: [
    {
      name: "Classic Mocha",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Chocolate and espresso with steamed milk.",
      price: 5,
      size:  "Small",
      extras: "",
      milk: "Whole",
      count: 0
    },
    {
      name: "Iced Mocha",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Chilled mocha with ice cubes.",
      price: 5.5,
      size:  "Small",
      extras: "",
      milk: "Almond",
      count: 0
    }
  ],

  "Flat White": [
    {
      name: "Classic Flat White",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Smooth espresso with velvety milk.",
      price: 4.5,
      size:  "Small",
      extras: "",
      milk: "Whole",
      count: 0
    },
    {
      name: "Vanilla Flat White",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Flat White with vanilla flavor.",
      price: 5,
      size:  "Small",
      extras: "",
      milk: "Almond",
      count: 0
    }
  ],

  Macchiato: [
    {
      name: "Classic Macchiato",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Espresso topped with a small amount of milk foam.",
      price: 3.5,
      size: "Small",
      extras: "",
      milk: "Whole",
      count: 0
    },
    {
      name: "Caramel Macchiato",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Macchiato with caramel syrup.",
      price: 4.5,
      size:  "Small",
      extras: "",
      milk: "Skimmed",
      count: 0
    }
  ],

  "Irish Coffee": [
    {
      name: "Classic Irish Coffee",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Hot coffee with Irish whiskey and sugar.",
      price: 6,
      size:  "Small",
      extras: "",
      milk: "None",
      count: 0
    },
    {
      name: "Baileys Irish Coffee",
      image: "https://avatars.mds.yandex.net/i?id=f50a7b0297e6d10659c6ec6ab55989848095f967-7989082-images-thumbs&n=13",
      description: "Irish coffee with Baileys cream liqueur.",
      price: 6.5,
      size:  "Small",
      extras: "",
      milk: "None",
      count: 0
    }
  ]
};

export const AddCoffeeBasket = ({coffee, setSelectedCoffees}) => {
  setSelectedCoffees(prev => {
    const exists = prev.find(c => c.name === coffee.name);
    if (exists) {
      return prev.map(c => c.name === coffee.name ? {...c, count: c.count + 1} : c);
    } else {
      return [...prev, {...coffee, count: 1}];
    }
  });
};

export const DelCoffeeBasket = ({coffee, setSelectedCoffees}) => {
  setSelectedCoffees(prev => {
    const exists = prev.find(c => c.name === coffee.name);
    if (!exists) return prev;
    if (exists.count === 1) return prev.filter(c => c.name !== coffee.name);
    return prev.map(c => c.name === coffee.name ? {...c, count: c.count - 1} : c);
  });
};

function App() {
  const [filterCoffees, setFilterCoffees] = useState("All"); 
  const [selectedCoffees, setSelectedCoffees] = useState(() => {
  const saved = localStorage.getItem("selectedCoffees");
  return saved ? JSON.parse(saved) : [];
});

const [placedOrders, setPlacedOrders] = useState(() => {
  const saved = localStorage.getItem("placedOrders");
  return saved ? JSON.parse(saved) : [];
});
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showBasket, setShowBasket] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  localStorage.setItem("selectedCoffees", JSON.stringify(selectedCoffees));
}, [selectedCoffees]);

useEffect(() => {
  localStorage.setItem("placedOrders", JSON.stringify(placedOrders));
}, [placedOrders]);

  const placeOrder = (coffee) => {
  setPlacedOrders(prev => {
    const exists = prev.find(c => c.name === coffee.name);

    if (exists) {
      return prev.map(c =>
        c.name === coffee.name
          ? { ...c, count: c.count + coffee.count }
          : c
      );
    } else {
      return [...prev, { ...coffee }];
    }
  });

  setSelectedCoffees(prev =>
    prev.filter(c => c.name !== coffee.name)
  );
};

  const displayedCoffees = useMemo(() => {
    return Object.entries(coffeeMenu)
      .flatMap(([category, coffees]) =>
        coffees.filter(coffee =>
          (filterCoffees === "All" || filterCoffees === category) &&
          coffee.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
  }, [filterCoffees, searchInput]);

  const CoffeeCategories = ({name}) => (
    <li onClick={() => setFilterCoffees(name)} className={filterCoffees === name ? "selectedCoffee" : ""}>
      {name}
    </li>
  );

  const CoffeeCard = ({ coffee }) => (
    <div className="cardCoffee" onClick={() => {setSelectedCoffee(coffee); navigate("/coffee")}}>
      <div className="imgWrapper">
        {coffee.count > 0 && <span className="coffeeCounter">✔</span>}
        <img src={coffee.image} alt={coffee.name} />
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div className="footerCoffeeCard">
        <button className={coffee.count > 0 ? "delCoffee" : "invisible"} onClick={e => {e.stopPropagation(); DelCoffeeBasket({coffee, setSelectedCoffees})}}>-</button>
        <span>{coffee.price}$</span>
        <button className={coffee.count === 0 ? "addCoffee" : "invisible"} onClick={e => {e.stopPropagation(); AddCoffeeBasket({coffee, setSelectedCoffees})}}>+</button>
      </div>
    </div>
  );

  const HomePage = ({coffeesForBasket}) => {
    const inputRef = useRef(null);
    useEffect(() => { inputRef.current?.focus(); }, []);

    return (
      <div className="App">
        <header>
          <div className="searchContainer">
            <input
              ref={inputRef}
              className="searchInput"
              placeholder="Browse your favourite coffee here.."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="basketWrapper" onClick={() => setShowBasket(true)}>
            <div className="basketIcon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M9.5 19.5C10.0523 19.5 10.5 19.0523 10.5 18.5C10.5 17.9477 10.0523 17.5 9.5 17.5C8.94772 17.5 8.5 17.9477 8.5 18.5C8.5 19.0523 8.94772 19.5 9.5 19.5Z"
        fill="#000"/>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16.5 19.5C17.0523 19.5 17.5 19.0523 17.5 18.5C17.5 17.9477 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.9477 19.5 16.5 19.5Z"
        fill="#000"/>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M3 4C3 3.72386 3.22386 3.5 3.5 3.5H5.5C5.71767 3.5 5.91033 3.64082 5.97641 3.84822L9.36993 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15C17.5 15.2761 17.2761 15.5 17 15.5H9.00446C8.78679 15.5 8.59413 15.3592 8.52805 15.1518L5.13453 4.5H3.5C3.22386 4.5 3 4.27614 3 4Z"
        fill="#000"/>
      <path
        d="M8.5 13L6 6H19.3371C19.6693 6 19.9092 6.31795 19.8179 6.63736L18.1036 12.6374C18.0423 12.852 17.8461 13 17.6228 13H8.5Z"
        fill="#000"/>
    </svg>
              {coffeesForBasket.length > 0 && (
  <span className="basketCounter">{coffeesForBasket.length}</span>
)}

            </div>
          </div>
        </header>

        <div className="coffeeContainer">
          <div className="categoryCoffee">
            <ul>
              {["All", "Cappucino","Latte","Americano","Espresso","Mocha","Flat White","Macchiato","Irish Coffee"].map(name => <CoffeeCategories key={name} name={name} />)}
            </ul>
          </div>
          <div className="cardCoffee-container">
            {displayedCoffees.map(coffeeItem => {
              const selected = selectedCoffees.find(c => c.name === coffeeItem.name);
              return <CoffeeCard key={coffeeItem.name} coffee={selected || {...coffeeItem}} />
            })}
          </div>
        </div>
      </div>
    );
  };

  const coffeesForBasket = [
  ...placedOrders.map(po => {
    const selected = selectedCoffees.find(sc => sc.name === po.name);
    return selected
      ? { ...po, count: po.count + selected.count }
      : po;
  }),

  ...selectedCoffees.filter(
    sc => !placedOrders.find(po => po.name === sc.name)
  )
];

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage coffeesForBasket={coffeesForBasket}/>} />
        <Route path="/coffee" element={<Coffee
          selectedCoffee={selectedCoffee} 
          selectedCoffees={selectedCoffees} 
          setSelectedCoffees={setSelectedCoffees} 
          placeOrder={placeOrder} 
          placedOrders={placedOrders}
          coffeesForBasket={coffeesForBasket}
        />} />
      </Routes>

      {showBasket && (
        <div className="modal-overlay" onClick={() => setShowBasket(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <OrderPage selectedCoffees={coffeesForBasket} />
            <button className="close-btn" onClick={() => setShowBasket(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;




