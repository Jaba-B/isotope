/* eslint-disable react/jsx-no-duplicate-props */
import avatar from '../assets/images/avatar.png';
import aboutMe from '../assets/images/about-me.png';
import education from '../assets/images/Education.png';
import experience from '../assets/images/experience.png';
import skills from '../assets/images/Skills.png';
import portfolio from '../assets/images/Portfolio.png';
import contacts from '../assets/images/contacts.png';
import feedbacks from '../assets/images/Feedbacks.png';
import btn from '../assets/images/btn.png';

function NavPanel() {
    return (
        <div className="nav-panel">
            <img  src={avatar} alt='avatar' className='nav-panel__avatar'/>
            <h2 className='nav-panel__h2'>John Doe</h2>
            <ul className='nav-panel__ul'>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={aboutMe} alt='about me icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>About me</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={education} alt='education icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>Education</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={experience} alt='experience icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>Experience</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={skills} alt='skills icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>Skills</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={portfolio} alt='portfolio icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>Portfolio</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={contacts} alt='contacts icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>Contacts</a></li>
                <li className='nav-panle__li'><a className='nav-panel__li-icon' href='a'><img src={feedbacks} alt='feedbacks icon' height={14} width={14}/></a><a className='nav-panel__a' href='a' className='nav-panel__li-a'>Feedbacks</a></li>
            </ul>
        </div>
    )
}

export default NavPanel;