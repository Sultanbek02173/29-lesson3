import './header.css';
import cart from '../../imgs/cart.svg';
import user from '../../imgs/user.svg';
import searchIcon from '../../imgs/Vector.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='header'>
            <div>
                <Link to={'/'}><h2>SHOP.CO</h2></Link>
            </div>
            <div className='links'>
                <div onClick={() => setOpen(!open)} className='shopLinks'>
                    <p>Shop</p>
                </div>

                {
                    open && (
                        <div className='pageLinks'>
                            <Link to={'/'}><p onClick={() => setOpen(!open)}>Home</p></Link>
                            <Link to={'/category'}><p onClick={() => setOpen(!open)}>Category</p></Link>
                            <Link to={'/cart'}><p onClick={() => setOpen(!open)}>Cart</p></Link>
                        </div>
                    )
                }
            
                <p><a href="#on-sale">On Sale</a></p>
                <p><a href="#on-newArrivals">New Arrivals</a></p>
                <p><a href="#on-brands">Brands</a></p>
            </div>
            <div className='inputSearch'>
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search for products...'/>
            </div>
            <div className='icons'>
                <img src={cart} alt="" />
                <img src={user} alt="" />
            </div>
            
        </header>
    );
}
