import React from 'react'
import { useNavigate } from 'react-router'

const Labs = () => {

    const navigate = useNavigate();

    function clickHandler(){
        //move to about page
        navigate('/about');
    }
  return (
    <div>
            <div>This is Labs Page</div>
            <button onClick={clickHandler}>Move to About page</button>
    </div>
  )
}

export default Labs