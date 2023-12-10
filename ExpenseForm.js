import React,{useState} from "react";
import './ExpenseForm.css'


const ExpenseForm = ()=>{

    const [enteredTitle,setEnteredTitle]= useState("")
    const [enteredDate,setEnteredDate]= useState("")
    const [enteredAmount,setEnteredAmount]= useState("")
     
    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData ={
            title : enteredTitle,
            date : new Date(enteredDate),
            amount : enteredAmount,
        }
        console.log(expenseData)
    }


    return( <div className="expense-form-container"> 
           
           <form onSubmit={submitHandler} className="expense-form">
            <label>ExpenseTitle</label>
            <input type='text' value={enteredTitle} onChange={(e)=> setEnteredTitle(e.target.value) }/>

            <label>ExpenseDate</label>
            <input type='date'value={enteredDate} onChange={(e)=> setEnteredDate(e.target.value)} />

            <label>ExpenseAmount</label>
            <input type="number" value={enteredAmount} onChange={(e)=> setEnteredAmount(e.target.value)} />

            <button type='submit' > Add Expense </button>
           </form>

    </div>)

}

export default ExpenseForm
