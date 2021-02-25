import React, { useState, useEffect } from 'react';
import { Bar } from './Navigation.css';
import formatDate from 'utils/date';
import { increase, decrease } from 'actions/date';
import { connect } from 'react-redux';

const Navigation = ({
  meals,
  increase,
  decrease,
  date,
  setFiltredMeals,
  filtredMeals,
}) => {
  const [activeDate, setActiveDate] = useState({});
  useEffect(() => {
    setActiveDate(formatDate(date));
  }, [date]);
  return (
    <>
      <Bar>
        <span
          onClick={() => {
            decrease();
            setActiveDate(formatDate(date));
            setFiltredMeals(
              meals.filter(
                (meal) => meal.date === date.toISOString().substring(0, 10)
              )
            );
          }}
        >
          &#10096;
        </span>
        <div>
          <h3>{activeDate.dayName}</h3>
          <h3>
            {activeDate.dayNumber} {activeDate.month} {activeDate.year}
          </h3>
        </div>
        <span
          onClick={() => {
            increase();
            setActiveDate(formatDate(date));
            setFiltredMeals(
              meals.filter(
                (meal) => meal.date === date.toISOString().substring(0, 10)
              )
            );
          }}
        >
          &#10097;
        </span>
      </Bar>
      <Bar lower>
        <div>
          <h3>
            {filtredMeals.reduce((a, b) => {
              return a + parseInt(b.kcals);
            }, 0)}{' '}
            kcals / dzisiaj
          </h3>
        </div>
      </Bar>
    </>
  );
};
const mapStateToProps = (state) => ({
  date: state.date,
  meals: state.meals.items,
});
const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
