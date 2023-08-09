import React, { useState, useEffect } from 'react';
import './ticketCounter.scss';

const TicketCounter = ({ updateTotal, setAdultTickets, setChildTickets, setSeniorTickets }) => {
  const [adultTickets, setAdultTicketsLocal] = useState(0);
  const [childTickets, setChildTicketsLocal] = useState(0);
  const [seniorTickets, setSeniorTicketsLocal] = useState(0);

  const adultPrice = 18000;
  const childPrice = 12000;
  const seniorPrice = 10000;

  useEffect(() => {
    const newTotal = adultTickets * adultPrice + childTickets * childPrice + seniorTickets * seniorPrice;
    updateTotal(newTotal);
  }, [adultTickets, childTickets, seniorTickets, updateTotal]);

  const handleTicketChange = (ticketType, increment) => {
    switch (ticketType) {
      case 'adult':
        setAdultTicketsLocal(Math.max(adultTickets + increment, 0));
        setAdultTickets(Math.max(adultTickets + increment, 0)); 
        break;
      case 'child':
        setChildTicketsLocal(Math.max(childTickets + increment, 0));
        setChildTickets(Math.max(childTickets + increment, 0)); 
        break;
      case 'senior':
        setSeniorTicketsLocal(Math.max(seniorTickets + increment, 0));
        setSeniorTickets(Math.max(seniorTickets + increment, 0)); 
        break;
      default:
        break;
    }
  };
  return (
    <div className='counter'>
      <div className='counter__ticket'>
        <h2>Selecciona tus boletos</h2>
        <p>Puede comprar hasta 10 boletos en total por transacción</p>
        <div className='counter__ticket__type'>
          <div className='span'>ADULTO</div>
          <div className='price'>${adultPrice}</div>
          <div className='btn-container'>
            <button className='minus-button' onClick={() => handleTicketChange('adult', -1)} disabled={adultTickets === 0}>
              -
            </button>
            <div>{adultTickets}</div>
            <button className='plus-button' onClick={() => handleTicketChange('adult', 1)} disabled={adultTickets + childTickets + seniorTickets >= 10}>
              +
            </button>
          </div>
        </div>
        <div className='counter__ticket__type'>
          <div className='span'>NIÑOS</div>
          <div className='price'>${childPrice}</div>
          <div className='btn-container'>
            <button className='minus-button' onClick={() => handleTicketChange('child', -1)} disabled={childTickets === 0}>
              -
            </button>
            <div>{childTickets}</div>
            <button className='plus-button' onClick={() => handleTicketChange('child', 1)} disabled={adultTickets + childTickets + seniorTickets >= 10}>
              +
            </button>
          </div>
        </div>
        <div className='counter__ticket__type'>
          <div className='span'>3 EDAD</div>
          <div className='price'>${seniorPrice}</div>
          <div className='btn-container'>
            <button className='minus-button' onClick={() => handleTicketChange('senior', -1)} disabled={seniorTickets === 0}>
              -
            </button>
            <div>{seniorTickets}</div>
            <button className='plus-button' onClick={() => handleTicketChange('senior', 1)} disabled={adultTickets + childTickets + seniorTickets >= 10}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCounter;
