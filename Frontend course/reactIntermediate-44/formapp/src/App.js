import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[formData, setFormData] = useState({
    firstname:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comments:false, candidates:false, offers:false
    , pushNotifications:""
  })

  function changeHandler(event){
    const{name, value, checked, type}= event.target;
    setFormData((prev)=>({...prev, [name]:type==="checbox"? checked:value}));
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value fo form Data:")
    console.log(formData);
  }
  return(
  <div className='flex flex-col items-center mt-2 '>
    <form onSubmit={submitHandler}>
       
    <label htmlFor='firstName'>First Name</label>
     <br />
      <input type='text' 
      name='firstName'
      id='firstName'
      placeholder='Devang'
      value={formData.firstName}
      onchange={changeHandler}
      className='outline'/>


<br/>
<label htmlFor='lastName'>Last Name</label>
     <br />
      <input type='text' 
      name='lastname'
      id='lastName'
      placeholder='Shah'
      value={formData.lastName}
      onchange={changeHandler}
      className='outline'/>

<br/>
<label htmlFor='email'>Email Address</label>
     <br />
      <input type='text' 
      name='email'
      id='email'
      placeholder='Devang@abcd.com'
      value={formData.email}
      onChange={changeHandler}
      className='outline'/>

<br/>
      <label htmlFor='country'>Country</label>
      <select
      name='country'
      id='country'
      value={formData.country}
      onChange={changeHandler}
      className='outline'>
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>

      <br/>
<label htmlFor='streetAddress'>Street Address</label>
     <br />
      <input type='text' 
      name='streetAddress'
      id='streetAddress'
      placeholder='B-25C'
      value={formData.streetAddress}
      onchange={changeHandler}
      className='outline'/>

<br/>
<label htmlFor='city'>City</label>
     <br />
      <input type='text' 
      name='city'
      id='city'
      placeholder='B-25C'
      value={formData.city}
      onchange={changeHandler}
      className='outline'/>


<br/>
<label htmlFor='state'>State/Province</label>
     <br />
      <input type='text' 
      name='state'
      id='state'
      placeholder='Gujarat'
      value={formData.state}
      onchange={changeHandler}
      className='outline'/>


<br/>
<label htmlFor='postalCode'>Postal Code </label>
     <br />
      <input type='text' 
      name='postalCode'
      id='postalCode'
      placeholder='360001'
      value={formData.postalCode}
      onchange={changeHandler}
      className='outline'/>

<br/>
<br/>

<fieldset>
  <legend>By Email</legend>

  
<div className='flex'>
<input
    id='comments'
    name='comments'
    type='checkbox'
    checked={formData.comments}
  />
  <div>
    <label htmlFor='comments'>Comments</label>
    <p>Get notified when someone posts a comment on posting.</p>
  </div>
</div>

<div className='flex'>
<input
    id='candidates'
    name='candidates'
    type='checkbox'
    checked={formData.candidates}
  />
  <div>
    <label htmlFor='candidates'>Candidates</label>
    <p>Get notified when a candidate applies for a job.</p>
  </div>
</div>

<div className='flex'>
<input
    id='offers'
    name='offers'
    type='checkbox'
    checked={formData.offers}
  />
  <div>
    <label htmlFor='offers'>Offers</label>
    <p>Get notified when a candidate accepts or rejects an offer.</p>
  </div>
</div>
  
</fieldset>

<br/>
<br/>

<fieldset>
  <legend>Push notifications</legend>
  <p>These are delivered via SMS to your mobile phone.</p>

<br/>
  <input
    type='radio'
    id='pushEverything'
    name='pushNotifications'
    value="Everything"
    onChange={changeHandler}

  />
  <label htmlFor='pushEverything'>Everything</label>
  <br/>
  <input
    type='radio'
    id='pushEmail'
    name='pushNotifications'
    value="same as email"
    onChange={changeHandler}

  />
  <label htmlFor='pushEmail'>Same as email</label>
  <br/>
  <input
    type='radio'
    id='pushNothing'
    name='pushNotifications'
    value="No Push Notifications"
    onChange={changeHandler}

  />
  <label htmlFor='pushNothing'>No Push Notifications</label>
</fieldset>

<button
className='bg-blue-500 text-white font-bold rounded py-2 px-3'>Save</button>

    </form>
  </div>
  );
}

export default App;
