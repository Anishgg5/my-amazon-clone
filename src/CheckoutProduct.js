import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({id, title, image, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>

            <div className="checkoutProduct__info"> 
                <p className="checkoutProduct__title">{title}</p>
                <p className="chekoutProduct__price">
                   <small>$</small>
                   <strong>{price}</strong>
                </p>

                <div className="chekoutProduct_rating">
               {Array(rating)
                   .fill()
                   .map((_, i) =>(
                    <p>⭐️</p>
                   ))}
                </div>

                <button>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct
