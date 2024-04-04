import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Cart from "./components/Cart";
import mockedCards from './mock/MockedCards';

function App() {

  const [likedCards, setLikedCards] = useState([])

  return (
    <div className="App">
      <h1> <b>Sports Cards Shop</b></h1>
      <div className="Cards">
        <CardsContainer likedCards={likedCards} setLikedCards={setLikedCards} cards={mockedCards} />
        <Cart cards={mockedCards} likedCards={likedCards} />
      </div>
    </div>
  );
}

export default App;
