import { useEffect, useState } from 'react';
import filter from '../../../imgs/filter.svg';
import './filter.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import axios from 'axios'

export const Filter = ({priceRange, setPriceRange, setSelect, filterProduct}) => {

    const [categorys, setCategorys] = useState();

    useEffect(() => {
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => setCategorys(data))
        .catch((error) => console.log(error))
    }, []);

    console.log(categorys);
    

    return (
        <aside className='asideBlock'>
            <div className='title'>
                <h2>Filter</h2>
                <img src={filter} alt="" />
            </div>

            <div className='category'>
                <input className='input' type='radio' value='all' id='all' name="category" />
                <label htmlFor='all' onClick={() => setSelect('all')}>all</label>
               
                    {
                        categorys &&
                        categorys.map((item, index) => (
                            <div key={index}>
                                <input 
                                    type='radio' 
                                    name="category" 
                                    value={item} 
                                    id={item}
                                    />
                                <label htmlFor={item} onClick={() => setSelect(item)}>
                                    {item}
                                </label>
                            </div>
                        ))
                    }

            </div>

            <div className='price'>
                <h2>Price</h2>

                <h4>${priceRange[0]} - ${priceRange[1]}</h4>
                <Slider 
                    range
                    min={0}
                    max={500}
                    value={priceRange}
                    onChange={setPriceRange}
                    allowCross={false}
                    className='custom-slider'
                />
            </div>

            <div className='filterButton'>
                <button onClick={filterProduct}>Go filter</button>
            </div>

        </aside>
    );
}

