import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[text, setText]=useState('');
  const[name, setName]=useState('love')

//variation 1- Every Render

  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // });

//variation 2- First Render

// useEffect(()=>{
//   console.log("UI RENDERING DONE");
// }, []);


//variation 3- First Render + Whenever dependency changes

// useEffect(()=>{
//    console.log("change observed")
// },[name]);


//variation 4- To handle unmounting of a componenet

useEffect(()=>{
  //add event listner
  console.log("Listner Added")

  return()=>{
    console.log("Listner Removed")
  }
}, [text]);





  function changeHandler(){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
