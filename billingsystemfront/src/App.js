import React, { useContext, useReducer, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddTransaction from './components/Transactions/addTransactions';
import Layout from './components/LayOut';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateTransactions from './components/Transactions/updateTransaction';
import ShowTransactions from './components/Transactions/showTransactions';
import AddCustomer from './components/Customers/addCustomer';
import UpdateCustomer from './components/Customers/updateCustomer';
import ShowCustomers from './components/Customers/showCustomers';
import elementContext from './store/elementContext';
import { elementReducer } from './components/reducers/elementReducer';
import Store from './store/store';

const App = () => {
  // const [elementToEdit, setElementToEdit] = useState();
    // const [elementToEdit, dispatch] = useReducer(elementReducer,{});

  return (
    // <elementContext.Provider value={{elementToEdit, dispatch}}>
    <Store>
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/addTransaction" element={<AddTransaction />} />
              <Route path="/addTransaction" element={<AddTransaction />} />
              <Route path="/updateTransaction" element={<UpdateTransactions />} />
              <Route path="/showTransactions" element={<ShowTransactions />} />

              <Route path="/addCustomer" element={<AddCustomer />} />
              <Route path="/addCustomer" element={<AddCustomer />} />
              <Route path="/updateCustomer/:id" element={<UpdateCustomer />} />
              <Route path="/showCustomers" element={<ShowCustomers />} />
            </Routes>

          </Layout>
        </div>
      </Router>
      </Store>
    // </elementContext.Provider>


  );
}
export default App;
