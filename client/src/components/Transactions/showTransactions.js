import axios from "axios";
import React, { useContext, useEffect, useState  } from "react";
import TransactionComponent from "./transactionComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { myContext } from "../../store/store";



const ShowTransactions = () => {
    const [transactionsList, setTransactionsList] = useState([]);
     
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

