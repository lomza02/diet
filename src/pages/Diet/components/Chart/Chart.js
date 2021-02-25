import React, { useMemo } from 'react';
import { PieChart } from '../index';
import { getTotalDailyValues } from 'functions';
import { Bar, Wrapper, MacroBar } from './Chart.css';
import theme from 'utils/theme';
import { connect } from 'react-redux';

const Chart = ({ filtredMeals }) => {
  const total = useMemo(() => getTotalDailyValues(filtredMeals), [
    filtredMeals,
  ]);
  return (
    <>
      <Bar>
        <div>
          <MacroBar color={theme.colors.primary.normal}>
            <span>B: {total.proteins} g</span> <div></div>
          </MacroBar>{' '}
          <MacroBar color={theme.colors.accent.normal}>
            <span>W: {total.carbs} g</span>
            <div></div>
          </MacroBar>
          <MacroBar color={theme.colors.accent.second}>
            <span>T: {total.fats} g</span>
            <div></div>
          </MacroBar>
        </div>
      </Bar>
      {!!total.kcals ? (
        <Wrapper>
          <div>
            <PieChart data={[total.proteins, total.carbs, total.fats]} />
          </div>
        </Wrapper>
      ) : null}
    </>
  );
};
const mapStateToProps = (state) => ({
  meals: state.meals.items,
});

export default connect(mapStateToProps)(Chart);
