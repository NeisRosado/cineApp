// import React, { useState } from 'react'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './calendar.scss'

// const Calendar = ({ onDateChange }) => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const today = new Date();
//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//         onDateChange(date);
//         console.log("Selected Date:", date);

//     };
//     return (

//         <div className="calendar-container">
//             <span>Fecha</span>
//             <DatePicker
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 dateFormat="dd/MM/yyyy"
//                 placeholderText="Selecciona una fecha"
//                 showMonthDropdown
//                 showYearDropdown
//                 dropdownMode="select"
//                 minDate={today}
//             />
//         </div>
//     )
// }

// export default Calendar

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './calendar.scss';

// const Calendar = ({ onDateChange }) => {
//     const [selectedDate, setSelectedDate] = useState(null);

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//         onDateChange(date);
//         console.log("Selected Date:", date);
//     };

//     return (
//         <div className="calendar-container">
//             <span>Fecha</span>
//             <DatePicker
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 dateFormat="dd/MM/yyyy"
//                 placeholderText="Selecciona una fecha"
//                 showMonthDropdown
//                 showYearDropdown
//                 dropdownMode="select"
//             />
//         </div>
//     );
// }

// export default Calendar;

import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.scss';
import { createContext } from 'react'; // Importa useState

// Definir el contexto dentro del componente
export const DateContext = createContext();

export const useDateContext = () => useContext(DateContext);


const Calendar = () => {
    const { selectedDate, handleDateChange } = useDateContext();

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

  return (
    <DateContext.Provider value={{ selectedDate, handleDateChange }}>
      <div className="calendar-container">
        <span>Fecha</span>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecciona una fecha"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>
    </DateContext.Provider>
  );
};


export default Calendar;

