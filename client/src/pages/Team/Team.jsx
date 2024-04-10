// import './Team.css'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Detail from './Detail';

const Team = () => {
    return (
        // <div className='team'>
        //     <div className='memberHeading'>TEAM MEMBERS</div>
        //     <div className="teamsection">
        //     {
        //         Detail.map((item, index) => (
        //             <div className="member-card" key={index}>
        //                 <div className="card-content">
        //                     <img src={item.img} alt="Profile Picture" className="profile-picture" />
        //                     <div className='member-detail'>
        //                         <div className="member-name">{item.name}</div>
        //                         <h3 className='member-role'>{item.role}</h3>
        //                         <div className="social-icons">
        //                             <div><a href={item.social[0]}><FaGithub /></a></div>
        //                             <div><a href={item.social[1]}><FaDiscord /></a></div>
        //                             <div><a href={item.social[2]}><FaLinkedin /></a></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //     }
        //     </div>
        // </div>
        <>
         <div className='codeofconduct'>
            <div className="codheading">&lt;brochure&gt;</div>
            <div className="codcontent">
            <div className="brochurebutton">
            <button className="brochureButtonDownload"><a href="https://drive.google.com/file/d/1HYrVH3nXDyVtFgqvpyAC2GZOdzx8-CgP/view?usp=sharing">&lt;download brochure&gt;</a></button>
            </div>
                <div>
                TL;DR: OSDHack fosters an inclusive environment where everyone is respected. Harassment, abuse, or any behavior causing discomfort are not tolerated. Participants, including organizers and volunteers, must adhere to this Code of Conduct.
                </div>
                <div>
                If you experience or witness harassment, please report it using the provided procedures. We prioritize your safety and well-being.
                </div>
                <div>
                Our expectations are simple: respect others, use inclusive language, accept different viewpoints graciously, and create space for everyone to participate. Unacceptable behavior includes harassment, discriminatory speech/actions, threats, disruption of events, and unauthorized recording.
                </div>
                <div>
                If you believe the Code of Conduct is violated, report it to the event organizer or use the provided incident report form. Incidents will be reviewed, and appropriate actions will be taken, which may include education, removal from the event, or restrictions from future participation.
                </div>
                <div>
                We expect all participants to uphold these standards at all event-related activities. Let's ensure a safe and positive experience for everyone involved.
                </div>

                
               


            </div>
        
        </div>
        </>
    )
}

export default Team;