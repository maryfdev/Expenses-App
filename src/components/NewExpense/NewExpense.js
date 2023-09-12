import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

  const[cancelFlag,setCancelFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const changeCancel = (flag) => {
    setCancelFlag(flag);
  }

  if(cancelFlag == true){
    return (
      <div className='new-expense'><button onClick={()=> setCancelFlag(false)}>Add New Expense</button></div>
    )
  }else if(cancelFlag == false){
    return (
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChangeCancel={changeCancel}/>
      </div>
    );
  }
};

export default NewExpense;
