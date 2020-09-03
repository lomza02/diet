import React, { useContext } from 'react';
import { Bar } from './DateBar.css';
import { DECREASE_ONE_DAY, INCREASE_ONE_DAY } from 'utils/constants'
import {DateContextHandler} from 'pages/Diet'

const DateBar = () => {
    const {DateContext} = DateContextHandler;
   const date = useContext(DateContext)
   const { activeDate,  handleActiveDate} = date;
    const {dayName, dayNumber, month, year} = activeDate;

    return (
        <Bar>
            <span onClick={() => handleActiveDate(DECREASE_ONE_DAY)}>&#10096;</span>
            <div>
                <h3>{dayName}</h3>
                <h3>{dayNumber} {month} {year}</h3>
            </div>
            <span onClick={() => handleActiveDate(INCREASE_ONE_DAY)}>&#10097;</span>
        </Bar>
    );
}

export default DateBar;