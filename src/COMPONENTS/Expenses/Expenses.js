import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';


const Expenses=(props)=>
{
    return (<Card className='expenses'>

            <ExpenseItem
             date={props.item[0].expenseDate}
             title={props.item[0].expenseTitle}
             amount={props.item[0].expenseAmount} > 
            </ExpenseItem>
            
            <ExpenseItem
             date={props.item[1].expenseDate}
             title={props.item[1].expenseTitle}
             amount={props.item[1].expenseAmount} > 
            </ExpenseItem>

            <ExpenseItem
             date={props.item[2].expenseDate}
             title={props.item[2].expenseTitle}
             amount={props.item[2].expenseAmount} > 
            </ExpenseItem>

            <ExpenseItem
             date={props.item[3].expenseDate}
             title={props.item[3].expenseTitle}
             amount={props.item[3].expenseAmount} > 
            </ExpenseItem>




    </Card>)
}

export default Expenses;