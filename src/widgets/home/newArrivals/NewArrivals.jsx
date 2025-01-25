import './newArrivals.css'
import prod from '../../../imgs/home/image7.jpg';

export const NewArrivals = () => {
    return (
        <div id='on-newArrivals' className='arrivalsCont'>
            <div className='container'>
                <h2>NEW ARRIVALS</h2>
                <div className='flexItem'>
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
            </div>

            <div className='button'>
                <button>View All</button>
            </div>
        </div>
    );
}
