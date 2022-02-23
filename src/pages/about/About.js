import { useState, useEffect } from "react"

import mobileHero from '../../assets/about/mobile/image-about-hero.jpg';
import tabletHero from '../../assets/about/tablet/image-about-hero.jpg';
import desktopHero from '../../assets/about/desktop/image-about-hero.jpg';

import mobileTalent from '../../assets/about/mobile/image-world-class-talent.jpg';
import tabletTalent from '../../assets/about/tablet/image-world-class-talent.jpg';
import desktopTalent from '../../assets/about/desktop/image-world-class-talent.jpg';

import mobileDeal from '../../assets/about/mobile/image-real-deal.jpg';
import tabletDeal from '../../assets/about/tablet/image-real-deal.jpg';
import desktopDeal from '../../assets/about/desktop/image-real-deal.jpg';
import Countries from "../../components/reusable/countries/Countries";

export default function About() {
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
      about
      d-flex
      justify-content-center
      flex-column
      px-5
      ">
       {/* First Card */}
       <div className="card mb-5 round-borders" w-100>
  <div className="row g-0 round-borders">
 {/* card image */}
 <div className="col-lg-4 order-lg-last">
      {
        isMobileResolution && (
          <img src={mobileHero} className="w-100 h-100 rounded-start" alt="people having a work meeting at a table"/>
        )
      }
      {isTabletResolution && (
        <img src={tabletHero} className="w-100 h-100 rounded-start" alt="people having a work meeting at a table"/>
      )}
      {isDesktopResolution && (
        <img src={desktopHero} className="w-100 h-100 rounded-start" alt="people having a work meeting at a table"/>
      )}
    </div>

    {/* card body */}
    <div className="col-lg-8 
    order-lg-first 
    bg-primary 
    d-flex 
    flex-column 
    justify-content-center 
    align-items-center 
    py-5 
    py-lg-0 
    text-center 
    text-lg-left
    first-about-card
    ">
      <div className="card-body text-white d-flex flex-column justify-content-center mx-5 ">
        <h1 className="card-title mb-4"> About Us</h1>
        <p className="card-text">
        Founded in 2010, we are a creative agency that produces lasting results for our clients.
         We’ve partnered with many startups, corporations,
          and nonprofits alike to craft designs that make real impact.
           We’re always looking forward to creating brands, 
        products, and digital experiences that connect with our clients' audiences.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Second Card */}
<div className="card mb-3" w-100>
  <div className="row g-0">
    <div className="col-lg-4">
    {
        isMobileResolution && (
          <img src={mobileTalent} className="w-100 h-100 rounded-start" alt="girl staring at pictures on the wall"/>
        )
      }
      {isTabletResolution && (
        <img src={tabletTalent} className="w-100 h-100 rounded-start" alt="girl staring at pictures on the wall"/>
      )}
      {isDesktopResolution && (
        <img src={desktopTalent} className="w-100 h-100 rounded-start" alt="girl staring at pictures on the wall"/>
      )}
    </div>
    <div className="col-lg-8 bg-secondary d-flex flex-column justify-content-center align-items-center">
      <div className="card-body d-flex flex-column justify-content-center align-items-center mx-5 py-5 py-lg-0 text-center text-lg-left">
        <h1 className="card-title text-primary mb-4 w-100">World-class talent</h1>
        <p className="card-text">
        We are a crew of strategists, problem-solvers, and technologists.
         Every design is thoughtfully crafted from concept to launch, 
         ensuring success in its given market. 
        We are constantly updating our skills in a myriad of platforms. 
        </p>
        <p className="card-text">
        Our team is multi-disciplinary and we are not merely interested in form — 
        content and meaning are just as important.
         We give great importance to craftsmanship, service, and prompt delivery.
         Clients have always been impressed with our high-quality outcomes that encapsulates 
         their brand’s story and mission. 
        </p>
      </div>
    </div>
  </div>
</div>

<Countries/>

{/* Third Card */}
  <div className="card mb-3" w-100>
<div className="row g-0">
    {/* card image */}
  <div className="col-lg-4 order-lg-last">
  {
        isMobileResolution && (
          <img src={mobileDeal} className="w-100 h-100 rounded-start" alt="girl hanging pictures on the wall"/>
        )
      }
      {isTabletResolution && (
        <img src={tabletDeal} className="w-100 h-100 rounded-start" alt="girl hanging pictures on the wall"/>
      )}
      {isDesktopResolution && (
        <img src={desktopDeal} className="w-100 h-100 rounded-start" alt="girl hanging pictures on the wall"/>
      )}  </div>
    {/* card body */}
    <div className="col-lg-8 order-lg-first bg-secondary d-flex flex-column justify-content-center align-items-center">
      <div className="card-body d-flex flex-column justify-content-center align-items-center mx-5 py-5 py-lg-0 text-center text-lg-left">
        <h1 className="card-title text-primary mb-4 w-100">The real deal</h1>
        <p className="card-text">
        As strategic partners in our clients’ businesses, 
        we are ready to take on any challenge as our own.
         Solving real problems require empathy and collaboration,
          and we strive to bring a fresh perspective to every opportunity.
         We make design and technology more accessible and give you tools to measure success.
        </p>
        <p className = "card-text">
        We are visual storytellers in appealing and captivating ways.
         By combining business and marketing strategies,
         we inspire audiences to take action and drive real results. 
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
  );
}
