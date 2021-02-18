import React, { useState, useMemo, useCallback } from 'react';
import changeDate from 'utils/date';
import { useQuery } from 'react-query';
import API from 'data/fetch';
import { getGruppedProducts, groupBy } from 'functions';

const store = React.createContext({});

const DataContext = ({ children }) => {
  //date
  const date = useMemo(() => new Date(), []);
  const initialDate = useCallback(() => changeDate(date), [date]);
  const [activeDate, setActiveDate] = useState(initialDate);
  const dateISO = useMemo(() => activeDate.dateISO, [activeDate]);

  //feching
  const { data: products } = useQuery('products', API.fetchProducts);
  const { data: meals } = useQuery('meals', API.fetchMeals);

  //meal
  const [selectedMeal, setSelectedMeal] = useState(null);
  const groupedMeals = groupBy(meals, (meal) => meal.date).get(dateISO);

  //products
  const [checkedProducts, setCheckedProducts] = useState({});
  const [newProduct, setNewProduct] = useState();
  const mealsWithDetails = getGruppedProducts(groupedMeals, products);

  const handleActiveDate = useCallback(
    (oneDay) => {
      date.setDate(date.getDate() + oneDay);
      setActiveDate(changeDate(date));
    },
    [date]
  );

  return (
    <store.Provider
      value={{
        activeDate,
        date,
        meals,
        // groupedMeals,
        products,
        mealsWithDetails,
        checkedProducts,
        dateISO,
        selectedMeal,
        setSelectedMeal,
        handleActiveDate,
        setCheckedProducts,
        newProduct,
        setNewProduct,
      }}
    >
      {children}
    </store.Provider>
  );
};

const DataContextHandler = {
  store,
  DataContext,
};

export default DataContextHandler;
