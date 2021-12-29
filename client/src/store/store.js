import React from 'react'
import { useState } from 'react/cjs/react.development';

export const myContext = React.createContext();

const Store = ({children}) => {
    const[storeElement , setStoreElement] = useState({});
    return (
        <myContext.Provider value={{storeElement , setStoreElement}}>
            {children}
        </myContext.Provider>
    )
}
export default Store;
