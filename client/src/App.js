import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddTransaction from './components/Transactions/addTransactions';
import Layout from './components/LayOut';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateTransactions from './components/Transactions/updateTransaction';
import ShowTransactions from './components/Transactions/showTransactions';
import AddCustomer from './components/Customers/addCustomer';
import UpdateCustomer from './components/Customers/updateCustomer';
import ShowCustomers from './components/Customers/showCustomers';

import Store from './store/store';

const App = () => {
  console.log("app called");

  return (
    <Store>
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/" element={<ShowTransactions/>} />
              <Route path="/addTransaction" element={<AddTransaction />} />
              <Route path="/updateTransaction" element={<UpdateTransactions />} />
              <Route path="/showTransactions" element={<ShowTransactions />} />

              <Route path="/addCustomer" element={<AddCustomer />} />
              <Route path="/updateCustomer" element={<UpdateCustomer />} />
              <Route path="/showCustomers" element={<ShowCustomers />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </Store>


  );
}
export default App;
