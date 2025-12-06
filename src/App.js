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
            <OrderPage selectedCoffees={selectedCoffees} setSelectedCoffees={setSelectedCoffees} setPlacedOrders={setPlacedOrders} />
            <button className="close-btn" onClick={() => setShowBasket(false)}>
              <span><svg width="37" height="23" viewBox="0 0 37 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_19_671" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.80934e-06 11.5C2.83896e-06 11.8388 0.139213 12.1638 0.387015 12.4034C0.634814 12.643 0.970904 12.7776 1.32135 12.7776L32.4866 12.7776L24.17 20.8162C24.0472 20.935 23.9497 21.0761 23.8832 21.2313C23.8167 21.3865 23.7825 21.5528 23.7825 21.7208C23.7825 21.8888 23.8167 22.0551 23.8832 22.2103C23.9497 22.3655 24.0472 22.5065 24.17 22.6253C24.2929 22.7441 24.4387 22.8383 24.5992 22.9026C24.7598 22.9669 24.9318 23 25.1055 23C25.2793 23 25.4513 22.9669 25.6118 22.9026C25.7724 22.8383 25.9182 22.7441 26.0411 22.6253L36.6118 12.4045C36.7349 12.2859 36.8325 12.1449 36.8991 11.9897C36.9657 11.8344 37 11.668 37 11.5C37 11.332 36.9657 11.1656 36.8991 11.0103C36.8325 10.8551 36.7349 10.7141 36.6118 10.5955L26.0411 0.374669C25.9182 0.255883 25.7724 0.161656 25.6118 0.0973711C25.4513 0.033084 25.2793 -2.79004e-06 25.1055 -2.77485e-06C24.9318 -2.75966e-06 24.7598 0.033084 24.5992 0.0973712C24.4387 0.161657 24.2929 0.255883 24.17 0.374669C24.0472 0.493455 23.9497 0.634475 23.8832 0.789676C23.8167 0.944877 23.7825 1.11122 23.7825 1.27921C23.7825 1.4472 23.8167 1.61354 23.8832 1.76874C23.9497 1.92394 24.0472 2.06496 24.17 2.18375L32.4866 10.2224L1.32135 10.2224C0.970904 10.2224 0.634814 10.357 0.387015 10.5966C0.139212 10.8362 2.77971e-06 11.1612 2.80934e-06 11.5Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.80934e-06 11.5C2.83896e-06 11.8388 0.139213 12.1638 0.387015 12.4034C0.634814 12.643 0.970904 12.7776 1.32135 12.7776L32.4866 12.7776L24.17 20.8162C24.0472 20.935 23.9497 21.0761 23.8832 21.2313C23.8167 21.3865 23.7825 21.5528 23.7825 21.7208C23.7825 21.8888 23.8167 22.0551 23.8832 22.2103C23.9497 22.3655 24.0472 22.5065 24.17 22.6253C24.2929 22.7441 24.4387 22.8383 24.5992 22.9026C24.7598 22.9669 24.9318 23 25.1055 23C25.2793 23 25.4513 22.9669 25.6118 22.9026C25.7724 22.8383 25.9182 22.7441 26.0411 22.6253L36.6118 12.4045C36.7349 12.2859 36.8325 12.1449 36.8991 11.9897C36.9657 11.8344 37 11.668 37 11.5C37 11.332 36.9657 11.1656 36.8991 11.0103C36.8325 10.8551 36.7349 10.7141 36.6118 10.5955L26.0411 0.374669C25.9182 0.255883 25.7724 0.161656 25.6118 0.0973711C25.4513 0.033084 25.2793 -2.79004e-06 25.1055 -2.77485e-06C24.9318 -2.75966e-06 24.7598 0.033084 24.5992 0.0973712C24.4387 0.161657 24.2929 0.255883 24.17 0.374669C24.0472 0.493455 23.9497 0.634475 23.8832 0.789676C23.8167 0.944877 23.7825 1.11122 23.7825 1.27921C23.7825 1.4472 23.8167 1.61354 23.8832 1.76874C23.9497 1.92394 24.0472 2.06496 24.17 2.18375L32.4866 10.2224L1.32135 10.2224C0.970904 10.2224 0.634814 10.357 0.387015 10.5966C0.139212 10.8362 2.77971e-06 11.1612 2.80934e-06 11.5Z" fill="black"/>
<path d="M32.4866 12.7776L67.9312 49.4475L158.632 -38.2224L32.4866 -38.2224L32.4866 12.7776ZM24.17 20.8162L-11.2746 -15.8536L-11.2804 -15.848L24.17 20.8162ZM25.1055 23L25.1055 -28L25.1055 23ZM26.0411 22.6253L61.4915 59.2896L26.0411 22.6253ZM36.6118 12.4045L1.20773 -24.3045L1.18454 -24.2821L1.16138 -24.2597L36.6118 12.4045ZM37 11.5L-14 11.5L37 11.5ZM36.6118 10.5955L1.16139 47.2597L1.18454 47.2821L1.20773 47.3045L36.6118 10.5955ZM26.0411 0.374669L61.4915 -36.2896L61.4915 -36.2896L26.0411 0.374669ZM25.1055 -2.77485e-06L25.1055 51L25.1055 -2.77485e-06ZM24.17 2.18375L-11.2804 38.848L-11.2746 38.8536L24.17 2.18375ZM32.4866 10.2224L32.4866 61.2224L158.632 61.2224L67.9312 -26.4475L32.4866 10.2224ZM-51 11.5C-51 25.9295 -45.0557 39.4062 -35.0634 49.0677L35.8374 -24.2609C45.3341 -15.0786 51 -2.2518 51 11.5L-51 11.5ZM-35.0634 49.0677C-25.1296 58.6725 -12.0116 63.7776 1.32135 63.7776L1.32134 -38.2224C13.9534 -38.2224 26.3993 -33.3866 35.8374 -24.2609L-35.0634 49.0677ZM1.32135 63.7776L32.4866 63.7776L32.4866 -38.2224L1.32134 -38.2224L1.32135 63.7776ZM-2.95803 -23.8923L-11.2746 -15.8536L59.6146 57.4861L67.9312 49.4475L-2.95803 -23.8923ZM-11.2804 -15.848C-16.2164 -11.0754 -20.2269 -5.31585 -22.9961 1.14831L70.7626 41.3142C68.1264 47.468 64.3108 52.9455 59.6205 57.4805L-11.2804 -15.848ZM-22.9961 1.14831C-25.7671 7.61664 -27.2175 14.6125 -27.2175 21.7208L74.7825 21.7208C74.7825 28.4931 73.4006 35.1563 70.7626 41.3142L-22.9961 1.14831ZM-27.2175 21.7208C-27.2175 28.8291 -25.7671 35.825 -22.9961 42.2933L70.7626 2.12737C73.4006 8.28527 74.7825 14.9484 74.7825 21.7208L-27.2175 21.7208ZM-22.9961 42.2933C-20.2269 48.7574 -16.2165 54.5169 -11.2804 59.2896L59.6204 -14.0389C64.3108 -9.50384 68.1264 -4.02632 70.7626 2.12737L-22.9961 42.2933ZM-11.2804 59.2896C-6.34791 64.0588 -0.584679 67.7546 5.63791 70.2468L43.5606 -24.4415C49.4621 -22.0779 54.9337 -18.5705 59.6204 -14.0389L-11.2804 59.2896ZM5.63791 70.2468C11.858 72.7379 18.4682 74 25.1055 74L25.1055 -28C31.3954 -28 37.6615 -26.8041 43.5606 -24.4415L5.63791 70.2468ZM25.1055 74C31.7428 74 38.353 72.7379 44.5732 70.2468L6.65049 -24.4415C12.5496 -26.8041 18.8157 -28 25.1055 -28L25.1055 74ZM44.5732 70.2468C50.7958 67.7546 56.559 64.0588 61.4915 59.2896L-9.40937 -14.0389C-4.7226 -18.5705 0.748936 -22.0779 6.65049 -24.4415L44.5732 70.2468ZM61.4915 59.2896L72.0622 49.0688L1.16138 -24.2597L-9.40937 -14.0389L61.4915 59.2896ZM72.0159 49.1135C76.9655 44.3399 80.9878 38.5752 83.7655 32.1029L-9.96727 -8.12361C-7.32284 -14.2854 -3.4958 -19.7681 1.20773 -24.3045L72.0159 49.1135ZM83.7655 32.1029C86.545 25.6263 88 18.6197 88 11.5L-14 11.5C-14 4.71641 -12.6136 -1.95744 -9.96727 -8.12361L83.7655 32.1029ZM88 11.5C88 4.38031 86.545 -2.62634 83.7655 -9.10294L-9.96727 31.1236C-12.6136 24.9574 -14 18.2836 -14 11.5L88 11.5ZM83.7655 -9.10294C80.9878 -15.5752 76.9655 -21.3399 72.0159 -26.1136L1.20773 47.3045C-3.49579 42.7681 -7.32284 37.2854 -9.96727 31.1236L83.7655 -9.10294ZM72.0622 -26.0688L61.4915 -36.2896L-9.40937 37.0389L1.16139 47.2597L72.0622 -26.0688ZM61.4915 -36.2896C56.5591 -41.0587 50.7959 -44.7546 44.5732 -47.2468L6.6505 47.4415C0.748842 45.0779 -4.72267 41.5705 -9.40937 37.0389L61.4915 -36.2896ZM44.5732 -47.2468C38.3528 -49.738 31.7426 -51 25.1055 -51L25.1055 51C18.816 51 12.5498 49.8042 6.6505 47.4415L44.5732 -47.2468ZM25.1055 -51C18.4685 -51 11.8583 -49.738 5.6379 -47.2468L43.5606 47.4415C37.6613 49.8042 31.3951 51 25.1055 51L25.1055 -51ZM5.6379 -47.2468C-0.584788 -44.7546 -6.34799 -41.0587 -11.2804 -36.2896L59.6205 37.0389C54.9338 41.5705 49.4622 45.0779 43.5606 47.4415L5.6379 -47.2468ZM-11.2804 -36.2896C-16.2164 -31.517 -20.2269 -25.7574 -22.9961 -19.2933L70.7626 20.8726C68.1264 27.0264 64.3108 32.5039 59.6205 37.0389L-11.2804 -36.2896ZM-22.9961 -19.2933C-25.7671 -12.8249 -27.2175 -5.82909 -27.2175 1.27921L74.7825 1.27921C74.7825 8.05153 73.4006 14.7147 70.7626 20.8726L-22.9961 -19.2933ZM-27.2175 1.27921C-27.2175 8.38752 -25.7671 15.3834 -22.9961 21.8517L70.7626 -18.3142C73.4006 -12.1563 74.7825 -5.49312 74.7825 1.27921L-27.2175 1.27921ZM-22.9961 21.8517C-20.2269 28.3159 -16.2164 34.0754 -11.2804 38.848L59.6204 -34.4805C64.3108 -29.9455 68.1264 -24.468 70.7626 -18.3142L-22.9961 21.8517ZM-11.2746 38.8536L-2.95803 46.8923L67.9312 -26.4475L59.6146 -34.4861L-11.2746 38.8536ZM32.4866 -40.7776L1.32134 -40.7776L1.32135 61.2224L32.4866 61.2224L32.4866 -40.7776ZM1.32134 -40.7776C-12.0114 -40.7776 -25.1295 -35.6727 -35.0634 -26.0677L35.8374 47.2609C26.3991 56.3867 13.9532 61.2224 1.32135 61.2224L1.32134 -40.7776ZM-35.0634 -26.0677C-45.0557 -16.4061 -51 -2.92937 -51 11.5L51 11.5C51 25.2517 45.3342 38.0785 35.8374 47.2609L-35.0634 -26.0677Z" fill="black" mask="url(#path-1-inside-1_19_671)"/>
</svg>
</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;




