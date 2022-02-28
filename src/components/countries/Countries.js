import { Link } from 'react-router-dom';
import australia from '../../assets/global/illustration-australia.svg';
import canada from '../../assets/global/illustration-canada.svg';
import unitedKingdom from '../../assets/global/illustration-united-kingdom.svg';
import Button from '../reusable/Button/Button';
import './countries.scss'
export default function Countries() {
  return (
    <div className='countries'>
        {/* third section */}
        <div className='
        d-flex
        justify-content-center
        justify-content-lg-evenly
        text-center
        flex-column
        flex-lg-row
        align-items-center
        my-5
        w-100'>
          
          <div className='d-flex flex-column  mb-5 country-card '>
            <img src={australia} alt='we are in australia' className=''/>
            <div className='align-self-center mt-5  mx-4'>
            <h6 className='mb-4 '>
              AUSTRALIA
            </h6>
            <Link to ='/locations'>
               <Button text= "SEE LOCATION" styles = "canada-button"/>
           </Link>
            </div>
          </div>


          <div className='d-flex flex-column  mb-5 country-card '>
            <img src={canada} alt='we are in canada' className=''/>
            <div className='align-self-center mt-5 mx-4'>
            <h6 className='mb-4'>
              CANADA
            </h6>
            <Link to ='/locations'>
            <Button text= "SEE LOCATION" styles = "australia-button"/>
           </Link>
            </div>
          </div>


          <div className='d-flex flex-column  mb-5 country-card'>
            <img src={unitedKingdom} alt='we are in the UK' className=''/>
            <div className='align-self-center mt-5 mx-4'>
            <h6 className='mb-4'>
             UNITED KINGDOM
            </h6>
           <Link to ='/locations'>
           <Button text= "SEE LOCATION" styles = "uk-button"/>
           </Link>
            </div>
          </div>
        </div>

    </div>
  )
}
