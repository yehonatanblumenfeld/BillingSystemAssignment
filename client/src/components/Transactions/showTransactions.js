import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import TransactionComponent from "./transactionComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { myContext } from "../../store/store";
import Pageination from "../Pageination";



const ShowTransactions = () => {
    const [transactionsList, setTransactionsList] = useState([]);
    //pageination
    const [page , setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const transPerPage = 5;
    const startIndex = (page - 1) * transPerPage;
    const selectedTrans = transactionsList.slice(startIndex, startIndex + transPerPage)

   
    useEffect(async () => {
        await axios.get('http://localhost:9000/transactions/getTransactions').then((response) => {
            setTransactionsList(response.data);      
            setTotalPages(Math.ceil(response.data.length / transPerPage));
           
        });
    }, []);

    const handleClick = num =>{
        setPage(num)
        console.log(page);
      }

    return (
        <div className="container">
            {selectedTrans.map((element) => {
                return <TransactionComponent key={element._id} propList={element} />
            })}
            <Pageination totalPages = {totalPages} handleClick={handleClick}/>
        </div>
    );
}
export default ShowTransactions;

