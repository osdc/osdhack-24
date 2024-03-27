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
                    <p >The online hackathon was organized with Devfolio as a partner and saw over 450 participants all across India from notable institutions such as IITs, IIITs, NITs, VIT, TIET, LNMIIT, IGDTUW etc. The offline hackathon was organized by the Open-Source Developers Community (OSDC) of Jaypee Institute of Information Technology (JIIT), Noida.</p>

                    <p>The highly­anticipated event provided a unique platform for tech enthusiasts and hackers to come together and showcase their talents.
                        The hackathon spanned over 48 hours where participants were invited to brainstorm and build on their innovative ideas. Participation of 500+ students and 90+ teams in the offline version & of 400+ students and 90+ teams in the online version of the event was observed and the opening ceremony was honored by distinguished dignitaries including Vice Chancellor Prof. B.R. Mehta, HOD (CSE&IT) Prof. Vikas Saxena, Faculty Coordinator-OSDC Prof. Manish Kumar Thakur.
                        Register Now</p>
                </div>
            </div>
    
            <h2 className='register'>&lt;  register &gt;</h2>
        </div>
    )
}

export default About;