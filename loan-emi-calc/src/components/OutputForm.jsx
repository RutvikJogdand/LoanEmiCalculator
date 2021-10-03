import React from "react";
import styles from "./FormStyles.module.css"

function OutputForm(props){

    console.log(props)
    return(
        <div>
            <h4 style={{color:'#293A64'}}>Loan EMI Calculator</h4>
            <div className={styles.OutputFormContainer}>
                <div> 
                    <p>Loan EMI</p>
                   ₹ {props.emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                </div>
                <div> 
                    <p>Total Interest Payable</p>
                   ₹ {props.totalInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                </div>
                <div> 
                    <p>Total Payment <span>(Principal + Interest)</span> </p> 
                   ₹ {props.totalPayable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                </div>
            </div>
        </div>
    )
}
export default OutputForm