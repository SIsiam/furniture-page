import React, { useEffect, useState } from 'react';
import FurnitureItem from '../FurnitureItem/FurnitureItem';


const data = [
    {   
        "id" : 1,
        "name" : "Upholstered Sofa",
        "images" : ["https://i.ibb.co/jbz25LS/martin-pechy-bpg-ngqr-Pc8-unsplash-Easy-Resize-com.jpg" , "https://i.ibb.co/0cdHCtf/kam-idris-nylc-MEg-K8-EQ-unsplash-Easy-Resize-com.jpg", "https://i.ibb.co/VNfbvYh/inside-weather-db-H-vy7v-ICE-unsplash-Easy-Resize-com.jpg", "https://i.ibb.co/V3x49Rt/andrea-davis-VOWXF7ls-AN0-unsplash-Easy-Resize-com-1.jpg"],
        
        "type" : "Breakfast",
        "price": 567,
        "shortDescription" : "Kyara Upholstered Standard Bed",
        "shortDescription2" : "by Zipcode Design",
        "fullDescription" : "Anchor your living room in sophisticated style and impeccable comfort with a single addition. Perfectly balancing wood accents with fabric upholstery."
    }
    
]
const Furniture = () => {

    return (
        <div>
            {
                data.map(Furniture => <FurnitureItem key={Furniture.id} Furniture={Furniture} />)
            }
        </div>
    );
};

export default Furniture;