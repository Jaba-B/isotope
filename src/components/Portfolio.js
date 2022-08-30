import UI from '../assets/images/card_1.jpg';
import Code from '../assets/images/card_3.png';
import $ from 'jquery';
import isotope from 'isotope-layout';
import jQueryBridget from 'jquery-bridget'

function Portfolio(props) {
    jQueryBridget( 'isotope', isotope, $ );

    let $grid = $('.portfolio-items').isotope({
        // options
    });
      // filter items on button click
      $('.portfolio-menu ul').on( 'click', 'li', function() {
        let filterValue = $(this).attr('data-filter');
        window.$grid.isotope({ filter: filterValue });
    });

    return (
        <div className="portfolio-container">
            <div className="portfolio-menu">
                <ul>
                    <li data-filter='*'>All</li>
                    <span>/</span>
                    <li data-filter='.ui'>Ui</li>
                    <span>/</span> 
                    <li data-filter='.code'>Code</li>                  
                </ul>
            </div>
            <div className="portfolio-items">
                <div className="portfolio-item ui">
                    <img src={UI} alt='ui icon'></img>
                    <div className='portfolio-overlay'>
                        <span className='education-title'>Some text</span>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis</p>
                        <a href='somesite.com'>View source</a>
                    </div>
                </div>
                <div className="portfolio-item code">
                    <img src={Code} alt='ui icon'></img>
                    <div className='portfolio-overlay'>
                        <span className='education-title'>Some text</span>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis</p>
                        <a href='somesite.com'>View source</a>
                    </div>
                </div>
                <div className="portfolio-item ui">
                    <img src={UI} alt='ui icon'></img>
                    <div className='portfolio-overlay'>
                        <span className='education-title'>Some text</span>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis</p>
                        <a href='somesite.com'>View source</a>
                    </div>
                </div>
                <div className="portfolio-item code">
                    <img src={Code} alt='ui icon'></img>
                    <div className='portfolio-overlay'>
                        <span className='education-title'>Some text</span>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis</p>
                        <a href={'http://www1.somesite.com/'} >View source</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;