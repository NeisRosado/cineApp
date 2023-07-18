import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.scss'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const today = new Date();
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (

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
                minDate={today}
            />
        </div>
    )
}

export default Calendar