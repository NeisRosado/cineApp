import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import OrderSummary from '../orderSummary/OrderSummary';
import { DateContext } from '../calendar/Calendar'; // Importa DateContext

const Tickets = ({ selectedDate }) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DateContext.Provider value={{ selectedDate, handleDateChange }}>
      <>
      <Header />
      <OrderSummary />
      <Footer />
    </>
     </DateContext.Provider>
  );
};

export default Tickets
