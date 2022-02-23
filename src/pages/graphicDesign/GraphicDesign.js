import { Link } from "react-router-dom";
import Heading from "../../components/reusable/heading/Heading";
import Projects from "../../components/reusable/projectCards/Projects";

import Image1 from '../../assets/designs/graphic/image-boxed-water.jpg';
import Image2 from '../../assets/designs/graphic/image-change.jpg';
import Image3 from '../../assets/designs/graphic/image-science.jpg';
import './graphicDesign.scss';

export default function GraphicDesign() {
  const graphicCards = [
    {image:Image1, title:'BOXED WATER', paragraph:'A simple packaging concept made for Boxed Water'},
    {image:Image2, title:"TIM BROWN", paragraph:"A book released designed for Tim Brown's new book, 'change'"},
    {image:Image3, title:'SCIENCE', paragraph:'A poster made in collaboration with the Federal Art Project'}
  ]

  return (
      <div  className="graphic-design">
        <Heading title='Graphic Design' desc='We deliver eye-catching branding materials that are tailored to meet your business objectives.'/>
        <Projects cards={graphicCards}/>
        {/* card section */}
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
          <Link to='/web-design'>
          <div className='
          mt-4
          web-card 
          d-flex 
          align-items-center 
          flex-column 
          justify-content-center 
          px-4
          py-5
          
          '>
            <div className='wrapper'>
            <h3 className=' mt-md-3'>
              WEB DESIGN
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
      </div>
      </div>
  );
}
