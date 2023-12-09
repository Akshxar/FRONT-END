import React from "react";
import Expenses from "./COMPONENTS/Expenses/Expenses";



const App=()=>
{
    let expenses=[
      {
        expenseDate: new Date(2023,11,20),
        expenseTitle:"hotel",
        expenseAmount:"200",
      }
      ,
      {
        expenseDate: new Date(2023,11,18),
        expenseTitle:"Car Insurance",
        expenseAmount:"600",
      }
      ,
      {
        expenseDate: new Date(2023,10,6),
        expenseTitle:"mobile",
        expenseAmount:"800",
      }
      ,
      {
        expenseDate: new Date(2023,5,20),
        expenseTitle:"food",
        expenseAmount:"200",
      }
      ,

    ]

  return ( <div> 
            <h1> let's Get Started </h1>
            <Expenses  item={expenses}/>
            
            </div>
         );   
}

export default App;
