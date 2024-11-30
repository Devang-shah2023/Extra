import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const[firstName, setFirstName]= useState("")
  // const[lastName, setLastName]= useState("")

  // console.log(firstName)
  // console.log(lastName)

  // function changeFirstNameHandler(event){

  //   // console.log("printing first name")
  //   // console.log(event.target.value)

  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);
  // }

const [formData, setFormData]= useState({
  firstName:"",
  lastName:"",
  email:"",
  comments:"",
  isVisible: true,
  mode:"",
  favCar:""

})
console.log(formData)

function changeHandler(event){
  const {name,value,checked,type}= event.target
  setFormData(previousFormData=>{
    return{
      ...previousFormData,
      [name]: type==="checkbox"?checked:value
    }
  });
}

function submitHandler(event){
  event.preventDefault();
  //print
  console.log("Finally Printing the form Data:")
  console.log(formData)
}

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <input 
      type='text'
      placeholder='first name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
      />
      <br/>
      <br></br>

<input 
      type='text'
      placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
      />

      <br/>
      <br/>
  <input 
    type='email'
    placeholder='Enter your email here'
    onChange={changeHandler}
    name='email'
    value={formData.email}
    />
    <br/>
    <br/>

    <textarea
      placeholder='Enter your comments here'
      onChange={changeHandler}
      name='comments'
      value={formData.address}
    />

<br/>
<br/>

<input 
  type='checkbox'
  onChange={changeHandler}
  name='isVisible'
  id='isVisible'
  checked={formData.isVisible}
/>
<label htmlFor='isVisible'>Am I visible</label>
<br/>
<br/>

<fieldset>
  <legend>Mode:</legend>

  <input
  type='radio'
  onChange={changeHandler}
  name='mode'
  value="Online-Mode"
  id="Online-Mode"
  checked={formData.mode=='Online-Mode'}
/>
<label htmlFor='Online-Mode'>Online Mode</label>

<input
  type='radio'
  onChange={changeHandler}
  name='mode'
  value="Offline-Mode"
  id="Offline-Mode"
  checked={formData.mode=='Offline-Mode'}
/>
<label htmlFor='Offline-Mode'>Offline Mode</label>
</fieldset>
<br/>
<br/>
<label htmlFor='favCar'>Tell me your Favourite Car: </label>
<select
  onChange={changeHandler}
  name='favCar'
  id='favCar'
  value={formData.favCar}
  >
  <option value="Scorpio">Scorpio</option>
  <option value="Fortuner">Fortuner</option>
  <option value="Defender">Defender</option>
  <option value="Mustang">Mustang</option>
  <option value="Maybach">Maybach</option>
</select>
<br/>
<br/>

{/* <input type='submit' value='submit'/> */}

<button type='submit' >Submit</button>
      

    </form>
  </div>
  );
}

export default App;
