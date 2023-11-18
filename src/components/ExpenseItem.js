import './ExpenseItem.css'
function ExpenseItem(props){
 // const expenseDate=new Date(2023,11,2013)
 // const expenseTitle='Car Insurance'
 // const expenseAmount=294.67  
  //const LocationOfExpenditure='Lucknow'
    return (
        <div className='expense-item'>
           <div>{props.date.toISOString()}</div>
           <div className='expense-item__description'>
            <h2>{props.title}</h2>
            </div>
           <div className='expense-item__price'>${props.amount}</div>
           <div>{props.location}</div>
        </div>
        
    )
}
export default ExpenseItem;