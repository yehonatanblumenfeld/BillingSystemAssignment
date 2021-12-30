import axios from "axios";
import React, { useContext, useEffect, useState  } from "react";
import TransactionComponent from "./transactionComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { myContext } from "../../store/store";



const ShowTransactions = () => {
    const {afterChange , setAfterChange} =useContext(myContext);
    const [transactionsList, setTransactionsList] = useState([]);
    
    

    if(afterChange){
        console.log("after change = " , afterChange);
        axios.get('http://localhost:9000/transactions/getTransactions').then((response) => {
            setTransactionsList(response.data);
        });
        setAfterChange(false);
    }
   
    useEffect(() => {
        axios.get('http://localhost:9000/transactions/getTransactions').then((response) => {
            setTransactionsList(response.data);
        });
    }, []);

    return (
        <div className="container">
            {transactionsList.map((element) => {
                return <TransactionComponent key={element._id} propList={element} />
            })}
        </div>
    );
}
export default ShowTransactions;

