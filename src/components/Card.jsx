import React, { useState } from "react";

import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as unlikedHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as likedHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card({ id, name, date, price,imagePath, liked, sport, setLikedCards }) {

    const onHeartClick = () => {
        if (liked) {
            setLikedCards(likedCards => likedCards.filter(cardId => cardId != id))
        } else {
            setLikedCards(likedCards => [...likedCards, id])
        }
    }
    return (
        <div className="card">
        <div className="image">
            <img src={imagePath} alt={name} />
        </div>
        <div className="description">
            <div className="info">
            <p>{name}</p>
            <p className='sub-info'><i>{sport}</i></p>

            <p className='sub-info'>${price}</p>
            </div>
            <button className="heart" onClick={onHeartClick}>
                <FontAwesomeIcon className="fa-lg" icon={liked ? likedHeart : unlikedHeart} />
                Cart
            </button>
        </div>
        </div>
    );
}
