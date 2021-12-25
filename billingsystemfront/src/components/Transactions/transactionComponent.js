import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './transactionComponent.css';
import elementContext from "../../store/elementContext";
import { myContext } from "../../store/store";

 const TransactionComponent =(props)=> {
    // const{elementToEdit , setElement , getElement } = useContext(elementContext) 
    // const[element , setElement] = useState({});  
    // const {dispatch} = useContext(elementContext)

    const[storeElement , setStoreElement] = useContext(myContext);

    const id =  props.propList._id;  


    const onEdit=async()=>{ 
    const tran =  await (await axios.get(`http://localhost:9000/transactions/getTransactionById/${id}`)).data
    console.log(tran);
    console.log(storeElement);
    setStoreElement(16)
    console.log(storeElement);
    // setElement(tran);
    // console.log(getElement());
    // dispatch({type : 'SET_ELEMENT' , element : tran})
    // const getEle = dispatch({type : 'GET_ELEMENT'})
    // console.log(getEle);
    // setElementToEdit(tran);
    // console.log(elementToEdit);
    // props.editFunc(tran); 
    window.location = `/updateTransaction`;        
};
// useEffect(()=>{
//     console.log(storeElement);
// },[storeElement])

const onDelete = async()=>{
    await axios.delete(`http://localhost:9000/transactions/deleteTransaction/${id}`)
     .then(response =>{
        alert(`Transactions of ${props.propList.first_name} ${props.propList.last_name}  has been deleted`);
     })   
}   
        return(
            <div className="card " >
                <div className="elementBox ">
                                       
                    <div className="card-body"> 
                    <div className="card-title">
                    {props.propList.first_name + " " + props.propList.last_name}
                    </div>
                    <p><strong>Customer id: </strong>{props.propList.customer_id}</p>
                    <p><strong>First Name: </strong>{props.propList.first_name}</p>
                    <p><strong>Last Name: </strong>{props.propList.last_name}</p>
                    <p><strong>Email: </strong>{props.propList.email}</p>
                    <p><strong>Gender: </strong>{props.propList.gender}</p>
                    <p><strong>Country: </strong>{props.propList.country}</p>
                    <p><strong>City: </strong>{props.propList.city}</p>
                    <p><strong>Street: </strong>{props.propList.street}</p>
                    <p><strong>Currency: </strong>{props.propList.currency}</p>
                    <p><strong>Credit card type: </strong>{props.propList.cerdit_card_type}</p>
                    <p><strong>Credit card number: </strong>{props.propList.cerdit_card_number}</p>
                    
                    <div className="btns">
                        <button onClick={onEdit} className="btn btn-primary ">Edit</button>
                        <button onClick={onDelete} className="btn btn-secondary ">Delete</button>
                    </div> 
                    </div>
                </div>
         </div>

    );
}
export default TransactionComponent;