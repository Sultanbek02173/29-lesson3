import { useParams } from "react-router-dom";
import { InfoProduct, PhotoSection } from "../widgets";
import { useEffect, useState } from "react";
import axios from "axios";

export const DetailPage = ({addProduct}) => {
    const [prod, setProd] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then(({data}) => setProd(data))
        .catch((error) => console.log(error))
    }, [id]);
    
    return (
        <div className="container flexCont">
            <PhotoSection prod={prod} />
            <InfoProduct prod={prod} addProduct={addProduct} />
        </div>
    );
}

