import './newArrivals.css'
import prod from '../../../imgs/home/image7.jpg';
import { Card } from '../../../entities';

export const NewArrivals = () => {
    return (
        <div id='on-newArrivals' className='arrivalsCont'>
            <div className='container'>
                <h2>NEW ARRIVALS</h2>
                <div className='flexItem'>
                    {/* <div className="product">
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
                    </div> */}

                    <Card 
                        img={prod} 
                        title={'T-SHIRT WITH TAPE DETAILS'} 
                        grade={4.5} 
                        price={500} 
                    />
                    <Card 
                        img={prod} 
                        title={'SKINNY FIT JEANS'} 
                        grade={3.5} 
                        price={240} 
                    />
                    <Card 
                        img={prod} 
                        title={'CHECKERED SHIRT'} 
                        grade={4.5} 
                        price={180} 
                    />
                    <Card 
                        img={prod} 
                        title={'SLEEVE STRIPED T-SHIRT'} 
                        grade={4.5} 
                        price={130} 
                    />
                    
                </div>
            </div>

            <div className='button'>
                <button>View All</button>
            </div>
        </div>
    );
}
