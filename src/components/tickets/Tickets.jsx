import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TicketCounter from '../ticketCounter/TicketCounter';
import OrderSummary from '../orderSummary/OrderSummary';
import { DateContext } from '../calendar/Calendar';
import './tickets.scss'

const Tickets = ({ selectedDate }) => {
  const [total, setTotal] = useState(0);
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);

  const handleTotalUpdate = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <DateContext.Provider value={{ selectedDate }}>
      <>
        <Header />
        <div className='container'>
          <TicketCounter
            updateTotal={handleTotalUpdate}
            setAdultTickets={setAdultTickets}
            setChildTickets={setChildTickets}
            setSeniorTickets={setSeniorTickets}
          />
          <OrderSummary
            total={total}
            adultTickets={adultTickets}
            childTickets={childTickets}
            seniorTickets={seniorTickets}
          />
        </div>
        <Footer />
      </>
    </DateContext.Provider>
  );
};

export default Tickets;
