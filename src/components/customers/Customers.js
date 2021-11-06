import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/`);
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default Customers;