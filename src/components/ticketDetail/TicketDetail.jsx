import React from "react";
import './ticketDetail.scss';

const TicketDetail = ({
     ticketCount,
    
}) => {
    
    return (
        <div className='ticketDetail'>
        <div className="ticketDetail__img">
            <img src='' alt='' />
        </div>
        <div className='ticketDetail__movie'>
            <div>
                {/* <p>Película: </p>
                <p>Complejo: </p>
                <p>Fecha: </p> 
                <p>Función: </p>  */}
            </div>
            <div className='ticketDetail__info'>
                <p>Boletos: {ticketCount}</p>
                {/* <p>Asientos:</p> */}
            </div>
        </div>
    </div>
);
};

export default TicketDetail;
