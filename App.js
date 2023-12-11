import React ,{useState} from "react";
import Expenses from "./COMPONENTS/Expenses/Expenses";
import NewExpense from "./COMPONENTS/NewExpense/NewExpense";

let DUMMY_EXPENSE=[
  {
    id : 'e1',
    date: new Date(2023,11,20),
    title:"hotel",
    amount:"200",
  }
  ,
  { id : 'e2',
    date: new Date(2023,11,18),
    title:"Car Insurance",
    amount:"600",
  }
  ,
  { id : 'e3',
    date: new Date(2023,10,6),
    title:"mobile",
    amount:"800",
  }
  ,
  { id : 'e4',
    date: new Date(2023,5,20),
    title:"food",
    amount:"200",
  }
  

];



const App=()=>
{
    
  const[expenses,setExpenses] =useState(DUMMY_EXPENSE)
  
  const addExpenseHandler =(newExpenseData)=> {
      console.log(newExpenseData)

      const updatedExpense =[newExpenseData, ...expenses]
      setExpenses(updatedExpense)
    }

  return ( <div> 
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses  item={expenses}/>
            </div>
         );   
}

export default App;
