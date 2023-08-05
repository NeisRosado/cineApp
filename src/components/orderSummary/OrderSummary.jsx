import React, { useState } from 'react';
import './OrderSummary.scss';

const OrderSummary = () => {
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);

  const adultPrice = 18000;
  const childPrice = 12000;
  const seniorPrice = 10000;

  const calculateTotal = () => {
    return adultTickets + childTickets + seniorTickets;
  };

  const canContinue = calculateTotal() > 0 && calculateTotal() <= 10;

  return (
    <div className='counter'>
      <div className='counter__ticket'>
        <h2>Selecciona tus boletos</h2>
        <p>Puede comprar hasta 10 boletos en total por transacción</p>
        <div className='counter__ticket__type'>
          <div className='span'>ADULTO</div>
          <div className='price'>
            ${adultPrice}
          </div>
          <div className='btn-container'>
            <button className='minus-button' onClick={() => setAdultTickets(Math.max(adultTickets - 1, 0))} disabled={adultTickets === 0}>
              -
            </button>
            <div>{adultTickets}</div>
            <button className='plus-button' onClick={() => setAdultTickets(adultTickets + 1)} disabled={calculateTotal() >= 10}>
              +
            </button>
          </div>
        </div>
        <div className='counter__ticket__type'>
          <div className='span'>NIÑOS </div>
          <div className='price'>
            ${childPrice}
          </div>
          <div className='btn-container'>
            <button className='minus-button' onClick={() => setChildTickets(Math.max(childTickets - 1, 0))} disabled={childTickets === 0}>
              -
            </button>
            <div>{childTickets}</div>
            <button className='plus-button' onClick={() => setChildTickets(childTickets + 1)} disabled={calculateTotal() >= 10}>
              +
            </button>
          </div>
        </div>
        <div className='counter__ticket__type'>
          <div className='span'>3 EDAD </div>
          <div className='price'>
            ${seniorPrice}
          </div>
          <div className='btn-container'>

            <button className='minus-button' onClick={() => setSeniorTickets(Math.max(seniorTickets - 1, 0))} disabled={seniorTickets === 0}>
              -
            </button>
            <div>{seniorTickets}</div>

            <button className='plus-button' onClick={() => setSeniorTickets(seniorTickets + 1)} disabled={calculateTotal() >= 10}>
              +
            </button>

          </div>

        </div>
      </div>
      
      <div className='movie-details'>
        <div className='total'>
          <h3>Resumen de compra </h3>

          <div>
            <span>Aquí va el componente de detalles de la peli</span>
          </div>

          <span> Se realizará un cargo por servicio por cada boleto dentro de la orden. </span>
          <br />
          <br />
          <p>Total(IVA incluido): ${(adultTickets * adultPrice + childTickets * childPrice + seniorTickets * seniorPrice) * 1.19}</p>

        </div>

        <button className={`continue-button ${canContinue ? 'enabled' : ''}`} disabled={!canContinue}>
          Continuar
        </button>

      </div>
    </div>
  );
};

export default OrderSummary;

