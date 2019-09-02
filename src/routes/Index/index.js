import React from 'react';
import './index.css';
import SideNav from '../../components/SideNav';

function Index() {
  return (
    <div className="appBlock">
      <SideNav />
      <div className="contentBlock">
        <div className="enterNameBlock"></div>
      </div>
    </div>
  );
}

export default Index;
