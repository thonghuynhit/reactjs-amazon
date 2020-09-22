import React from 'react'
import checkout from './checkout.jpg'
import { useStateValue } from './StateProvider'
import ProductCheckout from './ProductCheckout'

function Checkout() {
    const [{ basket }] = useStateValue()
    basket.sort((a, b) => b.timestamp - a.timestamp)

    return (
        <div className="checkout">
            <img src={ checkout } />
            {
                basket.length !== 0 && <>
                    <h2 style={{ textAlign: "center", color: "#cd9042" }}>
                    {   
                        "Total: " +
                        basket.reduce((item1, item2) => item1 + item2.price, 0)
                        + " $"
                    }
                </h2>
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <button style={{ padding: "10px 15px", backgroundColor: "#cd9042", border: "none" }}>Proceed to Checkout</button>
                </div>
                </>
            }
            { basket.length === 0 ? (
                <div>
                    <h2 style={{ textAlign: "center", color: "#cd9042" }}>Your shopping basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2 style={{ textAlign: "center", color: "#cd9042" }}>Your shopping basket</h2>
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