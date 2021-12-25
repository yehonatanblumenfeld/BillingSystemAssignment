import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../Transactions/transactionComponent.css';

const CustomerComponent = (props) => {
    const id = props.propList._id

    const onEdit = () => {
        window.location = `/updateCustomer/${id}`;
    }
    const onDelete = async () => {
        await axios.delete(`http://localhost:9000/customers/deleteCustomer/${id}`)
            .then(response => {
                alert(`Customer of ${props.propList.first_name} ${props.propList.last_name}  has been deleted`);
            })

    }


    return (
        <div className="card text-center">
            <div className="elementBox">
                <div className="card-title">
                    {props.propList.first_name + " " + props.propList.last_name}
                </div>
                <p><strong>Customer id: </strong>{props.propList.customer_id}</p>
                <p><strong>First Name: </strong>{props.propList.first_name}</p>
                <p><strong>Last Name: </strong>{props.propList.last_name}</p>
                <p><strong>Email: </strong>{props.propList.email}</p>
                <p><strong>Gender: </strong>{props.propList.gender}</p>
                <p><strong>Country: </strong>{props.propList.country}</p>
                <div>
                    <button onClick={onEdit} className="btn btn-primary myBtn">Edit</button>
                    <button onClick={onDelete} className="btn btn-secondary myBtn">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default CustomerComponent;