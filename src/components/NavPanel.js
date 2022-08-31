/* eslint-disable react/jsx-no-duplicate-props */
import avatar from '../assets/images/avatar.png';
import aboutMe from '../assets/images/about-me.png';
import education from '../assets/images/Education.png';
import experience from '../assets/images/experience.png';
import skills from '../assets/images/Skills.png';
import portfolio from '../assets/images/Portfolio.png';
import contacts from '../assets/images/contacts.png';
import feedbacks from '../assets/images/Feedbacks.png';
import backArrow from '../assets/images/backarrow.png'
import feedback from '../components/Feedbacks';
import btn from '../assets/images/btn.png';
import { Link } from "react-router-dom";

function NavPanel() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})
    const scrollToEducation = () => window.scrollTo({ top: 250, behavior: "smooth"})
    const scrollToExperience = () => window.scrollTo({ top: 630, behavior: "smooth"})
    const scrollToSkills = () => window.scrollTo({ top: 870, behavior: "smooth"})
    const scrollToPortfolio = () => window.scrollTo({ top: 1200, behavior: "smooth"})
    const scrollToContacts = () => window.scrollTo({ top: 2100, behavior: "smooth"})
    const scrollToFeedbacks = () => window.scrollTo({ top: 2100, behavior: "smooth"})
    return (
        <div className="nav-panel">
            <img  src={avatar} alt='avatar' className='nav-panel__avatar'/>
            <h2 className='nav-panel__h2'>John Doe</h2>
            <ul className='nav-panel__ul'>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' ><img src={aboutMe} alt='about me icon' height={14} width={14}/></a><a className='nav-panel__a' className='nav-panel__li-a' onClick={scrollToTop}>About me</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon'><img src={education} alt='education icon' height={14} width={14}/></a><a className='nav-panel__a' className='nav-panel__li-a' onClick={scrollToEducation}>Education</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon'><img src={experience} alt='experience icon' height={14} width={14}/></a><a className='nav-panel__a' className='nav-panel__li-a' onClick={scrollToExperience}>Experience</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon'><img src={skills} alt='skills icon' height={14} width={14}/></a><a className='nav-panel__a' className='nav-panel__li-a' onClick={scrollToSkills}>Skills</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon'><img src={portfolio} alt='portfolio icon' height={14} width={14}/></a><a className='nav-panel__a' className='nav-panel__li-a' onClick={scrollToPortfolio}>Portfolio</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon'><img src={contacts} alt='contacts icon' height={14} width={14}/></a><a className='nav-panel__a' className='nav-panel__li-a' onClick={scrollToContacts}>Contacts</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon'><img src={feedbacks} alt='feedbacks icon' height={14} width={14}/></a><a className='nav-panel__a'  className='nav-panel__li-a' onClick={scrollToFeedbacks}>Feedbacks</a></li>
            </ul>
            <Link className='back-arrow-a' to={'/'}><img src={backArrow} alt='back arrow icon' className='back-arrow'/><span className='back-arrow-a__span'>Go back</span></Link>
        </div>
    )
}

export default NavPanel;