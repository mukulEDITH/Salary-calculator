import React  from 'react';
import SalaryCalculator from './components/SalaryCalc';
 import './App.css'

function App() {
  

 

  return (
    <div className="App">
      <h1>Salary calculator</h1>
       <SalaryCalculator/>
        <p>"How generous of me to calculate your salary down to the last penny."</p>
       <h4>You're welcome...</h4>
       <h5>MK</h5>
    </div>
  );
}

export default App;
