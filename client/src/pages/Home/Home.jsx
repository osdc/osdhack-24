import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='homepage'>
      <div className="event">OSDHack'24</div>
      <div className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia voluptates aliquam est nobis, sequi perferendis illum odio dolorum sunt?</div>
      <div className="button">
        <button className="register">
          <Link to='/register'>Register Now</Link>
        </button>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Home
