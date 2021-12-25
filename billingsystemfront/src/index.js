import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react/cjs/react.development';
import App from './App';

import elementContext from './store/elementContext';
import useGlobalElement from './store/useGlobalElement';





export const Index = () => {
  // const store = useGlobalElement();
  // const[elementToEdit , setElementToEdit] = useState();
  return (
    // <elementContext.Provider value={{elementToEdit,setElementToEdit}}>
      <App />   
    // </elementContext.Provider> 
  )
}

ReactDOM.render(
  <Index/>
 ,
  document.getElementById('root')
);


