import React, { useState, useMemo, useCallback } from 'react';
import changeDate from 'utils';
import DateBar from 'pages/Diet/components/DateBar';
import Button from 'components/Button';
import ProductsList from 'pages/Diet/components/ProductsList'

export const DateContext = React.createContext()
const Diet = () => {
    const date = useMemo(() => new Date(), []);
    const initialDate = useCallback(() => changeDate(date), [date])
    const [activeDate, setActiveDate] = useState(initialDate)

    const handleActiveDate = useCallback((oneDay) => {
        date.setDate(date.getDate() + oneDay);
        setActiveDate(changeDate(date))
    }, [date])

    return (
        <DateContext.Provider value={{handleActiveDate, activeDate, date}}>
            <DateBar />
            <div style={{ height: '200vh' }}>
            <ProductsList/>
                <Button>&#10010;</Button>
            </div>
        </DateContext.Provider>
    );
}
export const DateContextHandler = {
    DateContext,
    Diet
}