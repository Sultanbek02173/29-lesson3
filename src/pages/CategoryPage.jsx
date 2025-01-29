import { Casual, Filter } from "../widgets";
import { useEffect, useState } from "react";
import axios from "axios";

export const CategoryPage = () => {
    const [products, setProducts] = useState();
    const [filtered, setFiltered] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 500])
    const [select, setSelect] = useState('all');

    const filterProduct = () => {
        if(select === 'all'){
            const filter = products.filter((prod) => prod.price >= priceRange[0] && prod.price <= priceRange[1])
            setFiltered(filter);
        }else{
            const filter = products.filter((prod) => prod.price >= priceRange[0] && prod.price <= priceRange[1] && prod.category === select)
            setFiltered(filter);
        }
    }

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(({data}) => setProducts(data))
        .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        if(products) filterProduct()
    })
    
    return (
        <div className="container flexCont">
            <Filter priceRange={priceRange} setPriceRange={setPriceRange} setSelect={setSelect} filterProduct={filterProduct} />
            <Casual products={filtered}/>
        </div>
    );
}

