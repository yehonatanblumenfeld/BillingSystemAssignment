import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Transactions/addTransactions.css';
import axios from 'axios';
import elementContext from "../../store/elementContext";
import { myContext } from "../../store/store";

const UpdateTransaction = () => {
    // const {elementToEdit , setElementToEdit} = useContext(elementContext)  
    const[storeElement , setStoreElement] = useContext(myContext);

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
    const [cerdit_card_number, setCerdit_card_number] = useState(0);
    // useEffect(()=>{
    //      console.log(elementToEdit);    
    //         // setTransaction(elementToEdit.value)
    //         // console.log(transaction);      
    // },[]);
    
    const refreshParams =()=>{   
        console.log(storeElement);  
        // setCustomer_id(transaction.customer_id);
        // setFirst_name(transaction.first_name);
        // setLast_name(transaction.last_name);
        // setEmail(transaction.email);
        // setGender(transaction.gender);
        // setCountry(transaction.country);
        // setCity(transaction.city);
        // setStreet(transaction.street);
        // setPhone(transaction.phone);
        // setTotal_price(transaction.total_price);
        // setCurrency(transaction.currency);
        // setCerdit_card_type(transaction.cerdit_card_type);
        // setCerdit_card_number(parseInt(transaction.setCerdit_card_number));
    }
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

        axios.put(`http://localhost:9000/transactions/updateTransaction/${transaction._id}` , updatedTransaction)
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
                <button onClick={refreshParams}>refresh params</button>
                 {/* <button onClick={()=>console.log(currectElement)}>log data</button>  */}

                <div className="form-group">
                    <label for="customerId">Customer ID {transaction._id} </label>
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
                    <input onChange={(event) => { setCountry(event.target.value) }} value={country} required={true} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>

                <div className="form-group">
                    <label for="City">City</label>
                    <input onChange={(event) => { setCity(event.target.value) }} value={city} required={true} type="text" className="form-control" id="City" placeholder="Enter City" />
                </div>

                <div className="form-group">
                    <label for="street">Street</label>
                    <input onChange={(event) => { setStreet(event.target.value) }} value={street} required={true} type="text" className="form-control" id="street" placeholder="Enter Street" />
                </div>

                <div className="form-group">
                    <label for="phone">Phone</label>
                    <input onChange={(event) => { setPhone(event.target.value) }} value={phone} required={true} type="tel" className="form-control" id="phone" placeholder="Enter Phone" />
                </div>

                <div className="form-group">
                    <label for="totalPrice">Total Price</label>
                    <input onChange={(event) => { setTotal_price(event.target.value) }} value={total_price} required={true} className="currency" type="number" min="0.00" step="0.01" id="totalPrice" placeholder="Enter Total Price" />
                </div>

                <div className="form-group">
                    <label for="currency">Currency</label>
                    <input onChange={(event) => { setCurrency(event.target.value) }} value={currency} required={true} type="text" maxLength="3" className="form-control" id="currency" placeholder="Enter Currency" />
                </div>

                <div className="form-group">
                    <label for="creditCardType">Credit card type</label>
                    <input onChange={(event) => { setCerdit_card_type(event.target.value) }} value={cerdit_card_type} required={true} type="text" className="form-control" id="creditCardType" placeholder="Enter Credit card type" />
                </div>

                <div className="form-group">
                    <label for="creditCardNumber">Credit Card Number</label>
                    <input onChange={(event) => { setCerdit_card_number(event.target.value) }} value={cerdit_card_number} required={true} type="number" minLength="8" maxLength="16" className="form-control" id="creditCardNumber" placeholder="Enter Credit Card Number" />
                </div>

                <button type="submit" className="btn btn-primary myBtn">Update transaction</button>
            </form>
        </div>
    );
}

export default UpdateTransaction;