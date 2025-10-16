import React, { useState } from 'react';
import '../styles/Customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' }
  ]);

  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const addCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      setCustomers([...customers, { ...newCustomer, id: Date.now() }]);
      setNewCustomer({ name: '', email: '', phone: '' });
    }
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="customers">
      <h2>Customer Management</h2>

      <div className="customer-form">
        <input type="text" name="name" placeholder="Name" value={newCustomer.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={newCustomer.email} onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="Phone" value={newCustomer.phone} onChange={handleInputChange} />
        <button onClick={addCustomer}>Add Customer</button>
      </div>

      <div className="customer-list">
        {customers.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
