import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider'

function ProductCheckout({id, title, price, image, rating}) {
    const [{basket}, dispatch] = useStateValue()
    const removeBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
        console.log(id)
    }
    return (
        <div className="productcheckout">
            <img src={ image } />
            <div className="info">
                <p>
                    { title }
                </p>
                <p>
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div>
                    {Array(rating).fill().map((_, index) => <StarIcon key={index} style={{ color: "#F79F1F" }}  />)}
                </div>
                <button onClick={ removeBasket }>Remove from basket</button>
            </div>
        </div>
    )
}
export default ProductCheckout