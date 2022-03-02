// import hooks
import { Link } from 'react-router-dom';

// import files
import  headerImage from '../../assets/homepage/header/header.png';
import friendly from '../../assets/homepage/thirdSection/friendly.svg';
import passionate from '../../assets/homepage/thirdSection/passionate.svg';
import resourceful from '../../assets/homepage/thirdSection/resourceful.svg';
import Card from '../../components/card/Card';
import Button from '../../components/reusable/Button/Button';
import './home.scss';



export default function Home() {
  return (
      <div className='mx-5 home'>
        <header className="
        px-5
        pt-5 
        pt-md-0
        d-flex
        justify-content-center
        justify-content-md-between
         flex-column 
        flex-md-row 
        bg-primary
        overflow-hidden
        ">
          <div className='text-center text-md-left header-text col-md-6 align-self-center'>
            <h1 className='text-white'>
              Award-winning custom
              <br/> designs and digital<br/>
              branding solutions
            </h1>
            <p className='text-white'>
              With over 10 years in the industry, we are experienced in 
              creating fully responsive websites, app design and engaging
              brand experiences. 
              Find out more about our services.
            </p>
    <Link to = '/contact'>
      <Button text="LEARN MORE" styles="home-button"/>
    </Link>
          </div>
          <div className=' col-md-6 header-image-cover align-self-center h-100'>
          <img src={headerImage} alt='Header' className='header-image w-100 '></img>
          </div>
        </header>



        {/* cards section */}
        <div className=' 
        page-cards
        home-grid
        text-center 
        gap-3
        my-5
        d-flex
        flex-column
        flex-lg-row
        justify-content-between
        
        '>
          <Link to='/web-design' className='col-lg-6
          mt-4
          web-card 
          d-flex 
          align-items-center 
          flex-column 
          justify-content-center 
          px-4
          py-5
          h-lg-100
          '>
            <h3>
              WEB DESIGN
            </h3>
            <p className=''>
              VIEW PROJECTS
              <span className="mx-3">
              <svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
              </span>
            </p>
   
          </Link>
          <div className='d-flex flex-column col-lg-6'>
          <Link to='/app-design'>
          <div className='
          app-card 
          app-grid-card
          mt-lg-4
          d-flex 
          align-items-center 
          flex-column 
          justify-content-center 
          p-5
          mb-3
          '>
            <h3 className='mt-md-3'>
             APP DESIGN
            </h3>
            <p>
              VIEW PROJECTS
              <span className="mx-3">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
              </span>
            </p>
          </div>
          </Link>

          <Link to='/graphic-design'>
          <div className='
          graphic-card 
          graphic-grid-card
          d-flex 
          align-items-center 
          flex-column 
          justify-content-center 
          p-5
          ' >
            <h3  className='mt-md-3'>
              GRAPHIC DESIGN
            </h3>
            <p>
              VIEW PROJECTS
              <span className="mx-3">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
              </span>
            </p>
          </div>
          </Link>
          </div>
        </div>




        {/* third section */}
        <div className='d-flex 
        justify-content-center  
        justify-content-sm-start 
        text-center 
        text-sm-left 
        text-xl-center
        flex-column 
        justify-content-xl-between 
        third-section 
        flex-xl-row 
        flex-xl-nowrap
        my-5'>
          
          <div className='d-sm-flex flex-sm-row d-xl-inline mb-5 mb-xl-0 mt-4 mt-xl-0'>
            <img src={passionate} alt='showing how passionate we are' className=' me-sm-4 me-xl-0'/>
            <div className='align-self-center mt-5  mx-4'>
            <h5 className='mb-4 fw-normal'>
              PASSIONATE
            </h5>
            <p>
              Each project starts with an in-depth brand research
              
              to ensure we only create products that serve a
              
              purpose. We merge art, design, and technology
              
              into exciting new solutions.
            </p>
            </div>
          </div>


          <div className='d-sm-flex flex-sm-inline-block d-xl-inline mb-5 mb-xl-0'>
            <img src={resourceful} alt='showing how resourceful we are' className='me-sm-4 me-xl-0'/>
            <div className='align-self-center mt-5 mx-4'>
            <h5 className='mb-4 fw-normal'>
              RESOURCEFUL
            </h5>
            <p>
              Everything that we do has a strategic purpose. 
              We 
              use an agile approach in all of our projects and 
              value customer collaboration. It guarantees
              superior results that fulfill our clients' needs.
            </p>
            </div>
          </div>


          <div className='d-sm-flex flex-sm-inline-block d-xl-inline mb-5 mb-xl-0'>
            <img src={friendly} alt=' showing how friendly we are' className=''/>
            <div className='align-self-center mt-5 mx-4'>
            <h5 className='mb-4 fw-normal'>
              FRIENDLY
            </h5>
            <p>
              We are a group of enthusiastic folks who know how
              to put people first. Our success depends on our 
              customers, 
              ans we strive to give them the best 
              experience a company can provide.
            </p>
            </div>
          </div>
        </div>
        <Card/>
      </div>
  );
}
