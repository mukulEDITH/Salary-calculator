import React, { useState } from 'react';
import './salary.css'; // Import CSS file

const SalaryCalculator = () => {
    const [ctc, setCtc] = useState(0);
    const [hike, setHike] = useState(0);
    const [newCtc, setNewCtc] = useState(0);
    const [monthlyGrossSalary, setMonthlyGrossSalary] = useState(0);
    const [monthlyInHandSalary, setMonthlyInHandSalary] = useState(0);

    const calculateSalary = () => {
        const hikeAmount = (ctc * hike) / 100;
        const updatedCtc = ctc + hikeAmount;
        setNewCtc(updatedCtc);

        const grossSalary = updatedCtc / 12;
        setMonthlyGrossSalary(grossSalary);

        const inHandSalary = grossSalary * 0.90;
        setMonthlyInHandSalary(inHandSalary);
    }

    return (
        <div>
        <div className="container">
            <div className='box'>
            <div className='ctcbox'>
                <label>CTC (LPA):</label>
                <input
                    type='text'
                    value={ctc}
                    onChange={(e) => setCtc(Number(e.target.value))}
                />
            </div>
            <div className='hike'>
                <label>Hike Percentage(%):</label>
                <input
                    type='text'
                    value={hike}
                    onChange={(e) => setHike(Number(e.target.value))}
                />
            </div>

            <button onClick={calculateSalary}>
                Calculate
            </button>

            <p>Monthly Gross Salary: ₹{monthlyGrossSalary.toFixed(2)}</p>
            <p>Monthly In-hand Salary: ₹{monthlyInHandSalary.toFixed(2)}</p>
            </div>
            
        </div>
        <img src={process.env.PUBLIC_URL + './1Ex.gif'} alt="GIF" className="gif" />
    </div>
        

    );
};

export default SalaryCalculator;
