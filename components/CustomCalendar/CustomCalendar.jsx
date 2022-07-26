import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { createGlobalStyle } from 'styled-components';
import CalendarTile from './CalendarTile';
import moment from 'moment';

const CustomCalendar = ({ value, onChange, appointmentDays }) => {
  const getAppointmentsQuantity = (date) => {
    if (appointmentDays.hasOwnProperty(moment(date.date).format('L'))) {
      return appointmentDays[moment(date.date).format('L')];
    } else return null;
  };
  return (
    <div>
      <GlobalStyle />
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="ISO 8601"
        tileContent={(date, view) => (
          <CalendarTile
            date={() => moment(date.date).format('L')}
            view={view}
            appointmentsQuantity={getAppointmentsQuantity(date)}
          />
        )}
      />
    </div>
  );
};

export default CustomCalendar;

const GlobalStyle = createGlobalStyle`
  .react-calendar { 
   width: 570px;
   height: 480px;
   max-width: 100%;
   background-color: #fff;
   color: #222;
   border-radius: 8px;
   font-family: 'Rubik';
   line-height: 1.125em;
   background-color: #EBE7FF;
  }
  .react-calendar__viewContainer {
    padding: 0 10px;
    padding-bottom: 75px;
  }
  .react-calendar__navigation {
   background-color: #7761FF;
   display: flex;
   align-items: center;
  }
  .react-calendar__navigation button {
   color: #6f48eb;
   min-width: 44px;
   background: none;
   font-size: 16px;
   margin-top: 8px;
   background-color: #7761FF;
   color: #fff;
   outline: none;
   border: none;
   height: 57px;
   cursor: pointer;
  }
  .react-calendar__navigation__label__labelText {
    text-transform: capitalize;
    color: #fff;
    font-family: "Rubik";
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
   background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
   background-color: #f0f0f0;
  }
  abbr[title] {
   text-decoration: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-transform: capitalize;
    background-color: #EBE7FF;
    height: 40px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  /* .react-calendar__month-view__days__day--weekend {
   color: #d10000;
  } */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
   background: #f8f8fa;
   color: #6f48eb;
   border-radius: 6px;
  }
  .react-calendar__tile--now {
   border-radius: 6px;
  }
  .react-calendar__tile {
    height: 63px;
    width: 79px;
    background-color: #fff;
    color: #000;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 33px;
    font-family: 'Rubik';
    border: none;
    font-size: 16px;
    cursor: pointer;
    font-size: 20px;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
  }
  .react-calendar__tile--active {
   border: 1px solid #50CAFF;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
   border: 1px solid #50CAFF;
   color: #000;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
  }
  .react-calendar__tile--range {
   color: #6f48eb;
   border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
   border-top-right-radius: 0;
   border-bottom-right-radius: 0;
   border-top-left-radius: 6px;
   border-bottom-left-radius: 6px;
   color: white;
  }
  .react-calendar__tile--rangeEnd {
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
   border-top-right-radius: 6px;
   border-bottom-right-radius: 6px;
   color: #000;
  }
  .react-calendar__navigation button:hover {
    color: #000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    background-color: #EBE7FF;
    color: rgba(0, 0, 0, 0.5);
  }
`;
