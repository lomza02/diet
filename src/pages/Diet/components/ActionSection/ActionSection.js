import React from 'react';
import {ActionSection as Wrapper} from './ActionSection.css';
import {Link} from 'react-router-dom';
import { Button} from 'components';

const ActionSection = () => {
    return ( 
<Wrapper>
<div>
    <Link to="/add-product"><Button>Dodaj produkt</Button></Link> 
    <Link to="/add-meal"><Button>Wybierz z listy</Button></Link>
</div>
</Wrapper>
     );
}
 
export default ActionSection;