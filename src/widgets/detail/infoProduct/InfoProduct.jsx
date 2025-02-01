import ReactStars from 'react-stars';
import './infoProduct.css';

export const InfoProduct = () => {
    return (
        <div>
            <div className="productInfo">
                <h2>Mens Casual Premium Slim Fit T-Shirts</h2>
                <div className="rating">
                    <ReactStars
                        count={5}
                        value={4}  
                        isHalf={true}          
                        size={30}       
                        edit={false}    
                        activeColor="#ffd700" 
                        inactiveColor="#ffffff"
                    />
                    <p>4/5</p>
                </div>
                <h3>$22.3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse soluta sit totam repudiandae velit adipisci at ullam assumenda repellat.</p>
                <button>Buy</button>
            </div>
        </div>
    );
}

