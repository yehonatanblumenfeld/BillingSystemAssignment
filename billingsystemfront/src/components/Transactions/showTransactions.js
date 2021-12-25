import axios from "axios";
import React, { useEffect, useState } from "react";
import TransactionComponent from "./transactionComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowTransactions = () => {
    const [transactionsList, setTransactionsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [transPerPage, setTransPerPage] = useState(10);
    useEffect(() => {
        const fetchTransactions = async () => {
            setLoading(true);
            await axios.get('http://localhost:9000/transactions/getTransactions').then((response) => {
                setTransactionsList(response.data);
                setLoading(false);
            })
        };
        fetchTransactions();
},[]);
    //get current posts
    const indexOfLastTrans = currentPage * transPerPage;
    const indexOfirstTrans = indexOfLastTrans - transPerPage;
    const currentTrans = transactionsList.slice(indexOfirstTrans , indexOfLastTrans)
    
    return (
        <div className="container">
            {transactionsList.map((element) => {
                return <TransactionComponent  propList={element} />
            })}
        </div>
    );
}
export default ShowTransactions;

