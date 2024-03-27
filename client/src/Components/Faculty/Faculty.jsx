import React from 'react'
import Detail from './Facultydetail.js'
const Faculty = () => {
  return (
    <div className='prize'>
            <div className="heading">COORDINATORS</div>
            <div className="prizecontainer">
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
