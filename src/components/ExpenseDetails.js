function ExpenseDetails(props){
    return (
        <>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            </div>
            <div className='.expense-item__details'>{props.location}</div>
           <div className='expense-item__price'>${props.amount}</div>

        </>
    );
}
export default ExpenseDetails