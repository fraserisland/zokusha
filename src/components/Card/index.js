import React from 'react';

import AddBtn from '../addBtn'
import './styles.css'

const Card = (props) => {
    return ( 
        <div className="card__container"> 
            <img className="card__img"
                title={props.product.name}
                src={`/images/${props.product.image}`} 
            />
            <p className="card__title">{props.product.type}</p> 
            <p className="card__name">{props.product.name}</p> 
            <div className="card__desc">{props.product.description}</div>
            <div className="card__price-button">
                { props.addToCart ?
                    <AddBtn 
                        cartItem={props.cartItem} 
                        product={props.product}
                        addToCart={props.addToCart} 
                    />
                    :
                    <p> quantity: {props.product.quantity} </p>
                }
                <p className="card__price">${props.product.price}</p>
            </div>
        </div>
     );
}
 
export default Card;