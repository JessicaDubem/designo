import './card.scss';
import Button from '../reusable/Button/Button';
import { Link } from 'react-router-dom';
export default function Card() {
  return (
  <div className='
  contact-card
  d-flex 
  flex-column 
  flex-md-row
  justify-content-evenly
  bg-primary
  text-white
  px-2
  px-md-5
  py-5
  text-center
  text-md-left
  mx-5

  
  '>
      <div className='container'>
          <h1>
              Let's talk about 
              <br/>
              your project
          </h1>
          <p className='mt-2'>
            Ready to take it to the next level?
            Contact us today and 
            <br/>
            find out how
            our expertise can help your business
            grow
          </p>
      </div>
     <Link to ="/contact">
     <Button text="GET IN TOUCH" styles ="card-button"/>
     </Link>
  </div>
    );
}
