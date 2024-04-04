import React, { useState, useEffect } from 'react'
import Card from  './Card'
import { Dropdown } from 'react-bootstrap';

import './CardsContainer.scss'

export default function CardsContainer({likedCards, setLikedCards, cards}) {
  const filters = ["All", "Basketball", "Baseball", "Soccer"];
  const sortMap = {"AZ": "Name: A-Z", "ZA": "Name: Z-A", "LH": "Price: Low-High", "HL": "Price: High-Low"}
  const [activeFilters, setActiveFilters] = useState(['All']);
  const [selectedSort, setSelectedSort] = useState("");
  

  const handleSelect = (e) => {
    setSelectedSort(e);
  } 

  const toggleFilter = (filter) => {
    setActiveFilters((prevFilters) => {
      if (filter !== 'All' && prevFilters.includes('All')) {
        return [filter];
      }
      if (filter === 'All') {
        return ['All'];
      }
      if (prevFilters.includes(filter)) {
        const newFilters = prevFilters.filter((f) => f !== filter);
        return newFilters.length > 0 ? newFilters : ['All'];
      } else {
        return [...prevFilters, filter];
      }
    });
  }

  const handleReset = () => {
    setActiveFilters(["All"])
    setSelectedSort("")
  }

  const sortCards = (cards) => {
    console.log('in sort cards')
    return [...cards].sort((a,b) => {
      switch(selectedSort) {
        case 'AZ':
          return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
        case 'ZA':
          return b.name.toUpperCase().localeCompare(a.name.toUpperCase());
        case 'LH':
          return a.price - b.price;
        case 'HL':
          return b.price - a.price;
        default:
          return cards
      }
    })
  }
  
  return (
    <div className="shopping-container">
      <div className="filters">
        {filters.map((filter) => (
          <button className={activeFilters.includes(filter) ? "active" : ""} onClick={() => toggleFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <div className="extras">
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {(selectedSort && sortMap[selectedSort]) || "Sort By"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="AZ">Name: A-Z</Dropdown.Item>
            <Dropdown.Item eventKey="ZA">Name: Z-A</Dropdown.Item>
            <Dropdown.Item eventKey="LH">Price: Low-High</Dropdown.Item>
            <Dropdown.Item eventKey="HL">Price: High-Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="cards-container">
        {sortCards(cards).map((card) =>
          activeFilters.includes("All") || activeFilters.includes(card.sport) ? (
            <Card key={card.id} {...card} setLikedCards={setLikedCards} liked={likedCards.includes(card.id)} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
