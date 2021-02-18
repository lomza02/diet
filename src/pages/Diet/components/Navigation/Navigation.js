import React, { useContext } from 'react';
import { Bar } from './Navigation.css';
import { DECREASE_ONE_DAY, INCREASE_ONE_DAY } from 'utils/constants';
import DataContextHandler from 'data/context';
import { getTotalDailyValues } from 'functions';

const DateBar = () => {
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { activeDate, handleActiveDate, mealsWithDetails } = data;
  const { dayName, dayNumber, month, year } = activeDate;
  const total = getTotalDailyValues(mealsWithDetails);
  return (
    <>
      <Bar>
        <span onClick={() => handleActiveDate(DECREASE_ONE_DAY)}>&#10096;</span>
        <div>
          <h3>{dayName}</h3>
          <h3>
            {dayNumber} {month} {year}
          </h3>
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
};

export default DateBar;