import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
//import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expenseContent = <p>"Only single Expense here. Please add more..."</p>;
if (filteredExpenses.length > 0) {
  expenseContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.LocationOfExpenditure}
    />
  ));
}


return (
  <div className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {expenseContent}
  </div>
);


};

export default Expenses;
