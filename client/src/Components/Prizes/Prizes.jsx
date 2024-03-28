import React from 'react'
import './Prizes.css'
import Detail from './Prizedetail'

const Prizes = () => {
    return (
        <div className='prize'>
            <h1 className="prizeHeading">&lt; prizes &gt;</h1>
            <div className="prizecontainer">
                {
                    Detail.map((item, index) => (
                        <div className="prizebox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <p className="position">{item.position}</p>
                            <p className="price">{item.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Prizes
