import React, { useContext } from 'react';
import { Bar } from './NavigationBar.css';
import { DECREASE_ONE_DAY, INCREASE_ONE_DAY } from 'utils/constants'
import DateContextHandler from 'data/context';
import {getTotalDailyValues} from 'utils/getGruppedProducts';

const DateBar = () => {
    const {store} = DateContextHandler;
   const data = useContext(store)
   const { activeDate,  handleActiveDate, groupedProductsWithDetails} = data;
    const {dayName, dayNumber, month, year} = activeDate;
    const total = getTotalDailyValues(groupedProductsWithDetails);
    return (
        <>
        <Bar>
            <span onClick={() => handleActiveDate(DECREASE_ONE_DAY)}>&#10096;</span>
            <div>
                <h3>{dayName}</h3>
                <h3>{dayNumber} {month} {year}</h3>
            </div>
            <span onClick={() => handleActiveDate(INCREASE_ONE_DAY)}>&#10097;</span>
        </Bar>
        <Bar lower>
            <div>
                <h3>{total.kcals} kcal</h3>
            </div>
        </Bar>
        </>
    );
}

export default DateBar;