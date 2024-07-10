// src/components/DualCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment-hijri';
import 'react-calendar/dist/Calendar.css';

const DualCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isEnglish, setIsEnglish] = useState(true);

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {isEnglish ? 'Switch to Urdu' : 'Switch to English'}
      </button>
      {isEnglish ? (
        <Calendar onChange={onDateChange} value={date} />
      ) : (
        <div>
          <h3>{moment(date).format('iYYYY/iMM/iDD')}</h3>
        </div>
      )}
    </div>
  );
};

export default DualCalendar;
