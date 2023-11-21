import React, {useState} from 'react'
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
 // const expenseDate=new Date(2023,11,2013)
 // const expenseTitle='Car Insurance'
 // const expenseAmount=294.67  
  //const LocationOfExpenditure='Lucknow'

  //const month=props.date.toLocaleString('en-US',{month:'long'});
  //const day=props.date.toLocaleString('en-US',{day:'2-digit'});
  //const year=props.date.getFullYear();
  const [title,setTitle]=useState(props.title)
  const [amount,setAmount]=useState(props.amount)
 
  const clickHandler=()=>{
    setTitle('Updated!!')
    console.log(title)
  }
  const deleteHandler=()=>{
    setAmount(100)      

    console.log(amount)
  }
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}></ExpenseDate>
           <ExpenseDetails amount={amount} location={props.location} title={title} ></ExpenseDetails>
           <button onClick={clickHandler}>Change Title</button>
           <button onClick={deleteHandler}>Update Amount</button>
        </div>
        
        
    )
}
export default ExpenseItem;