import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props){

    // const [title, setTitle]=useState('');
    // const[date, setDate]=useState('');

    // function titleChangeHandler(event){
    //     setTitle(event.target.value);
    // }
    // function dateChangeHandler(event){
    //     setDate(event.target.value);
     
    const [newTitle, setTitle]=useState('');
    const[newDate, setDate]=useState('');

 
    function titleChangeHandler(event, prevState){
        let obj= {...prevState, title:event.target.value};
        console.log(obj);
    }

    function dateChangeHandler(event){
    }

    function submitHandler(event){
        event.preventDefault();

        const productData={
            title:newTitle,
            date:newDate
        };

        props.onSaveProduct(productData);
       setTitle('');
        setDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-product__control'>
            <div className='new-product__control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product__control'>
                <label>Date</label>
                <input type='date' value={newDate} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product__button'>
                <button type='submit'>Add Product</button>
            </div>
            </div>
            
        </form>
    )
}

export default ProductForm;