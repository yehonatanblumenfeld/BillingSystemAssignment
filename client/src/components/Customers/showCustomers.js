import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CustomerComponent from "./customerComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { myContext } from "../../store/store";

const ShowCustomers = () => {
      const [customersList, setCustomersList] = useState([]);
      const {afterChange , setAfterChange} =useContext(myContext);

      if(afterChange){
            axios.get('http://localhost:9000/customers/getCustomers').then((response) => {
                  setCustomersList(response.data);
            });
            setAfterChange(false);
        }

      useEffect(async () => {
            await axios.get('http://localhost:9000/customers/getCustomers').then((response) => {
                  setCustomersList(response.data);
            });
      }, [])

      return (
            <div className="container">
                  {customersList.map((element) => {
                        return <CustomerComponent key={element._id} propList={element} />
                  })}
            </div>
      );
}
export default ShowCustomers; 