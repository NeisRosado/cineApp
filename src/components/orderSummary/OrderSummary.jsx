import React from 'react';
import { useNavigate } from 'react-router-dom';
import './orderSummary.scss';

const OrderSummary = ({ total, adultTickets, childTickets, seniorTickets }) => {
  const IVA = 1.19;
  const navigate = useNavigate();

  const canContinue =
  total > 0 &&
  (adultTickets + childTickets + seniorTickets) <= 10 &&
  (adultTickets + childTickets + seniorTickets) > 0;

  const handleContinue = () => {
    if (canContinue) {
      navigate('/seat-selection');
    }
  };
  return (
    <div className='movie__details'>
      <div className='total'>
        <h3>Resumen de compra</h3>
        <span>Se realizará un cargo por servicio por cada boleto dentro de la orden.</span>
        <p>Total (IVA incluido): ${(total * IVA)}</p>
      </div>
      <div className='continue-button-container'>
        <button className={`continue-button ${canContinue ? 'enabled' : ''}`} disabled={!canContinue} onClick={handleContinue}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;