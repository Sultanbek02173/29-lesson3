import ReactStars from 'react-stars';
import './infoProduct.css';

export const InfoProduct = ({ prod, addProduct }) => {
    return (
        <div className="productInfo">
            <h2>{prod?.title}</h2>
            <div className="rating">
                <ReactStars
                    count={5}
                    value={prod?.rating?.rate}  
                    isHalf={true}          
                    size={30}       
                    edit={false}    
                    activeColor="#ffd700" 
                    inactiveColor="#ffffff"
                />
                <p>{prod?.rating?.rate}/5</p>
            </div>
            <h3>${prod?.price}</h3>
            <p>{prod?.description}</p>
            <button onClick={() => addProduct(prod)}>Buy</button>
        </div>
    );
}

