import { Link } from "react-router-dom";
import Heading from "../../components/reusable/heading/Heading";
import Projects from "../../components/reusable/projectCards/Projects";

import Image1 from '../../assets/designs/app/image-airfilter.jpg';
import Image2 from '../../assets/designs/app/image-eyecam.jpg';
import Image3 from '../../assets/designs/app/image-faceit.jpg';
import Image4 from '../../assets/designs/app/image-loopstudios.jpg';
import Image5 from '../../assets/designs/app/image-todo.jpg';
import Card from "../../components/card/Card";

export default function AppDesign() {
  const appCards = [
    {image:Image1, title:'AIRFILTER', paragraph:'Solving the problem of poor indoor air quality by filtering the air'},
    {image:Image2, title:'EYECAM', paragraph:'Product that lets you edit your favorite photos and videos at any time'},
    {image:Image3, title:'FACEIT', paragraph:'Get to meet your favorite internet superstart with the faceit app'},
    {image:Image5, title:'TODO', paragraph:'A todo app that features cloud sync with light and dark mode'},
    {image:Image4, title:'LOOPSTUDIOS', paragraph:'A VR experience app made for loopstudios'},
  ]
  return (
      <div className="app-design">
        <Heading title='App Design' desc='Our mobile designs bring intuitive digital solutions to our customers right at their fingertips.'/>
        <Projects cards={appCards}/>

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
      <Card/>
      </div>
  );
}
