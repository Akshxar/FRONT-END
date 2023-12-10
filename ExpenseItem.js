import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails';


const ExpenseItem=(props)=>
{   
    const DeleteHandler = (event)=>{
        event.target.parentElement.remove();
    }
    
    let title=props.title
    const TitleHandler = ()=>{
        alert("changeTitle")
        
    }

    return(
        < div className='expense_item'> 
             
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={title} amount={props.amount} />
        <button onClick={TitleHandler}>Change Title </button>
        <button onClick={DeleteHandler}>Delete Expense </button>
        
        </div>     
    )
}


export default ExpenseItem;