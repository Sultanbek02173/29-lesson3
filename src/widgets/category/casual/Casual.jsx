import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../../../entities'
import './casual.css'

export const Casual = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(({data}) => setProducts(data))
        .catch((error) => console.log(error))
    }, [])
    console.log(products);
    
    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="casualCont">
                {
                    products && 
                    products.map((item) => (
                        <div key={item.id}>
                            <Card img={item.image} title={item.title} grade={item?.rating?.rate} price={item.price} />
                        </div>
                    ))
                }
            </div>

            <div className="pagination">
                <div className='btnPrevious'>
                    <button>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Previous
                    </button>
                </div>
                <div>
                    <span>Page 1</span>
                </div>
                <div className='btnNext'>
                    <button>
                        Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

