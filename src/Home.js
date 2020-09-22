import React from 'react'
import imgHome from './imgHome.jpg'

import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img src={ imgHome } alt="" />
            <div className="home__top">
                <Product id={1} title="limitToLast limitToLast limitToLast limitToLast" price={505} rating={5} image="https://m.media-amazon.com/images/I/4101CEZSB2L._AC_SY200_.jpg" />
                <Product id={2} title="limitToLast limitToLast limitToLast limitToLast" price={253} rating={3} image="https://m.media-amazon.com/images/I/71YGe6bOE0L._AC_SY400_.jpg" />
            </div>
            <div className="home__middle">
                <Product id={3} title="limitToLast limitToLast limitToLast limitToLast" price={220} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SY400_.jpg" />
                <Product id={4} title="limitToLast limitToLast limitToLast limitToLast" price={99} rating={4} image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY400_.jpg" />
                <Product id={5} title="limitToLast limitToLast limitToLast limitToLast" price={108} rating={3} image="https://m.media-amazon.com/images/I/91xxqc9IwcL._AC_SY400_.jpg" />
            </div>
            <div className="home__bottom">
                <Product id={6} title="limitToLast limitToLast limitToLast limitToLast" price={46} rating={3} image="https://m.media-amazon.com/images/I/71+wvccA3ML._AC_SY400_.jpg" />
                <Product id={7} title="limitToLast limitToLast limitToLast limitToLast" price={38} rating={4} image="https://m.media-amazon.com/images/I/81r-pSMQ1LL._AC_SY400_.jpg" />
                <Product id={8} title="limitToLast limitToLast limitToLast limitToLast" price={19} rating={2} image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY400_.jpg" />
            </div>
            <div className="home__bottom">
                <Product id={9} title="limitToLast limitToLast limitToLast limitToLast" price={11} rating={4} image="https://m.media-amazon.com/images/I/91JhcC33dTL._AC_SY400_.jpg" />
                <Product id={10} title="limitToLast limitToLast limitToLast limitToLast" price={45} rating={2} image="https://m.media-amazon.com/images/I/41sk0B8fLgL._AC_SY200_.jpg" />
                <Product id={11} title="limitToLast limitToLast limitToLast limitToLast" price={89} rating={1} image="https://m.media-amazon.com/images/I/414HE5yOdoL._AC_SY200_.jpg" />
            </div>


        </div>
    )
}
export default Home