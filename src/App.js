import React from 'react';
import {Layout} from 'antd';
import './App.css';
// import Bcpnpcalculator  from './components/bcpnpCal';
 import CrsCalculator  from './components/csrCal';
const {  Content } = Layout;
function App() {
  return (
    <div className="App">
      <h3 >
  CRS CALCULATOR      </h3>

      <Content>
       {/*   <Bcpnpcalculator />*/}       
       <CrsCalculator />
      
      </Content>
      
    </div>
  );
}

export default App;
