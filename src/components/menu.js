import React from 'react';
import Plain from './plain';
import Pepperoni from './pepperoni';
import MeatLover from './meat-lover';
import Veggie from './veggie';
import Hawaiian from './hawaiian';
import Bbq from './bbq';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
    <div id="menu-text">
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      </div>
      <div className='row'>
        <Plain/>
        <Pepperoni/>
        <MeatLover/>
        <Veggie/>
        <Hawaiian/>
        <Bbq/>
      </div>
    </div>
  );
}

export default Menu;
