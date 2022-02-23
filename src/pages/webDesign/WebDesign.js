import { Link } from "react-router-dom";
import Heading from "../../components/reusable/heading/Heading";
import Projects from "../../components/reusable/projectCards/Projects";
import './webDesign.scss';

import Image1 from '../../assets/designs/web/image-blogr.jpg';
import Image2 from '../../assets/designs/web/image-builder.jpg';
import Image3 from '../../assets/designs/web/image-camp.jpg';
import Image4 from '../../assets/designs/web/image-express.jpg';
import Image5 from '../../assets/designs/web/image-photon.jpg';
import Image6 from '../../assets/designs/web/image-transfer.jpg';

export default function WebDesign() {
  const webCards = [
    {image:Image1, title:'BLOGR', paragraph:'Blogr is a platform for creating an online blog or publication'},
    {image:Image2, title:'BUILDER', paragraph:'Connects users with local contractors based on their location'},
    {image:Image3, title:'CAMP', paragraph:'Get expert training in coding, data, design and digital marketing'},
    {image:Image4, title:'EXPRESS', paragraph:'A multi-carrier shipping website for ecommerce businesses'},
    {image:Image5, title:'PHOTON', paragraph:'A state-of-the-art music player with high-resolution audio and DSP effects'},
    {image:Image6, title:'TRANSFER', paragraph:'Site for low-cost money transfers and sending money within seconds'}
  ]
  return (
      <div  className="web-design">
        <Heading title='Web Design' desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'/>
        <Projects cards={webCards}/>
        {/* cards section */}
        <div className=' 
        page-cards
        text-center 
        gap-3
        gap-lg-0
        m-5
        row
        '>
          <div className="
          col-12
          col-lg-6
          ">
          <Link to='/app-design'>
          <div className='
          mt-4
          app-card 
          d-flex 
          align-items-center 
          flex-column 
          justify-content-center 
          px-4
          py-5
          '>
            <div className='wrapper'>
            <h3 className=' mt-md-3'>
              APP DESIGN
            </h3>
            <p className=''>
              VIEW PROJECTS
              <span className="mx-3">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
              </span>
            </p>
          </div>
          </div>
          </Link>
          </div>

          <div className="
          col-12
          col-lg-6
          ">
          <Link to='/graphic-design'>
          <div className='
          mt-4
          graphic-card 
          d-flex 
          align-items-center 
          flex-column 
          justify-content-center 
          px-4
          py-5
          '>
            <div className='wrapper'>
            <h3 className=' mt-md-3'>
              GRAPHIC DESIGN
            </h3>
            <p className=''>
              VIEW PROJECTS
              <span className="mx-3">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
              </span>
            </p>
          </div>
          </div>
          </Link>
          </div>
      </div>
      </div>
  );
}
