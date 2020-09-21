import React from 'react'
import checkout from './checkout.jpg'
import { useStateValue } from './StateProvider'
import ProductCheckout from './ProductCheckout'

function Checkout() {
    const [{ basket }] = useStateValue()
    basket.reverse()

    return (
        <div className="checkout">
            <img src={ checkout } />
            { basket.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2>Your shopping basket</h2>
                    {
                        basket.map((item, index) => {
                            return <ProductCheckout key={index} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
                        })
                    }
                </div>
            ) }

        </div>
    )
}
export default Checkout