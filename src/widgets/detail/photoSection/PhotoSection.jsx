import './photoSection.css';

export const PhotoSection = ({ prod }) => {
    return (
        <div className='photoCont'>
            <div className='photoFlex'>
                <div className='images'>
                    <div>
                        <img src={prod?.image} alt="" />     
                    </div>
                    <div>
                        <img src={prod?.image} alt="" />     
                    </div>
                    <div>
                        <img src={prod?.image} alt="" />     
                    </div>   
                </div>
                <div className='mainImg'>
                    <img src={prod?.image} alt="" />     
                </div>
            </div>
        </div>
    );
}

