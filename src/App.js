// src/App.js
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import SalesPipeline from './components/SalesPipeline';
import Profile from './components/Profile';
import ActiveDeals from './components/ActiveDeals';
import ClosedDeals from './components/ClosedDeals';
import PendingDeals from './components/PendingDeals';
import CompletedTasks from './components/CompletedTasks';
import RevenueGenerated from './components/RevenueGenerated';
import ScrollToTopButton from './components/ScrollToTopButton';
import SignIn from './components/SignIn'; 
import AboutUs from './components/AboutUs';

// ✅ Importing Product Pages
import Marketing from './components/Marketing';
import Sales from './components/Sales';
import Service from './components/Service';
import Content from './components/Content';
import Operations from './components/Operations';
import Commerce from './components/Commerce';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/sales-pipeline" element={<SalesPipeline />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/active-deals" element={<ActiveDeals />} />
        <Route path="/closed-deals" element={<ClosedDeals />} />
        <Route path="/pending-deals" element={<PendingDeals />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/revenue-generated" element={<RevenueGenerated />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* ✅ Product Pages Routes */}
        <Route path="/products/marketing" element={<Marketing />} />
        <Route path="/products/sales" element={<Sales />} />
        <Route path="/products/service" element={<Service />} />
        <Route path="/products/content" element={<Content />} />
        <Route path="/products/operations" element={<Operations />} />
        <Route path="/products/commerce" element={<Commerce />} />
      </Routes>
      <Footer companyName="CRM System Project" />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
