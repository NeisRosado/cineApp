import React from 'react'
import './seatSelection.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { DateContext } from '../calendar/Calendar';


const SeatSelection = ({ selectedDate }) => {
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <DateContext.Provider value={{ selectedDate, handleDateChange }}>
            <>
                <Header />
                <Footer />
            </>
        </DateContext.Provider>
    );
};

export default SeatSelection;