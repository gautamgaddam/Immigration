import React from 'react';
import {Layout} from 'antd';
import './App.css';
// import Bcpnpcalculator  from './components/bcpnpCal';
import CrsCalculator  from './components/csrCal';
const {  Content } = Layout;
function App() {
  return (
    <div className="App">
      <h1 >
       BCNP Calculator
      </h1>

      <Content>
        {/*  <Bcpnpcalculator />*/}
       <CrsCalculator />
      
      </Content>
      
    </div>
  );
}

export default App;
