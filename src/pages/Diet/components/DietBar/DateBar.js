import React, { useState, useMemo, useCallback } from 'react';
import { Bar } from './DateBar.css';
import changeDate from 'utils/index';
import { DECREASE_ONE_DAY, INCREASE_ONE_DAY } from 'utils/constants'

const DietBar = () => {
    const date = useMemo(() => new Date(), []);
    const initialDate = useCallback(() => changeDate(date), [date])
    const [{ dayName, dayNumber, month, year }, setActiveDate] = useState(initialDate)

    const handleActiveDate = useCallback((oneDay) => {
        date.setDate(date.getDate() + oneDay);
        setActiveDate(changeDate(date))
    }, [date])
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

export default DietBar;