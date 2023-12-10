import React from 'react';
import NavBarTop from '../NavTop/NavBarTop';
import HomeContent from './HomeContent';
function Main() {
    return (
      <div className="fullview">
         <div style={{ height: '10%' }}> <NavBarTop /> </div>
         <div style={{ height: '90%' }}><HomeContent /></div>
      </div>
   );
}

export default Main;
