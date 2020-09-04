import React from 'react';
import {Fallback} from './Loading.css'

const Loading = () => {
    return ( 
        <Fallback>
<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Fallback>
     );
}
 
export default Loading;
