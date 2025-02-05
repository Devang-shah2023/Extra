import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
    const navigate= useNavigate()

    function clickHandler() {
        // navigate to support page
        navigate('/support')

    
    }
  return (
    <div>
            <div>This is About Page</div>
            <button onClick={clickHandler}>Move to Support page</button>
    </div>
  )
}

export default About