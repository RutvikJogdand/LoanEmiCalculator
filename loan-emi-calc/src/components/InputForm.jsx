import React, { useState } from "react"

function InputForm()
{
    const [loanAmt, setLoanAmt] = useState("")
    const [loanTenure, setLoanTenure] = useState("")
    const [intRate, setIntRate] = useState("")

    // Flags;
    const [loanAmtFlag, setLoanAmtFlag] = useState(false)
    const [loanTenureFlag, setLoanTenureFlag] = useState(false)
    const [intRateFlag, setIntRateFlag] = useState(false) 

    const handleLoanAmt = (event) => {
        setLoanAmtFlag(false)
        let checkNum = event.target.value.split(".")
        if(checkNum.length === 1)
        {
            setLoanAmt(Math.abs(event.target.value))
        }
       
    }
    
    const handleLoanTenure = (event) => {
        setLoanTenureFlag(false)
        let checkNum = event.target.value.split(".")
        if(checkNum.length === 1)
        {
            setLoanTenure(Math.abs(event.target.value))
        }
    }

    const handleIntRate = (event) => {
        setIntRateFlag(false)
        setIntRate(Math.abs(Number(event.target.value).toFixed(2)))
    }

    const calcEmi = (amt, tenure, rate) => {
        let actualRate = (Number(rate)/12)*100

        console.log(actualRate)
    }

    const handleCalculate = () => {

        if(loanAmt)
        {
            if(loanTenure)
            {
                if(intRate)
                {
                    calcEmi(loanAmt,loanTenure,intRate)
                }
                else
                {
                    setIntRateFlag(true)
                }
            }
            else
            {
                setLoanTenureFlag(true)
            }
        }
        else
        {
            setLoanAmtFlag(true)
        }
    }
    return(
        <>
            <h4>Loan EMI Calculator</h4>
            <div>
                <span> Loan Amount </span>
                <input type="number" name="loanAmt"  pattern="[0-9]" placeholder="Enter amount" value={loanAmt} onChange={handleLoanAmt}/>
                <span> INR </span>
                <br/>
                <span> Loan Tenure </span>
                <input type="number" name="loanTenure" placeholder="Enter months" value={loanTenure} onChange={handleLoanTenure}/>
                <span> Months </span>
                <br/>
                <span> Interest Rate </span>
                <input type="number" name="intRate" step=".01" pattern="^\d*(\.\d{0,2})?$" placeholder="NN.NN" value={intRate} onChange={handleIntRate}/>
                <span> % </span>
                <br/>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
        </>
    )
}
export default InputForm