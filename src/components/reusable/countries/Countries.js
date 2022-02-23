import { Link } from 'react-router-dom';
import australia from '../../../assets/global/illustration-australia.svg';
import canada from '../../../assets/global/illustration-canada.svg';
import unitedKingdom from '../../../assets/global/illustration-united-kingdom.svg';
import Button from '../Button';
import './countries.scss'
export default function Countries() {
  return (
    <div className='countries'>
        {/* third section */}
        <div className='
        third-section
        my-5'>
          
          <div className='d-flex flex-column  mb-5 country-card'>
            <img src={australia} alt='we are in australia' className='passionate'/>
            <div className='align-self-center mt-5  mx-4'>
            <h5 className='mb-4 fw-normal'>
              AUSTRALIA
            </h5>
            <Link to ='/locations'>
               <Button className = 'bg-primary'/>
           </Link>
            </div>
          </div>


          <div className='d-flex flex-column  mb-5 country-card'>
            <img src={canada} alt='we are in canada' className='resourceful '/>
            <div className='align-self-center mt-5 mx-4'>
            <h5 className='mb-4 fw-normal'>
              CANADA
            </h5>
            <Link to ='/locations'>
               <Button/>
           </Link>
            </div>
          </div>


          <div className='d-flex flex-column  mb-5 country-card'>
            <img src={unitedKingdom} alt='we are in the UK' className='friendly'/>
            <div className='align-self-center mt-5 mx-4'>
            <h5 className='mb-4 fw-normal'>
             UNITED KINGDOM
            </h5>
           <Link to ='/locations'>
               <Button/>
           </Link>
            </div>
          </div>
        </div>

    </div>
  )
}
