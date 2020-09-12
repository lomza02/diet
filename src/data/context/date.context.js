import React, { useState, useMemo, useCallback } from 'react';
import changeDate from 'utils';
import {useQuery} from 'react-query';
import API from 'data/fetch';
import {groupBy} from 'utils/groupBy';
import {getGroupedProductsWithDetails} from 'utils/getGruppedProducts';

const store = React.createContext({});

const DateContext =  ({children}) => {
    const date = useMemo(() => new Date(), []);
    const initialDate = useCallback(() => changeDate(date), [date])
    const [activeDate, setActiveDate] = useState(initialDate)
    const [checkedProducts, setCheckedProducts] = useState({});
    const dateISO = useMemo(()=>activeDate.dateISO, [activeDate]);
    const { data: meals} = useQuery("meals", API.fetchMeals)
    const { data: products } = useQuery("products", API.fetchProducts);
    const groupedMeals =  useMemo(()=>groupBy(meals, meal => meal.date).get(dateISO),[dateISO,meals]);
    const groupedProductsWithDetails = getGroupedProductsWithDetails(groupedMeals, products);

    const handleActiveDate = useCallback((oneDay) => {
        date.setDate(date.getDate() + oneDay);
        setActiveDate(changeDate(date))
    }, [date])


    return (
    <store.Provider value={{handleActiveDate, activeDate, date, meals, groupedMeals, products, groupedProductsWithDetails, setCheckedProducts, checkedProducts, dateISO}}>
       {children}
    </store.Provider>
    )
}


const DateContextHandler = {
    store,
    DateContext
}

export default DateContextHandler;