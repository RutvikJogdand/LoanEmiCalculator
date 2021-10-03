import React, { useState } from "react"
import styles from "./FormStyles.module.css"
import OutputForm from "./OutputForm"

function InputForm()
{
    const [loanAmt, setLoanAmt] = useState("")
    const [loanTenure, setLoanTenure] = useState("")
    const [intRate, setIntRate] = useState("")

    // Calculated fields:
    const [emi, setEmi] = useState("")
    const [totalPayable, setTotalPayable] = useState("")
    const [totalInterest, setTotalInterest] = useState("")

    // Flags;
    const [loanAmtFlag, setLoanAmtFlag] = useState(false)
    const [loanTenureFlag, setLoanTenureFlag] = useState(false)
    const [intRateFlag, setIntRateFlag] = useState(false) 

    const handleLoanAmt = (event) => {
        setLoanAmtFlag(false)
        let checkNum = event.target.value.split(".")
        if(checkNum.length === 1)
        {
            setLoanAmt(Math.abs(event.target.value) || "")
        }
       
    }
    
    const handleLoanTenure = (event) => {
        setLoanTenureFlag(false)
        let checkNum = event.target.value.split(".")
        if(checkNum.length === 1)
        {
            setLoanTenure(Math.abs(event.target.value) || "")
        }
    }

    const handleIntRate = (event) => {
        setIntRateFlag(false)
        setIntRate(Math.abs(Number(event.target.value).toFixed(2)) || "" )
    }

    const calcEmi = (amt, tenure, rate) => {
        let actualRate = (Number(rate)/12)/100

        let powTerm = Math.pow((1 + actualRate),tenure)

        let fractionalPart = powTerm/( powTerm - 1)

        let EMI = Math.round(amt * actualRate * fractionalPart) //Total EMI

        let totalPayable = EMI * tenure

        let totalInterest = totalPayable - amt
        
        setEmi(EMI)
        setTotalPayable(totalPayable)
        setTotalInterest(totalInterest)
    }

    const handleCalculate = () => {

        console.log(loanAmt,loanTenure,intRate)
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

    const handleReset = () => {
        setLoanAmt("")
        setLoanTenure("")
        setIntRate("")

        setEmi("")
        setTotalPayable("")
        setTotalInterest("")

    }
    return(
        <div className={styles.mainContainer}>
            <h4 style={{color:'#293A64'}} className="mt-2">Loan EMI Calculator</h4>
            <div className={styles.container}>
                <div className={styles.inputFields}>
                    <div> Loan Amount </div>
                    {
                         emi && totalPayable && totalInterest ?
                         <input value={loanAmt} className="form-control" />
                         :
                         <input className="form-control" type="number" name="loanAmt"  pattern="[0-9]" placeholder="Enter amount" value={loanAmt} onChange={handleLoanAmt}/>

                    }
                    <div> INR </div>
                </div>
                {
                    loanAmtFlag&&
                    <div className="mt-2">
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <div>
                                Please enter the loan amount.
                            </div>
                        </div>
                    </div>
                }
                <br/>

                <div className={styles.inputFields}>
                    <div> Loan Tenure </div>
                    {
                         emi && totalPayable && totalInterest ?
                         <input value={loanTenure} className="form-control" />
                         :
                         <input className="form-control" type="number" name="loanTenure" placeholder="Enter months" value={loanTenure} onChange={handleLoanTenure}/>

                    }
                    <div> Months </div>
                </div>
                {
                    loanTenureFlag&&
                    <div className="mt-2">
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <div>
                                Please enter the loan tenure.
                            </div>
                        </div>
                    </div>
                }
                <br/>

                <div className={styles.inputFields}>
                    <div> Interest Rate </div>
                    {
                        emi && totalPayable && totalInterest ?
                        <input value={intRate} className="form-control" />
                        :
                        <input className="form-control" type="number" name="intRate" step=".01" pattern="^\d*(\.\d{0,2})?$" placeholder="NN.NN" value={intRate} onChange={handleIntRate}/>
                    }
                    <div> % </div>
                </div>
                {
                    intRateFlag&&
                    <div className="mt-2">
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <div>
                                Please enter the interest rate.
                            </div>
                        </div>
                    </div>
                }
                <br/>
                
                {
                    emi && totalPayable && totalInterest ?
                    <button style={{background:'#293A64', color:"white"}} className="btn " onClick={handleReset}>Reset</button>
                    :
                    <button style={{background:'#293A64', color:"white"}} className="btn" onClick={handleCalculate}>Calculate</button>

                }
            </div>
            {
                emi && totalPayable && totalInterest ?
                <>
                <hr/>
                <OutputForm emi={emi} totalPayable={totalPayable} totalInterest={totalInterest} />
                </>
                :
                ""
            }
        </div>
    )
}
export default InputForm