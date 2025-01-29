import { useState } from "react";
import { Casual, Filter } from "../widgets";

export const CategoryPage = () => {
    const [priceRange, setPriceRange] = useState([0, 500])
    return (
        <div className="container flexCont">
            <Filter priceRange={priceRange} setPriceRange={setPriceRange} />
            <Casual />
        </div>
    );
}

