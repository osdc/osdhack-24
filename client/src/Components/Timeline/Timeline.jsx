import './Timeline.css'
import logo from '../../assets/exploreProgramme1.png'
const Timeline = () => {
    return (
        <>
            <div className='timeline'>
                <h1 className='timelineHeadline'>&lt; timeline &gt;</h1>

                <div className='timeWrap'>
                    <div className='time'>
                        <div>
                            <p>Day 1</p>
                            <div className='right'>
                                <p>.......</p>
                                <div>
                                    <h4>&lt; 19th April &gt;</h4>
                                    <p>5pm - Opening Ceremony and Speaker Session</p>
                                    <p>6pm - First Evaluation and hacking period begins</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Day 2</p>
                            <div className='right'>
                                <p>.......</p>
                                <div>
                                    <h4>&lt; 20th April &gt;</h4>
                                    <p>1pm - Mid Evaluations</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Day 3</p>
                            <div className='right'>
                                <p>.......</p>
                                <div>
                                    <h4>&lt; 21st April &gt;</h4>
                                    <p>9am - Final Evaluations</p>
                                    <p>6pm - Winner's Announcement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='timeSmall'>
                        <div>
                            <h4>Day 1</h4>
                            <h5>&lt; 19th April &gt;</h5>
                            <p>5pm - Opening Ceremony and Speaker Session</p>
                            <p>6pm - First Evaluation and hacking period begins</p>
                        </div>
                        <div>
                            <h4>Day 2</h4>
                            <h5>&lt; 20th April &gt;</h5>
                            <p>1pm - Mid Evaluations
                            
                            </p>
                        </div>
                        <div>
                            <h4>Day 3</h4>
                            <h5>&lt; 21st April &gt;</h5>
                            <p>9am - Final Evaluations<br></br>6pm - Winner's Announcement
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;