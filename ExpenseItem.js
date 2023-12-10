import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails';


const ExpenseItem=(props)=>
{   
    const DeleteHandler = (event)=>{
        event.target.parentElement.remove();
    }
    
    const[title,setTitle] =useState(props.title)
    const TitleHandler = ()=>{
        setTitle("updated")
        
    }

    const[amount,setAmount] =useState(props.amount)
    const amountHandler =()=>{
        setAmount("100")
    }

    return(
        < div className='expense_item'> 
             
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={title} amount={amount} />
        <button onClick={TitleHandler}>Change Title </button>
        <button onClick={DeleteHandler}>Delete Expense </button>
        <button onClick={amountHandler}>Amount Expense</button>
        
        </div>     
    )
}


export default ExpenseItem;