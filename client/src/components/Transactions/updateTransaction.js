import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Transactions/addTransactions.css';
import axios from 'axios';
import { myContext } from "../../store/store";
import { useNavigate } from "react-router";

const UpdateTransaction = () => {
    const { storeElement } = useContext(myContext);

    const [customer_id, setCustomer_id] = useState(storeElement.customer_id);
    const [first_name, setFirst_name] = useState(storeElement.first_name);
    const [last_name, setLast_name] = useState(storeElement.last_name);
    const [email, setEmail] = useState(storeElement.email);
    const [gender, setGender] = useState(storeElement.gender);
    const [country, setCountry] = useState(storeElement.country);
    const [city, setCity] = useState(storeElement.city);
    const [street, setStreet] = useState(storeElement.street);
    const [phone, setPhone] = useState(storeElement.phone);
    const [total_price, setTotal_price] = useState(storeElement.total_price);
    const [currency, setCurrency] = useState(storeElement.currency);
    const [cerdit_card_type, setCerdit_card_type] = useState(storeElement.cerdit_card_type);
    const [cerdit_card_number, setCerdit_card_number] = useState(storeElement.cerdit_card_number);

    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        


        const updatedTransaction = {
            customer_id: customer_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            country: country,
            city: city,
            street: street,
            phone: phone,
            total_price: total_price,
            currency: currency,
            cerdit_card_type: cerdit_card_type,
            cerdit_card_number: cerdit_card_number
        };

        axios.put(`http://localhost:9000/transactions/updateTransaction/${storeElement._id}`, updatedTransaction)
            .then(response => console.log(response.data));
        
        setCustomer_id('');
        setFirst_name('');
        setLast_name('');
        setEmail('');
        setGender('');
        setCountry('');
        setCity('');
        setStreet('');
        setPhone('');
        setTotal_price('');
        setCurrency('');
        setCerdit_card_type('');
        setCerdit_card_number('');

          
        window.location="/showTransactions";
    }

    return (

        <div className="container form">
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label htmlFor="customerId">Customer ID {storeElement._id} </label>
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
                    <input onChange={(event) => { setCountry(event.target.value) }} value={country} required={true} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>

                <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input onChange={(event) => { setCity(event.target.value) }} value={city} required={true} type="text" className="form-control" id="City" placeholder="Enter City" />
                </div>

                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input onChange={(event) => { setStreet(event.target.value) }} value={street} required={true} type="text" className="form-control" id="street" placeholder="Enter Street" />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input onChange={(event) => { setPhone(event.target.value) }} value={phone} required={true} type="tel" className="form-control" id="phone" placeholder="Enter Phone" />
                </div>

                <div className="form-group">
                    <label htmlFor="totalPrice">Total Price</label>
                    <input onChange={(event) => { setTotal_price(event.target.value) }} value={total_price} required={true} className="currency" type="number" min="0.00" step="0.01" id="totalPrice" placeholder="Enter Total Price" />
                </div>

                <div className="form-group">
                    <label htmlFor="currency">Currency</label>
                    <input onChange={(event) => { setCurrency(event.target.value) }} value={currency} required={true} type="text" maxLength="3" className="form-control" id="currency" placeholder="Enter Currency" />
                </div>

                <div className="form-group">
                    <label htmlFor="creditCardType">Credit card type</label>
                    <input onChange={(event) => { setCerdit_card_type(event.target.value) }} value={cerdit_card_type} required={true} type="text" className="form-control" id="creditCardType" placeholder="Enter Credit card type" />
                </div>

                <div className="form-group">
                    <label htmlFor="creditCardNumber">Credit Card Number</label>
                    <input onChange={(event) => { setCerdit_card_number(event.target.value) }} value={cerdit_card_number} required={true} type="number" minLength="8" maxLength="16" className="form-control" id="creditCardNumber" placeholder="Enter Credit Card Number" />
                </div>

                <button type="submit" className="btn btn-primary myBtn">Update transaction</button>
            </form>
        </div>
    );
}

export default UpdateTransaction;