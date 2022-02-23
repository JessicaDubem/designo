import './projects.scss'
export default function Projects(props) {
  return (
    <div className='link-card gap-3 mx-5 mt-5'>
       {
props.cards.map(eachCard => (
 <div className="each-card mb-3 w-100" key={eachCard.title} 
 >
  <div className="text-center card-div ">
    <div className="card">
    <img src={eachCard.image}className="card-img-top card-image" alt="our portfolio project"/>
      <div className="card-body">
        <h5 className="card-title text-primary">{eachCard.title}</h5>
        <p className="card-text">{eachCard.paragraph}</p>
      </div>
    </div>
  </div>
</div>
 ))
 }
</div>
  )
}
