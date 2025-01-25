import './header.css';
import cart from '../../imgs/cart.svg';
import user from '../../imgs/user.svg';
import searchIcon from '../../imgs/Vector.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <div>
                <Link to={'/'}><h2>SHOP.CO</h2></Link>
            </div>
            <div className='links'>
                <div className='shopLinks'>
                    <p>Shop</p>
                </div>
            
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
