import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Transactions/addTransactions.css';
import axios from 'axios';
import { useParams } from "react-router";



const AddTransaction = () => {

    const [transaction, setTransaction] = useState({});

    const [customer_id, setCustomer_id] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [phone, setPhone] = useState('');
    const [total_price, setTotal_price] = useState('');
    const [currency, setCurrency] = useState('');
    const [cerdit_card_type, setCerdit_card_type] = useState('');
    const [cerdit_card_number, setCerdit_card_number] = useState('');
    const [inUpdateMode, setInUpdateMode] = useState(false);
    const { id } = useParams();

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
        // if(this.inUpdateMode){
        //     axios.put('http://localhost:9000/transactions/UpdateTransaction' , transaction)
        //     .then(response => console.log(response.data));
        //     inUpdateMode = false;           

        // }else{
        axios.post('http://localhost:9000/transactions/addTransaction', updatedTransaction)
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

        window.location = "/showTransactions";


    }

    return (

        <div className="container form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label for="customerId">Customer ID {id} </label>
                    <input onChange={(event) => { setCustomer_id(event.target.value) }} required={true} type="text" className="form-control" id="customerId" placeholder="Enter ID" />
                </div>

                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input onChange={(event) => { setFirst_name(event.target.value) }} required={true} type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input onChange={(event) => { setLast_name(event.target.value) }} required={true} type="text" className="form-control" id="lastName" placeholder="Enter Last name" />
                </div>

                <div className="form-group">
                    <label for="Email">Email address</label>
                    <input onChange={(event) => { setEmail(event.target.value) }} required={true} type="email" className="form-control" id="Email" placeholder="Enter email" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="GenderSelect">Gender</label>
                    </div>
                    <select onChange={(event) => { setGender(event.target.value) }} required={true} className="custom-select" id="GenderSelect">
                        <option selected>Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="country">Country</label>
                    <input onChange={(event) => { setCountry(event.target.value) }} required={true} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>

                <div className="form-group">
                    <label for="City">City</label>
                    <input onChange={(event) => { setCity(event.target.value) }} required={true} type="text" className="form-control" id="City" placeholder="Enter City" />
                </div>

                <div className="form-group">
                    <label for="street">Street</label>
                    <input onChange={(event) => { setStreet(event.target.value) }} required={true} type="text" className="form-control" id="street" placeholder="Enter Street" />
                </div>

                <div className="form-group">
                    <label for="phone">Phone</label>
                    <input onChange={(event) => { setPhone(event.target.value) }} required={true} type="tel" className="form-control" id="phone" placeholder="Enter Phone" />
                </div>

                <div className="form-group">
                    <label for="totalPrice">Total Price</label>
                    <input onChange={(event) => { setTotal_price(event.target.value) }} required={true} className="currency" type="number" min="0.00" step="0.01" id="totalPrice" placeholder="Enter Total Price" />
                </div>

                <div className="form-group">
                    <label for="currency">Currency</label>
                    <input onChange={(event) => { setCurrency(event.target.value) }} required={true} type="text" maxLength="3" className="form-control" id="currency" placeholder="Enter Currency" />
                </div>

                <div className="form-group">
                    <label for="creditCardType">Credit card type</label>
                    <input onChange={(event) => { setCerdit_card_type(event.target.value) }} required={true} type="text" className="form-control" id="creditCardType" placeholder="Enter Credit card type" />
                </div>

                <div className="form-group">
                    <label for="creditCardNumber">Credit Card Number</label>
                    <input onChange={(event) => { setCerdit_card_number(event.target.value) }} required={true} type="number" minLength="8" maxLength="16" className="form-control" id="creditCardNumber" placeholder="Enter Credit Card Number" />
                </div>

                <button type="submit" className="btn btn-primary myBtn">Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;