import React from 'react'
import imgHome from './imgHome.jpg'

import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img src={ imgHome } alt="" />
            <div className="home__top">
                <Product id={1} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SY400_.jpg" />
                <Product id={2} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={3} image="https://m.media-amazon.com/images/I/71YGe6bOE0L._AC_SY400_.jpg" />
            </div>
            <div className="home__middle">
                <Product id={3} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SY400_.jpg" />
                <Product id={4} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={4} image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY400_.jpg" />
                <Product id={5} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={3} image="https://m.media-amazon.com/images/I/91xxqc9IwcL._AC_SY400_.jpg" />
            </div>
            <div className="home__bottom">
                <Product id={6} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={3} image="https://m.media-amazon.com/images/I/71+wvccA3ML._AC_SY400_.jpg" />
                <Product id={7} title="limitToLast limitToLast limitToLast limitToLast" price={100000} rating={4} image="https://m.media-amazon.com/images/I/81r-pSMQ1LL._AC_SY400_.jpg" />
            </div>


        </div>
    )
}
export default Home