import React, { useContext, useMemo } from 'react';
import { PieChart } from 'components';
import { getTotalDailyValues } from 'functions';
import DataContextHandler from 'data/context';
import { Bar, Wrapper, MacroBar } from './Chart.css';
import theme from 'utils/theme';

const Chart = () => {
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { mealsWithDetails } = data;
  const total = useMemo(() => getTotalDailyValues(mealsWithDetails), [
    mealsWithDetails,
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
      {total.kcals ? (
        <Wrapper>
          <div>
            <PieChart data={[total.proteins, total.carbs, total.fats]} />
          </div>
        </Wrapper>
      ) : null}
    </>
  );
};

export default Chart;
