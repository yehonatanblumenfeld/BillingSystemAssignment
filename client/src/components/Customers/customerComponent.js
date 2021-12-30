import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../Customers/customerComponent.css';
import { useNavigate } from "react-router";
import { myContext } from "../../store/store";


const CustomerComponent = (props) => {
    const { setStoreElement } = useContext(myContext);
    const id = props.propList._id
    const navigate = useNavigate();

    const onEdit = async () => {
        const cust = await (await axios.get(`http://localhost:9000/customers/getCustomerById/${id}`)).data
        console.log(cust);
        setStoreElement(cust);
        navigate("/updateCustomer")
    };

    const onDelete = async () => {
        await axios.delete(`http://localhost:9000/customers/deleteCustomer/${id}`)
            .then(response => {
                alert(`Customer of ${props.propList.first_name} ${props.propList.last_name}  has been deleted`);
            })
            window.location="/showCustomers" ;  
        };

    return (
        <div className="maindiv">
            <div className="card text-center">
                <div className="card-title">
                    {props.propList.first_name + " " + props.propList.last_name}
                </div>
                <p><strong>Customer id: </strong>{props.propList.customer_id}</p>
                <p><strong>First Name: </strong>{props.propList.first_name}</p>
                <p><strong>Last Name: </strong>{props.propList.last_name}</p>
                <p><strong>Email: </strong>{props.propList.email}</p>
                <p><strong>Gender: </strong>{props.propList.gender}</p>
                <p><strong>Country: </strong>{props.propList.country}</p>
                <div className="btns">
                    <button onClick={onEdit} className="btn btn-primary myBtn">Edit</button>
                    <button onClick={onDelete} className="btn btn-secondary myBtn">Delete</button>
                </div>

            </div>
        </div>
    );
}

export default CustomerComponent;