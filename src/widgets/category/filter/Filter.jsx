import filter from '../../../imgs/filter.svg';
import './filter.css'
export const Filter = () => {
    return (
        <aside className='asideBlock'>
            <div className='title'>
                <h2>Filter</h2>
                <img src={filter} alt="" />
            </div>

            <div className='category'>
                <input className='input' type='radio' value='all' id='all' name="category" />
                <label htmlFor='all'>all</label>
               
                        <div>
                            <input 
                                type='radio' 
                                name="category" 
                                value={'all'} 
                                />
                            <label>
                                all
                            </label>
                        </div>

            </div>

            <div className='price'>
                <h2>Price</h2>

                <h4>$0 - $500</h4>
                <input type="range" min={0} max={500} />
            </div>

            <div className='filterButton'>
                <button>Go filter</button>
            </div>

        </aside>
    );
}

