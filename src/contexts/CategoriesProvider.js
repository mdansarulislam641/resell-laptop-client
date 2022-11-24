import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
export const CategoryContext = createContext();
const CategoriesProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then(res=>setCategories(res.data))
        setLoading(false);
        
    },[loading])
    if(loading){
        return <><p>Loading......</p></>
    }
    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoriesProvider;