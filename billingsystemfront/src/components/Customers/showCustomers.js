import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerComponent from "./customerComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowCustomers=()=> {
        const [customersList , setCustomersList] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:9000/customers/getCustomers').then((response)=>{          
                setCustomersList(response.data);
              });
        })
         
        return(
            <div className="container">
               {customersList.map((element) =>{
                return <CustomerComponent propList = {element}/>
             })} 
            </div>  
      );
}       
export default ShowCustomers; 