import React from 'react'
import './buttons.scss'


const Buttons = () => {
    const buttonsList = [
        'Acción', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Terror'
    ];
    return (
        <>
        <div>
            {buttonsList.map((categories,  index) => (
                <button key={index} className='text'>{categories} </button>
            )
            )}
        </div>
        </>
    )
}

export default Buttons