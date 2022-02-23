import { useState, useEffect } from "react"
// import images
import australiaDesktop from '../../assets/locations/desktop/image-map-australia.png';
import canadaDesktop from '../../assets/locations/desktop/image-map-canada.png';
import ukDesktop from '../../assets/locations/desktop/image-map-united-kingdom.png';

import australiaTablet from '../../assets/locations/tablet/image-map-australia.png';
import canadaTablet from '../../assets/locations/tablet/image-map-canada.png';
import ukTablet from '../../assets/locations/tablet/image-map-uk.png';


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

//   let map = L.map('map').setView([0, 0], 1);

  return (
    <div className="
    location
    d-flex
    justify-content-center
    flex-column
    px-5
    ">
     {/* First Card */}
     <div className="
    card
    mb-5
    border-0
    bg-light
    ">
<div className="row g-0 gx-lg-4 border-0">
{/* card image */}
<div className="col-lg-4 order-lg-last">
    
     {isMobileResolution && (
      <img src={canadaDesktop} className="w-100 h-100 rounded-start" id='map' alt="our office location in canada."/>
    )}
    {isTabletResolution && (
      <img src={canadaTablet} className="w-100 h-100 rounded-start" alt="our office location in canada."/>
    )}
    {isDesktopResolution && (
      <img src={canadaDesktop} className="w-100 h-100 rounded-start" alt="our office location in canada."/>
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
  first-about-card
  ">
    <div className="card-body  d-flex flex-column justify-content-center mx-5 w-100">
      <h1 className="card-title mb-4 text-primary">Canada</h1>
      <div className="d-flex flex-column flex-md-row justify-content-md-between">
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
<div className="card mb-3 w-100 border-0 bg-light">
<div className="row g-0 gx-lg-4">
  <div className="col-lg-4">
  {isMobileResolution && (
      <img src={australiaDesktop} className="w-100 h-100 rounded-start" alt="our office location in australia"/>
    )}
    {isTabletResolution && (
      <img src={australiaTablet} className="w-100 h-100 rounded-start" alt="our office location in australia"/>
    )}
    {isDesktopResolution && (
      <img src={australiaDesktop} className="w-100 h-100 rounded-start" alt="our office location in australia"/>
    )}
  </div>
  <div className="col-lg-8 bg-secondary d-flex flex-column justify-content-center align-items-center">
    <div className="card-body d-flex flex-column justify-content-center align-items-center mx-5 py-5 py-lg-0 text-center text-lg-left">
    <h1 className="card-title mb-4 text-primary">Australia</h1>
    
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


{/* Third Card */}
<div className="card mb-3 w-100 border-0 bg-light">
<div className="row g-0 gx-lg-4">
  {/* card image */}
<div className="
col-lg-4
order-lg-last
 ">
    
     {isMobileResolution && (
      <img src={ukDesktop} className="w-100 h-100 rounded-start" alt="our office in the United Kingdom."/>
    )} 
    {isTabletResolution && (
      <img src={ukTablet} className="w-100 h-100 rounded-start" alt="our office in the United Kingdom."/>
    )}
    {isDesktopResolution && (
      <img src={ukDesktop} className="w-100 h-100 rounded-start" alt="our office in the United Kingdom."/>
    )}  </div>
  {/* card body */}
  <div className="col-lg-8 order-lg-first bg-secondary d-flex flex-column justify-content-center align-items-center">
    <div className="card-body d-flex flex-column justify-content-center align-items-center mx-5 py-5 py-lg-0 text-center text-lg-left">
    <h1 className="card-title mb-4 text-primary">United Kingdom</h1>
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
);
}
