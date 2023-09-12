import React, { useState }  from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const[selectedYear,setYear] = useState("2020");

  const saveYearHandler = (selectedYear) =>{
    setYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={selectedYear} onSaveYear={saveYearHandler}/>
    {

      props.items.filter((item) => item.date.getFullYear() == selectedYear)
.map( (element) => 
        <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
        />
    )}

    </Card>
    </div>
  );
}

export default Expenses;
