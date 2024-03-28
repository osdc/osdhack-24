// import './About.css';
import './two.css';
import { Link } from 'react-router-dom';
import image from '../../assets/exploreProgramme1.png'

const About = () => {
    return (
        <div className='main'>
            <h1 className='aboutHeading'>&lt; what is OSDHack? &gt; </h1>
            <div className='content'>
                <div className='sidebar'>
                    <p>&lt; begin &gt;</p>
                    <p>&lt; end &gt;</p>
                </div>
                <div className='about'>
                    <p >OSDHack’24 is a hybrid hackathon organized by the Open-Source Developers Community of JIIT, Noida. Scheduled for April 19-21, 2023, this three-day event will feature the main hacking session. Over the course of 48 hours, participants will engage in a congregation of like-minded hackers and tech enthusiasts, brainstorming and bringing their ideas to life.
                    </p>

                    <p>During the 48-hour duration of the hackathon, participants will immerse themselves in brainstorming sessions and collaborate on innovative projects. The offline version is poised to attract over 500 students and 90 teams, while its online counterpart expects participation from 400+ students and 90+ teams. The opening ceremony will be graced by notable dignitaries, including Vice Chancellor Prof. B.R. Mehta, HOD (CSE&IT) Prof. Vikas Saxena, and Faculty Coordinator-OSDC Prof. Manish Kumar Thakur.

                    </p>
                </div>
            </div>

            <h2 className='register'>&lt;  register &gt;</h2>
        </div>
    )
}

export default About;