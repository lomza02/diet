import React from 'react';
import PieChart from 'components/Chart/Chart';

const StatsBar = () => {
    return ( 
        <div>
            <PieChart data={[50, 50, 100]}/>
        </div>
     );
}
 
export default StatsBar;