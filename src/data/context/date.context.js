import React, { useState, useMemo, useCallback } from 'react';
import changeDate from 'utils';

const store = React.createContext({});

const DateContext =  ({children}) => {
    const date = useMemo(() => new Date(), []);
    const initialDate = useCallback(() => changeDate(date), [date])
    const [activeDate, setActiveDate] = useState(initialDate)
    

    const handleActiveDate = useCallback((oneDay) => {
        date.setDate(date.getDate() + oneDay);
        setActiveDate(changeDate(date))
    }, [date])
    return (
    <store.Provider value={{handleActiveDate, activeDate, date}}>
       {children}
    </store.Provider>
    )
}


const DateContextHandler = {
    store,
    DateContext
}

export default DateContextHandler;