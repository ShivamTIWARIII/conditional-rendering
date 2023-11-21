import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm'
const App=()=> {
  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'Jaipur'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,LocationOfExpenditure: 'Mumbai'},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Lucknow'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'Delhi'
    },
  ];
  return (
    <div>
      <h1>It's my first react js project!</h1>
      <ExpenseForm></ExpenseForm>
      <ExpenseItem 
      title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}
      location={expense[0].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}
      location={expense[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
      location={expense[2].LocationOfExpenditure}
      ></ExpenseItem>

<ExpenseItem
      title={expense[3].title}
      amount={expense[3].amount}
      date={expense[3].date}
      location={expense[3].LocationOfExpenditure}
      ></ExpenseItem>
      
    </div>
   
  );
}

export default App;
