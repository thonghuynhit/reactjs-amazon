import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                timestamp: new Date(),
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <p>{ title }</p>
            <p className="product__price">
                <small>$</small>
                <strong>{ price }</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating) 
                        .fill()
                        .map((item, index) => <StarIcon key={ index } style={{ color: "#F79F1F" }}></StarIcon>)
                }
            </div>
            <img src={ image } />
            <button onClick={ addToBasket }>Add to cart</button>
        </div>
    )
}
export default Product