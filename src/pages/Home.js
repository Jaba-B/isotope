import avatar from '../assets/images/avatar.png';
import Box from '../components/Box';
import Button from '../components/Button'
import '../assets/styles/homePage.css'
import '../index.css'
function Home() {
    const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \n ligula eget dolor. Aenean massa. Cum sociis natoque`;
    return(
        <div className='home-page'>
            <div className='content'>
                <img src={avatar} alt='persons avatar' height={163} width={163} />
                <h1 className='home-page__h1'>John Doe</h1>
                <Box title='Programmer. Creative. Innovator' content={text} h2className='home-page__h2' pclassName='home-page__p'></Box>
                <Button text='Know more' className="home-page__btn"/>
            </div>
        </div>
    )
}

export default Home;