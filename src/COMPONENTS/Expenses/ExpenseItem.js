import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card.js';

const ExpenseItem=(props)=>
{      
    return(
        < Card className='expense_item'> 
             
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={props.title} amount={props.amount} />
        
        </Card>     
    )
}


export default ExpenseItem;