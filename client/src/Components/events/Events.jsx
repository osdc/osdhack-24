import React from 'react'
import './about.css'

export default function Events() {
  return (
    <>
      <div className='eventsMain'>
        <h1>&lt; mini events &gt;</h1>

        <div className='events'></div>
        <div className='bubble'>
          <div>
            <img src="" alt="" />
            <p>&lt; capture the flag &gt;</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>&lt; treasure of town &gt;</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>&lt; Speaker Session &gt;</p>
          </div>
        </div>
      </div>

      {/* <div className='eventsMain'>
        <h1>&lt; speaker &gt;</h1>
        <h3 className='comingSoon'>&lt; coming soon &gt;</h3>

        <div className='events'></div>
        <div className='bubble'>
          <div>
            <img src="" alt="" />
            <p>&lt; hello &gt;</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>&lt; hello &gt;</p>
          </div>
          
        </div>
      </div> */}
    </>
  )
}
