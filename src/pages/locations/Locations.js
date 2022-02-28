import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import './locations.scss';
// import images
import australiaDesktop from '../../assets/locations/desktop/image-map-australia.png';
import canadaDesktop from '../../assets/locations/desktop/image-map-canada.png';
import ukDesktop from '../../assets/locations/desktop/image-map-united-kingdom.png';

import australiaTablet from '../../assets/locations/tablet/image-map-australia.png';
import canadaTablet from '../../assets/locations/tablet/image-map-canada.png';
import ukTablet from '../../assets/locations/tablet/image-map-uk.png';
import Card from "../../components/card/Card";


export default function Locations() {
    const useMatchMedia = (mediaQuery, initialValue) => {
        const [isMatching, setIsMatching] = useState(initialValue)
        useEffect(() => {
          const watcher = window.matchMedia(mediaQuery)
          setIsMatching(watcher.matches)
          const listener = (matches) => {
            setIsMatching(matches.matches)
          }
          if (watcher.addEventListener) {
            watcher.addEventListener('change', listener)
          } else {
            watcher.addListener(listener)
          }
          return () => {
            if (watcher.removeEventListener) {
              return watcher.removeEventListener('change', listener)
            } else {
              return watcher.removeListener(listener)
            }
          }
        }, [mediaQuery])
      
        return isMatching
      }

  const isMobileResolution = useMatchMedia('(max-width:767.98px)', true);
  const isTabletResolution = useMatchMedia('(min-width:768px) and (max-width:991.98px)', true);
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true);

  return (
    <div className="
    location
    mx-sm-5
    ">
     {/* First Card */}
     <div className="
    card
    mb-5
    border-0
    bg-light
    rounded-border
    ">
<div className="row g-0 gx-lg-4 border-0 ">
{/* card image */}
<div className="col-lg-4 order-lg-last">
    
     {isMobileResolution && (
      <a href='https://goo.gl/maps/EkAZfnMsHDwUtjer6'>
<img src={canadaDesktop} className="w-100 h-100 " id='map' alt="our office location in canada."/>
</a>
    )}
    {isTabletResolution && (
      <a href='https://goo.gl/maps/EkAZfnMsHDwUtjer6'>
              <img src={canadaTablet} className="w-100 h-100 rounded-img-border" alt="our office location in canada."/>
      </a>
      )}
    {isDesktopResolution && (
      <a href = 'https://goo.gl/maps/EkAZfnMsHDwUtjer6'>
              <img src={canadaDesktop} className="w-100 h-100 rounded-img-border" alt="our office location in canada."/>
      </a>
      )}
  </div>

  {/* card body */}
  <div className="col-lg-8 
  order-lg-first 
  bg-secondary 
  d-flex 
  flex-column 
  justify-content-left
  align-items-center 
  p-5
  py-lg-0 
  text-center 
  text-md-left
  first-location-card
  ">
    <div className="card-body  d-flex flex-column justify-content-center mx-5 w-100">
      <h1 className="card-title mb-4 text-primary">Canada</h1>
      <div className="d-flex flex-column flex-md-row justify-content-md-between w-75 m-auto m-md-0">
      <p>
          <strong>
              Designo Central Office
          </strong>
          <br></br>
          3886 Wellington Street
          <br></br>
          Toronto, Ontario M9C 3J5
      </p>
      <p>
          <strong>
              Contact
          </strong>
          <br></br>
          P : +1 253-863-8967
          <br></br>
         M : contact@designo.co
      </p>
      </div>
    </div>
  </div>
</div>
</div>

{/* Second Card */}
<div className="card mb-3 border-0 bg-light rounded-border">
<div className="row g-0 gx-lg-4">
  <div className="col-lg-4">
  {isMobileResolution && (
    <a href="https://goo.gl/maps/QNw79AcT4iCn4oSC8">
      <img src={australiaDesktop} className="w-100 h-100 " alt="our office location in australia"/>
    </a>
    )}
    {isTabletResolution && (
       <a href="https://goo.gl/maps/QNw79AcT4iCn4oSC8">
      <img src={australiaTablet} className="w-100 h-100 rounded-img-border" alt="our office location in australia"/>
      </a>
    )}
    {isDesktopResolution && (
       <a href="https://goo.gl/maps/QNw79AcT4iCn4oSC8">
      <img src={australiaDesktop} className="w-100 h-100 rounded-img-border" alt="our office location in australia"/>
      </a>
    )}
  </div>
  <div className="
  col-lg-8 
  order-lg-last 
  bg-secondary 
  d-flex 
  flex-column 
  justify-content-left
  align-items-center 
  p-5
  py-lg-0 
  text-center 
  text-md-left
  second-location-card">
    <div className="card-body  d-flex flex-column justify-content-center mx-5 w-100">
    <h1 className="card-title mb-4 text-primary">Australia</h1>
    <div className="d-flex flex-column flex-md-row justify-content-md-between w-75 m-auto m-md-0">
      <p>
          <strong>
              Designo AU Office
          </strong>
          <br></br>
          19 Balonne Street
          <br></br>
          New South Wales 2443
      </p>
      <p>
          <strong>
              Contact
          </strong>
          <br></br>
          P : (02) 6720 9092
          <br></br>
          M : contact@designo.au
      </p>
    </div>
    </div>
  </div>
</div>
</div>


{/* Third Card */}
<div className="card mb-3 border-0 bg-light rounded-border">
<div className="row g-0 gx-lg-4">
  {/* card image */}
<div className="
col-lg-4
order-lg-last
 ">
    
     {isMobileResolution && (
      <a href='https://goo.gl/maps/9iG186WkUpZW5pbq5'>
      <img src={ukDesktop} className="w-100 h-100 " alt="our office in the United Kingdom."/>
      </a>
    )} 
    {isTabletResolution && (
      <a href='https://goo.gl/maps/9iG186WkUpZW5pbq5'>
      <img src={ukTablet} className="w-100 h-100 rounded-img-border" alt="our office in the United Kingdom."/>
      </a>
    )}
    {isDesktopResolution && (
      <a href='https://goo.gl/maps/9iG186WkUpZW5pbq5'>
      <img src={ukDesktop} className="w-100 h-100 rounded-img-border" alt="our office in the United Kingdom."/>
      </a>
    )}  </div>
  {/* card body */}
  <div className="
  col-lg-8 
  order-lg-first
  bg-secondary 
  d-flex flex-column 
  justify-content-left 
  align-items-center 
  p-5
  py-lg-0
  text-center
  text-md-left
  third-location-card
  ">
<div className="card-body  d-flex flex-column justify-content-center mx-5 w-100">
    <h1 className="card-title mb-4 text-primary">United Kingdom</h1>
    <div className="d-flex flex-column flex-md-row justify-content-md-between w-75 m-auto m-md-0">
      <p>
          <strong>
              Designo UK Office
          </strong>
          <br></br>
          13 Colorado Way 
          <br></br>
          Rhyd-y-fro SA8 9GA
      </p>
      <p>
          <strong>
              Contact
          </strong>
          <br></br>
          P : 078 3115 1400 
          <br></br>
          M : contact@designo.uk
      </p>
      </div>
    </div>
  </div>
</div>
</div>
<Card/>
</div>
);
}
