import './TopSelling.css';
import prod from '../../../imgs/home/image7.jpg';

export const TopSelling = () => {
    return (
        <div id='on-sale' className="container">
            <h2 className='title'>TOP SELLING</h2>
            <div className='products'>
                <div className="product">
                    <div className="item">
                        <img className="image" src={prod} alt="Product img" />
                    </div>
                    <div className="description">
                        <h3>T-SHIRT WITH TAPE DETAILS</h3>
                        <div className="rating">
                            
                            <p>4.5/5</p>
                        </div>
                        
                        <h3>$500</h3>
                    </div>
                </div>
            </div>
            <div className='buttonSel'>
                <button>View All</button>
            </div>
        </div>
    );
}

