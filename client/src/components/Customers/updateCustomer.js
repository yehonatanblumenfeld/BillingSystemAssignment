import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Transactions/addTransactions.css';
import axios from 'axios';
import { useNavigate } from "react-router";
import { myContext } from "../../store/store";



const UpdateCustomer = () => {
    const { storeElement } = useContext(myContext);
     const[customer ,setCustomer] = useState(storeElement);
    const [customer_id, setCustomer_id] = useState(customer.customer_id);
    const [first_name, setFirst_name] = useState(customer.first_name);
    const [last_name, setLast_name] = useState(customer.last_name);
    const [email, setEmail] = useState(customer.email);
    const [gender, setGender] = useState(customer.gender);
    const [country, setCountry] = useState(customer.country);

    const navigate = useNavigate();
    const updateFormValues=(element)=>{
        setCustomer_id(element.customer_id);
        setFirst_name(element.first_name);
        setLast_name(element.last_name);
        setEmail(element.email);
        setGender(element.gender);
        setCountry(element.country);
    }
    useEffect(() => {
        const localElement = localStorage.getItem('formValues');
        updateFormValues(JSON.parse(localElement));
     },[]);

    useEffect(() => {     
        localStorage.setItem('formValues' , JSON.stringify(storeElement));
     });

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

        axios.put(`http://localhost:9000/customers/updateCustomer/${storeElement._id}`, updatedCustomer)
            .then(response => console.log(response.data));


        setCustomer_id('');
        setFirst_name('');
        setLast_name('');
        setEmail('');
        setGender('');
        setCountry('');

        window.location = '/showCustomers';
    }
    return (

        <div className="container form">
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label htmlFor="customerId">Customer ID </label>
                    <input onChange={(event) => { setCustomer_id(event.target.value) }} value={customer_id} required={true} type="text" className="form-control" id="customerId" placeholder="Enter ID" />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={(event) => { setFirst_name(event.target.value) }} value={first_name} required={true} type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={(event) => { setLast_name(event.target.value) }} value={last_name} required={true} type="text" className="form-control" id="lastName" placeholder="Enter Last name" />
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input onChange={(event) => { setEmail(event.target.value) }} value={email} required={true} type="email" className="form-control" id="Email" placeholder="Enter email" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="GenderSelect">Gender</label>
                    </div>
                    <select onChange={(event) => { setGender(event.target.value) }} value={gender} required={true} className="custom-select" id="GenderSelect">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input onClick={(event => { setCountry(event.target.value) })} onChange={(event) => { setCountry(event.target.value) }} value={country} required={true} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>

                <button type="submit" className="btn btn-primary myBtn">Update Customer</button>
            </form>
        </div>
    );
}

export default UpdateCustomer;