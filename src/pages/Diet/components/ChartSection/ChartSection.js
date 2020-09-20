import React, {useContext} from 'react';
import {PieChart} from 'components';
import {getTotalDailyValues} from 'utils/getGruppedProducts';
import DateContextHandler from 'data/context';
import {Bar} from './ChartSection.css';

const StatsBar = () => {
    const {store} = DateContextHandler;
    const data = useContext(store);
    const {groupedProductsWithDetails} = data;
    const total = getTotalDailyValues(groupedProductsWithDetails);
    return (
        <>
        <Bar>
            <div><span>B: {total.proteins} g</span> <span>W: {total.carbs} g</span> <span>T: {total.fats} g</span></div>
        </Bar>
        {total.kcals ? <PieChart data={[total.proteins, total.carbs, total.fats]}/> : null}
        </>
     );
}
 
export default StatsBar;

