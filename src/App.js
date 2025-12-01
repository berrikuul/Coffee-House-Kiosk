import './App.css';
import { useState } from 'react';




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
      count: 0
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



function App() {
  const [filterCoffees, setfilterCoffees] = useState("All"); 
  const [selectedCoffee, setSelectedCoffee] = useState([]);

  const CoffeeCategories = ({name, setfilterCoffees, filterCoffees}) =>{

  return (
    
    <li onClick={() => setfilterCoffees(name)} className={filterCoffees === name ? "selectedCoffee" : ""}>{name}</li> 
  )
  }

  const CoffeeCard = ({ coffee }) => {
  return (
    <div className="cardCoffee">
      <div className="imgWrapper">
        {coffee.count > 0 && (
          <span className="coffeeCounter">{coffee.count}</span>
        )}
        <img src={coffee.image} alt={coffee.name} />
      </div>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <div className="footerCoffeeCard">
        <button
          className={coffee.count > 0 ? "delCoffee" : "invisible"}
          onClick={() => DelCoffeeBasket(coffee)}>-</button>

        <span>{coffee.price}₽</span>

        <button
          className="addCoffee"
          onClick={() => AddCoffeeBasket(coffee)}>+</button>
      </div>
    </div>
  );
};
  const AddCoffeeBasket = (coffee) => {
  const exists = selectedCoffee.find(c => c.name === coffee.name);

  if (!exists) {
    setSelectedCoffee([...selectedCoffee, { ...coffee, count: 1 }]);
  } else {
    setSelectedCoffee(
      selectedCoffee.map(c =>
        c.name === coffee.name
          ? { ...c, count: c.count + 1 }
          : c
      )
    );
  }
};

  const DelCoffeeBasket = (coffee) => {
  const exists = selectedCoffee.find(c => c.name === coffee.name);
  if (!exists) return;

  if (exists.count === 1) {
    setSelectedCoffee(
      selectedCoffee.filter(c => c.name !== coffee.name)
    );
  } else {
    setSelectedCoffee(
      selectedCoffee.map(c =>
        c.name === coffee.name
          ? { ...c, count: c.count - 1 }
          : c
      )
    );
  }
};

  return (
    <div className="App">
      <div className="scrollButtom"></div>
      <header>
      <div className="searchContainer">
        <input
          className="searchInput"
          placeholder="Browse your favourite coffee here.."
        />

      <div className="searchIcon">
        <svg width="25" height="28" viewBox="0 0 32 33"  xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7234 3.57973C22.6911 5.56021 23.9227 8.15988 24.2121 10.9439C24.5015 13.7278 23.8311 16.5273 22.3132 18.874C22.5782 19.0959 22.799 19.3401 23.1082 19.5621C23.5498 19.9173 24.146 20.3612 24.8967 20.8718C25.6475 21.4045 26.1333 21.7375 26.3541 21.9151C27.2815 22.6032 27.9661 23.1803 28.4298 23.6465C29.1364 24.3568 29.7546 25.0893 30.2846 25.8662C30.8366 26.6432 31.2562 27.3979 31.5874 28.1748C31.8965 28.9517 32.0511 29.6843 31.9849 30.3946C31.9407 31.1049 31.6757 31.7042 31.1899 32.1926C30.7041 32.681 30.1079 32.9473 29.4013 32.9917C28.7168 33.0361 27.9661 32.9029 27.2153 32.57C26.4424 32.2592 25.6696 31.8152 24.9188 31.2603C24.146 30.7275 23.4173 30.106 22.7107 29.3957C22.247 28.9295 21.6729 28.2414 21.0104 27.3313C20.7896 27.0427 20.4584 26.5544 19.9726 25.8662C19.4868 25.1559 19.0893 24.601 18.736 24.1348C18.3827 23.6909 18.0957 23.3579 17.7645 23.0249C15.4725 24.2314 12.8574 24.6709 10.2997 24.2797C7.74198 23.8884 5.37528 22.6867 3.54406 20.8496C-1.18135 16.077 -1.18135 8.33004 3.54406 3.57973C4.67158 2.4449 6.01057 1.54464 7.48445 0.930397C8.95833 0.316159 10.5382 0 12.1337 0C13.7292 0 15.3091 0.316159 16.783 0.930397C18.2569 1.54464 19.5958 2.4449 20.7234 3.57973ZM17.6099 17.6975C19.0524 16.2367 19.862 14.2619 19.862 12.2035C19.862 10.1452 19.0524 8.17036 17.6099 6.70961C16.893 5.98676 16.0412 5.41325 15.1034 5.02192C14.1656 4.6306 13.1601 4.42917 12.1448 4.42917C11.1294 4.42917 10.1239 4.6306 9.18613 5.02192C8.24832 5.41325 7.39654 5.98676 6.67961 6.70961C5.96056 7.43031 5.39005 8.28658 5.00078 9.22933C4.61151 10.1721 4.41113 11.1828 4.41113 12.2035C4.41113 13.2243 4.61151 14.235 5.00078 15.1778C5.39005 16.1205 5.96056 16.9768 6.67961 17.6975C7.39654 18.4203 8.24832 18.9938 9.18613 19.3852C10.1239 19.7765 11.1294 19.9779 12.1448 19.9779C13.1601 19.9779 14.1656 19.7765 15.1034 19.3852C16.0412 18.9938 16.893 18.4203 17.6099 17.6975Z" fill="black" fill-opacity="0.3"/>
        </svg>
            </div>
          </div>
      <div><span className='busket'>
<svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 19.5C10.0523 19.5 10.5 19.0523 10.5 18.5C10.5 17.9477 10.0523 17.5 9.5 17.5C8.94772 17.5 8.5 17.9477 8.5 18.5C8.5 19.0523 8.94772 19.5 9.5 19.5ZM9.5 20.5C10.6046 20.5 11.5 19.6046 11.5 18.5C11.5 17.3954 10.6046 16.5 9.5 16.5C8.39543 16.5 7.5 17.3954 7.5 18.5C7.5 19.6046 8.39543 20.5 9.5 20.5Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 19.5C17.0523 19.5 17.5 19.0523 17.5 18.5C17.5 17.9477 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.9477 19.5 16.5 19.5ZM16.5 20.5C17.6046 20.5 18.5 19.6046 18.5 18.5C18.5 17.3954 17.6046 16.5 16.5 16.5C15.3954 16.5 14.5 17.3954 14.5 18.5C14.5 19.6046 15.3954 20.5 16.5 20.5Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.72386 3.22386 3.5 3.5 3.5H5.5C5.71767 3.5 5.91033 3.64082 5.97641 3.84822L9.36993 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15C17.5 15.2761 17.2761 15.5 17 15.5H9.00446C8.78679 15.5 8.59413 15.3592 8.52805 15.1518L5.13453 4.5H3.5C3.22386 4.5 3 4.27614 3 4Z" fill="#000000"/>
<path d="M8.5 13L6 6H19.3371C19.6693 6 19.9092 6.31795 19.8179 6.63736L18.1036 12.6374C18.0423 12.852 17.8461 13 17.6228 13H8.5Z" fill="#000000"/>
</svg></span></div>
      </header>
      <div className="coffeeContainer">
      <div className="categoryCoffee">
        <ul>
          {<CoffeeCategories name="All" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Cappucino" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Latte" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Americano" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Espresso" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Mocha" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Flat White" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
          {<CoffeeCategories name="Macchiato" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees} />}
          {<CoffeeCategories name="Irish Coffee" setfilterCoffees={setfilterCoffees} filterCoffees={filterCoffees}/>}
        </ul>
      </div>
      <div className="cardCoffee-container">
          {(filterCoffees === "All"
    ? Object.keys(coffeeMenu).flatMap(category =>
        coffeeMenu[category].map(coffeeItem => (
          <CoffeeCard key={coffeeItem.name} coffee={coffeeItem} />
        ))
      )
    : coffeeMenu[filterCoffees].map(coffeeItem => (
        <CoffeeCard key={coffeeItem.name} coffee={coffeeItem} />
      ))
  )}
      </div>
    </div>
    </div>
  );
}

export default App;
