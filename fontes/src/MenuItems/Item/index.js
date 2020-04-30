import React, { useState } from 'react';

import './styles.scss';

const increasePriceFactor = 10 / 100;

export default function Item(props) {

    const { name, image } = props;
    const [price, setPrice] = useState(props.price);
    const [quantity, setQuantity] = useState(props.quantity);

    function buyItem() {
        setQuantity(quantity + 1);
        setPrice(price + (price * increasePriceFactor));
    }

    return (
        <div className="item-container" onClick={buyItem}>
            <img className="item-image" src={image} alt={name} />

            <div className="item-content" >
                <p className="item-title">{name}</p>
                <span className="item-price">R$ {price.toFixed(2)}</span>
            </div>

            <div className="item-quantity">
                {quantity}
            </div>
        </div>
    );
}