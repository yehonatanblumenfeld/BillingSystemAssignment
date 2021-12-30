import React from 'react'
import { useState } from 'react/cjs/react.development';

export const myContext = React.createContext();

const Store = ({children}) => {
    const[storeElement , setStoreElement] = useState({});
    const[afterChange , setAfterChange] = useState({});
    
    return (
        <myContext.Provider value={{storeElement , setStoreElement ,afterChange , setAfterChange}}>
            {children}
        </myContext.Provider>
    )
}
export default Store;
