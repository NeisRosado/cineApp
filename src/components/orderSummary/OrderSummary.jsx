import React, { useState } from 'react';
import './OrderSummary.scss';

const OrderSummary = ({ selectedShowtime }) => {
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);

  const adultPrice = 10; // Precio del boleto para adultos
  const childPrice = 5; // Precio del boleto para niños
  const seniorPrice = 7; // Precio del boleto para adultos mayores

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return adultTickets * adultPrice + childTickets * childPrice + seniorTickets * seniorPrice;
  };

  return (
    <div className='order-summary'>
      <div className='ticket-counter'>
        <h2>Contador de boletos</h2>
        <div className='ticket-type'>
          <span>Adulto (Precio: ${adultPrice})</span>
          <button onClick={() => setAdultTickets(adultTickets + 1)}>+</button>
          <span>{adultTickets}</span>
          <button onClick={() => setAdultTickets(Math.max(adultTickets - 1, 0))}>-</button>
        </div>
        <div className='ticket-type'>
          <span>Niño (Precio: ${childPrice})</span>
          <button onClick={() => setChildTickets(childTickets + 1)}>+</button>
          <span>{childTickets}</span>
          <button onClick={() => setChildTickets(Math.max(childTickets - 1, 0))}>-</button>
        </div>
        <div className='ticket-type'>
          <span>Adulto Mayor (Precio: ${seniorPrice})</span>
          <button onClick={() => setSeniorTickets(seniorTickets + 1)}>+</button>
          <span>{seniorTickets}</span>
          <button onClick={() => setSeniorTickets(Math.max(seniorTickets - 1, 0))}>-</button>
        </div>
      </div>

      <div className='movie-details'>
        {selectedShowtime && (
          <>
            <h2>Detalles de la película</h2>
            <p>Película: {selectedShowtime.movie.title}</p>
            <p>Cine: {selectedShowtime.cinema.name}</p>
            <p>Horario: {selectedShowtime.time}</p>
          </>
        )}

        <div className='total'>
          <h3>Total de la compra</h3>
          <p>${calculateTotal()}</p>
          <p>IVA (19%): ${(calculateTotal() * 0.19).toFixed(2)}</p>
          <p>Total a pagar: ${(calculateTotal() * 1.19).toFixed(2)}</p>
        </div>

        <button className='continue-button'>Continuar</button>
      </div>
    </div>
  );
};

export default OrderSummary;

