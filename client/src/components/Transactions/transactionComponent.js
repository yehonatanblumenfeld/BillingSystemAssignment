import React, { useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './transactionComponent.css';
import { myContext } from "../../store/store";
import { useNavigate } from 'react-router-dom';


const TransactionComponent = (props) => {

    const id = props.propList._id;
    const navigate = useNavigate();
    const { setStoreElement } = useContext(myContext);
    
    const onEdit = async () => {

        const tran = await (await axios.get(`http://localhost:9000/transactions/getTransactionById/${id}`)).data
        console.log(tran);
        setStoreElement(tran);
        navigate('/updateTransaction');
    };

    const onDelete = async () => {
        await axios.delete(`http://localhost:9000/transactions/deleteTransaction/${id}`)
            .then(response => {
                alert(`Transactions of ${props.propList.first_name} ${props.propList.last_name}  has been deleted`);
            });
            window.location="/showTransactions" ;
    }
    return (

        <div className="mainDiv card border-secondary mb-2 " >
            <div className="card-body">
                <div className="card-title">
                    {props.propList.first_name + " " + props.propList.last_name}
                </div>
                <div className="contentDiv">
                    <div>
                        <p><strong>Customer id: </strong>{props.propList.customer_id}</p>
                        <p><strong>First Name: </strong>{props.propList.first_name}</p>
                        <p><strong>Last Name: </strong>{props.propList.last_name}</p>
                    </div>
                    <div>
                        <p><strong>Email: </strong>{props.propList.email}</p>
                        <p><strong>Gender: </strong>{props.propList.gender}</p>
                        <p><strong>Country: </strong>{props.propList.country}</p>
                    </div>
                    <div>
                        <p><strong>City: </strong>{props.propList.city}</p>
                        <p><strong>Street: </strong>{props.propList.street}</p>
                        <p><strong>Currency: </strong>{props.propList.currency}</p>
                    </div>
                    <div>
                        <p><strong>Credit card type: </strong>{props.propList.cerdit_card_type}</p>
                        <p><strong>Credit card number: </strong>{props.propList.cerdit_card_number}</p>
                    </div>

                </div>
                <div className="btns">
                    <button onClick={onEdit} className="btn btn-primary ">Edit</button>
                    <button onClick={onDelete} className="btn btn-secondary ">Delete</button>
                </div>
            </div>
        </div>

    );
}
export default TransactionComponent;