import './header.css';
import cart from '../../imgs/cart.svg';
import user from '../../imgs/user.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='headerCont flexItem'>
                    <h2 className='shopName'>SHOP.CO</h2>
                    <div className='links flexItem'>
                        <p><Link to={'/'}>Shop</Link></p>
                        <p><Link to={'/category'}>On Sale</Link></p>
                        <p><Link to={'/cart'}>New Arrivals</Link></p>
                        <p><Link to={'/detail'}>Brands</Link></p>
                    </div>

                    <div className='input'>
                        <input type="text" placeholder='Search for products...' />
                    </div>
                    <div className='icons flexItem'>
                        <img src={cart} alt="" />
                        <img src={user} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}
