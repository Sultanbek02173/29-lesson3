import { Card } from "../entities";

export const Cart = ({cartData}) => {
    console.log(cartData);
    
    return (
        <div className="container">
            {
                cartData &&
                cartData.map((product) => (
                    <div key={product.id}>
                        <Card img={product.image} title={product.title} grade={product?.rating?.rate} price={product.price}/>
                    </div>
                ))
            }
        </div>
    );
}
