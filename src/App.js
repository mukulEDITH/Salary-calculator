import React  from 'react';
import SalaryCalculator from './components/SalaryCalc';
 import './App.css'

function App() {
  

 

  return (
    <div className="App">
      <h1>Salary calculator</h1>
     <h6> This will provide a general estimation of your salary, though it may not be precise.</h6>
       <SalaryCalculator/>
        <p>"How generous of me to calculate your salary down to the last penny."</p>
       <h4>You're welcome...</h4>
       <h5>MK</h5>
    </div>
  );
}

export default App;
