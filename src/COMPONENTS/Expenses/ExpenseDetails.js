import React from "react";

const ExpenseDetails = (props)=>{
    return ( <div>

          <div className='expense_item_description'> 
        <h2 className='expense_item_h2'>{props.title}</h2>
        <div className='expense_item_price'>${props.amount}</div>
          </div>
          
    </div>)
}

export default ExpenseDetails;

