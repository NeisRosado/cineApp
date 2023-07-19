import React from 'react';
import './cinemas.scss'

const Cinemas = () => {
    const cinemas = ['La Castellana', 'Plaza Bocagrande', 'La Plazuela', 'Caribe Plaza'];

    return (
        <div className="cinemas">
            <span className='cinemas__span'>Cines cercanos </span>
            <select className='cinemas__select'>
                {cinemas.map((cinema, index) => (
                    <option key={index} value={cinema}>
                        {cinema}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Cinemas;
