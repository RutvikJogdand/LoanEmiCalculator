import React from "react";
import styles from "./FormStyles.module.css"

function OutputForm(props){

    console.log(props)
    return(
        <div>
            <h4 style={{color:'#293A64'}}>Loan EMI Calculator</h4>
            <div className={styles.OutputFormContainer}>
                <div> 
                    <p> <b> Loan EMI </b> </p>
                  <b> ₹ {props.emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  </b>
                </div>
                <div> 
                    <p> <b> Total Interest Payable </b> </p>
                 <b>  ₹ {props.totalInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </b>
                </div>
                <div> 
                    <p> <b> Total Payment </b> <span>(Principal + Interest)</span> </p> 
                  <b> ₹ {props.totalPayable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </b>
                </div>
            </div>
        </div>
    )
}
export default OutputForm