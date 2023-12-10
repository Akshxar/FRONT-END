import React,{useState} from "react";
import './ExpenseForm.css'


const ExpenseForm = ()=>{

    const [title,setTitle]= useState("")
    const [date,setDate]= useState("")
    const [amount,setAmount]= useState("")
     
    const submitHandler = (event)=>{
        event.preventDefault();
        alert(title,date,amount)
    }


    return( <div className="expense-form-container"> 
           
           <form onSubmit={submitHandler} className="expense-form">
            <label>ExpenseTitle</label>
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value) }/>

            <label>ExpenseDate</label>
            <input type='date'value={date} onChange={(e)=> setDate(e.target.value)} />

            <label>ExpenseAmount</label>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />

            <button type='submit' > Add Expense </button>
           </form>



    </div>)

}

export default ExpenseForm