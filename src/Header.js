import React from 'react'
import './Header.css'
import logo from './logopage.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider'

function Header() {
    const [{ basket }, dispatch ] = useStateValue()
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={ logo } alt="Practice reactjs with the Amazon project" />
            </Link>
            <div className="search">
                <input type="text" />
                <SearchIcon className="icon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello</span>
                        <span>Sign In</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Yours</span>
                        <span>Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="cart">
                        <span>
                            <ShoppingCartIcon></ShoppingCartIcon>
                            <span>{ basket?.length }</span>
                        </span>
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header