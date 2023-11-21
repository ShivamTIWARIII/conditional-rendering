import React,{useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(){
    const [enteredTitle,setTitle]=useState('')
    const [enteredAmount,setAmount]=useState('')
    const [enteredDate,setDate]=useState('')
   // const [userInput,setUserInput]=useState({
      //  enteredTitle:'',
     //   enteredAmount:'',
      //  enteredDate:'',
   // })

    const titleChangeHandler=(event)=>{
        setTitle(event.target.value)     
     //   setUserInput({
       //     ...userInput,
         //   enteredTitle:event.target.value
       // })   
    }

    const amountChangeHandler=(event)=>{
        setAmount(event.target.value)
     //   setUserInput({
         //   ...userInput,
        //    enteredAmount:event.target.value
    //    })  
   //    setUserInput((prevState)=>{
  //      return {...prevState, enteredTitle:event.target.value
       // }
      // }) 
    }

    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
      //  setUserInput({
        //    ...userInput,
        //    enteredDate:event.target.value
      //  })   
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData)

    }
    return(
     
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls '>
                <div className='new-expense__control'>
            <label>Expense title
                <input type='text' name='title' onChange={titleChangeHandler}></input>
            </label>
            </div>
            <div className='new-expense__control'>
            <label>Expense Amount
                <input type='number' name='amount' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
            </label>
            </div>
            <div className='new-expense__control '>
            <label>Date
                <input type='date' name='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
            </label>
            </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            </div>
            
        </form>
        
    )
}
export default ExpenseForm