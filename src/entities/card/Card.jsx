import './card.css';
import { Rating } from 'react-simple-star-rating';

export const Card = ({ img, title, grade, price }) => {
    return (
        <div className="product">
            <div className="item">
                <img className="image" src={img} alt="Product img" />
            </div>
            <div className="description">
                <h3>{title}</h3>
                <div className="rating">
                    <Rating
                        initialValue={grade}
                        readonly={true}
                        allowFraction={true}
                        size={19}
                        allowHover={false}
                    />
                    <p>{grade}/5</p>
                </div>
                
                <h3>${price}</h3>
            </div>
        </div>
    );
}

