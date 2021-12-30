import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CustomerComponent from "./customerComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { myContext } from "../../store/store";
import Pageination from "../Pageination";

const ShowCustomers = () => {
      const [customersList, setCustomersList] = useState([]);
       //pageination
    const [page , setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const custsPerPage = 5;
    const startIndex = (page - 1) * custsPerPage;
    const selectedCusts = customersList.slice(startIndex, startIndex + custsPerPage)
   
      useEffect(async () => {
            await axios.get('http://localhost:9000/customers/getCustomers').then((response) => {
                  setCustomersList(response.data);
                  setTotalPages(Math.ceil(response.data.length / custsPerPage));
            });
      }, [])
      
    const handleClick = num =>{
      setPage(num)
      console.log(page);
    }

      return (
            <div className="container">
                  {selectedCusts.map((element) => {
                        return <CustomerComponent key={element._id} propList={element} />
                  })}
                  <Pageination totalPages = {totalPages} handleClick={handleClick}/>
            </div>
      );
}
export default ShowCustomers; 