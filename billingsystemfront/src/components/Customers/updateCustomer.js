import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Transactions/addTransactions.css';
import axios from 'axios';
import { useParams } from "react-router";



const UpdateCustomer = () => {

    const [customer, setCustomer] = useState({});

    const [customer_id, setCustomer_id] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const { id } = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:9000/customers/getCustomerById/${id}`)
        .then(response => {
            setCustomer(response.data)
            console.log(response);
        })
        console.log("finised init");
    },[]);
 
           
    const refreshParams =()=>{   
        console.log("in func");  
         setCustomer_id(customer.customer_id);
         //setCountry(customer.country);
         setFirst_name(customer.first_name);
         setLast_name(customer.last_name);
         setEmail(customer.email);
         setGender(customer.gender);
         
    }
    function onSubmit(event) {
        event.preventDefault();

        const updatedCustomer = {
            customer_id: customer_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            country: country,     
        };

        axios.put(`http://localhost:9000/customers/updateCustomer/${id}` , updatedCustomer)
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
                <button onClick={refreshParams}>refresh params</button>
                <div className="form-group">
                    <label for="customerId">Customer ID {id} </label>
                    <input onChange={(event) => { setCustomer_id(event.target.value) }} value={customer_id} required={true} type="text" className="form-control" id="customerId" placeholder="Enter ID" />
                </div>

                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input onChange={(event) => { setFirst_name(event.target.value) }} value={first_name} required={true} type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input onChange={(event) => { setLast_name(event.target.value) }} value={last_name} required={true} type="text" className="form-control" id="lastName" placeholder="Enter Last name" />
                </div>

                <div className="form-group">
                    <label for="Email">Email address</label>
                    <input onChange={(event) => { setEmail(event.target.value) }} value={email} required={true} type="email" className="form-control" id="Email" placeholder="Enter email" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="GenderSelect">Gender</label>
                    </div>
                    <select onChange={(event) => { setGender(event.target.value) }} value={gender} required={true} className="custom-select" id="GenderSelect">
                        <option selected>Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="country">Country</label>
                    <input onClick={(event => {event.target.value = customer.country})} onChange={(event) => { setCountry(event.target.value) }} value={country} required={true} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>

                <button type="submit" className="btn btn-primary myBtn">Update Customer</button>
            </form>
        </div>
    );
}

export default UpdateCustomer;