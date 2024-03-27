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
                        <div className="prizebox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="position">{item.name}</div>
                            <div className="price">{item.role}</div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Faculty
