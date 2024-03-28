import React from 'react'
import Detail from './Facultydetail.js'
import './About.css'
const Faculty = () => {
  return (
    <div className='faculty'>
            <h1 className="heading2">&lt; faculty coordinators &gt;</h1>
            <div className="facultycontainer">
                {
                    Detail.map((item, index) => (
                        <div className="facultyBox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <p className="name">{item.name}</p>
                            <p className="posiiton">{item.role}</p>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Faculty
