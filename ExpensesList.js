import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList =(props)=>{

    return(<div>

          
        {props.items.length ===0 && <p style={{ color: 'green'}} >No Expenses Found </p>  }  
        {props.items.length> 0 && 
        props.items.map((expense) => (
            <ExpenseItem
            key ={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
          ))}
         {props.items.length ===1 && <p style={ {color:"yellow"}}> Only single Expense here. Please add more... </p>  } 



    </div>)

}

export default ExpenseList