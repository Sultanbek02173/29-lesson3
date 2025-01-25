import axios from 'axios';
import { useEffect } from 'react';

export const Casual = () => {
    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(({data}) => console.log(data))
        .catch((error) => console.log(error))
    }, [])
    return (
        <div className="container">
            <h1>Casual</h1>
        </div>
    );
}

