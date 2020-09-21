import React, {useContext} from 'react';
import {PieChart} from 'components';
import {getTotalDailyValues} from 'utils/getGruppedProducts';
import DateContextHandler from 'data/context';
import {Bar, Wrapper} from './ChartSection.css';

const ChartSection = () => {
    const {store} = DateContextHandler;
    const data = useContext(store);
    const {groupedProductsWithDetails} = data;
    const total = getTotalDailyValues(groupedProductsWithDetails);
    return (
        <>
        <Bar>
            <div><span>B: {total.proteins} g</span> <span>W: {total.carbs} g</span> <span>T: {total.fats} g</span></div>
        </Bar>
        {total.kcals ? <Wrapper><div><PieChart data={[total.proteins, total.carbs, total.fats]}/></div></Wrapper> : null}
        </>
     );
}
 
export default ChartSection;

