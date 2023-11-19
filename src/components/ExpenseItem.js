import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props){
 // const expenseDate=new Date(2023,11,2013)
 // const expenseTitle='Car Insurance'
 // const expenseAmount=294.67  
  //const LocationOfExpenditure='Lucknow'

  //const month=props.date.toLocaleString('en-US',{month:'long'});
  //const day=props.date.toLocaleString('en-US',{day:'2-digit'});
  //const year=props.date.getFullYear();
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}></ExpenseDate>
           <ExpenseDetails amount={props.amount} location={props.location} title={props.title} ></ExpenseDetails>
          
        </div>
        
    )
}
export default ExpenseItem;