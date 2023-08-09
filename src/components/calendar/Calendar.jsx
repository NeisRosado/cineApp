import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.scss';
import { createContext } from 'react'; 


export const DateContext = createContext();

export const useDateContext = () => useContext(DateContext);


const Calendar = () => {
    const { selectedDate, handleDateChange } = useDateContext();

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

