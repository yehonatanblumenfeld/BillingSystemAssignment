import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Customers/addCustomer.css';
import axios from 'axios';
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";

const AddCustomer = () => {
    const [customer_id, setCustomer_id] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');

    const { id } = useParams();


    const onSubmit = (event) => {
        event.preventDefault();
        const newCustomer = {
            customer_id: customer_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            country: country
        };
        axios.post('http://localhost:9000/customers/addCustomer', newCustomer)
            .then(response => console.log(response.data));

        setCustomer_id('');
        setFirst_name('');
        setLast_name('');
        setEmail('');
        setGender('');
        setCountry('');

        window.location = "/showCustomers";
    }
    return (
        <div className="container form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="customerId">Customer ID {id}</label>
                    <input onChange={(event) => { setCustomer_id(event.target.value) }} required={true} type="text" className="form-control" id="customerId" placeholder="Enter ID" />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={(event) => { setFirst_name(event.target.value) }} required={true} type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={(event) => { setLast_name(event.target.value) }} required={true} type="text" className="form-control" id="lastName" placeholder="Enter Last name" />
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input onChange={(event) => { setEmail(event.target.value) }} required={true} type="email" className="form-control" id="Email" placeholder="Enter email" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="GenderSelect" >Gender</label>
                    </div>
                    <select onChange={(event) => { setGender(event.target.value) }} required={true} className="custom-select" id="GenderSelect">
                        <option  >choose..</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input onChange={(event) => { setCountry(event.target.value) }} required={true} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>

                <button type="submit" className="btn btn-primary myBtn">Add Customer</button>
            </form>
        </div>
    );
}

export default AddCustomer;