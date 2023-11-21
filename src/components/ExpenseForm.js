import './ExpenseForm.css'
function ExpenseForm(){
    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }
    return(
       <div new-expense>
        <form>
            <div className='new-expense__controls '>
                <div className='new-expense__control'>
            <label>Expense title
                <input type='text' name='title' onChange={titleChangeHandler}></input>
            </label>
            </div>
            <div className='new-expense__control'>
            <label>Expense Amount
                <input type='number' name='amount' min='0.01' step='0.01'></input>
            </label>
            </div>
            <div className='new-expense__control '>
            <label>Date
                <input type='date' name='date' min='2019-01-01' max='2022-12-31'></input>
            </label>
            </div>
            </div>
            <div className='new-expense__actions'>
            <button>Add Expense</button>
            </div>
            
        </form>
        </div>
    )
}
export default ExpenseForm