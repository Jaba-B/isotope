import Box from '../components/Box';
import Button from '../components/Button';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Feedbacks from '../components/Feedbacks';
import Contacts from '../components/Contacts';
import NavPanel from '../components/NavPanel';
import Portfolio from '../components/Portfolio';
import phone from '../assets/images/phone.png';
import avatar from '../assets/images/feedback-avatar.jpg';
import mail from '../assets/images/mail.png';
import twitter from '../assets/images/twitter.png';
import fb from '../assets/images/fb.png';
import skype from '../assets/images/skype.png';
import btn from '../assets/images/btn.png';
import upArrow from '../assets/images/uparrow.png'
import '../assets/styles/innerPage.css';
import '../index.css';

function Inner() {
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque';
    const data = [ { date: '2013-2014', info: { company: 'Google', job: 'Front-end developer / php programmer', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' } }, { date: '2012', info: { company: 'Twitter', job: 'Web developer', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' } } ];
    const feedbackText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ';
    const educationData = [{"date": 2001,"title": "Title 0","text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n"},{"date": 2000,"title": "Title 1","text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n"},{"date": 2012,"title": "Title 2","text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n"}];
    function hideShow() {
        const navPanel = document.getElementById('nav-panel');
        const pageInfo = document.getElementById('inner-page__info');
        let x = window.matchMedia("(min-width: 600px)")
        if (x.matches) {
            if(navPanel.classList.contains('toggle')) {
                navPanel.classList.remove('toggle');
                pageInfo.style.left='250px'
            } else { navPanel.classList.add('toggle');
                pageInfo.style.left='0px'
            }
        } else {
            if(navPanel.classList.contains('toggle')) {
                navPanel.classList.remove('toggle');
                pageInfo.style.left='250px'
            } else { navPanel.classList.add('toggle');
                pageInfo.style.left='190px'
            }
        }

    }
    return(
        <div className='inner-page'>
            <div id='nav-panel'>
                <NavPanel />
            </div>
            <div className='inner-page__info' id='inner-page__info'>
                <button className='nav-panel__toggle-btn' id='nav-panel__toggle-btn' onClick={hideShow}><img src={btn} className='nav-panel__toggle-btn-img' alt='btn icon'/></button>
                <Box title='About me' content={text} h2className='inner-page__title margin-correction' pclassName='inner-page__p'></Box>
                <Education title='Education' data={educationData}/>
                <Experience title='Experience' data={data}/>
                <Skills width='70px'/>
                <section>
                    <h2 className='inner-page__title'>Portfolio</h2>
                    <Portfolio />
                </section>
                <section>
                    <h2 className='inner-page__title'>Contacts</h2>
                    <Contacts icon={phone} contact={'500 342 242'} />
                    <Contacts icon={mail} contact={'office@kamsolutions.pl'} />
                    <Contacts icon={twitter} name={'Twitter'} contact={'office@kamsolutions.pl'} />
                    <Contacts icon={fb} name={'Facebook'} contact={'https://www.facebook.com/facebook' } />
                    <Contacts icon={skype} name={'Skype'} contact={'kamsolutions.pl'} />
                </section>
                <section>
                    <h2 className='inner-page__title'>Feedbacks</h2>
                    <Feedbacks url={avatar} nameAndPosition={'Martin Friman Programmer,'} webSite={'somesite.com'} text={feedbackText}/>
                    <Feedbacks url={avatar} nameAndPosition={'Martin Friman Programmer,'} webSite={'somesite.com'} text={feedbackText}/>
                </section>
                <a className='up-arrow__a' href='a'><img src={upArrow} width={13} heigt={8} className='up-arrow' alt='up arroa icon'/></a>
            </div>
        </div>

    )
}

export default Inner;