import './heading.scss';
export default function Heading(props) {
  return (
    <div className='heading text-center text-white bg-primary rounded mx-0 mx-sm-5 p-5 my-sm-4'>
        <h2>
            {props.title}
        </h2>
       <p>
           {props.desc}
       </p>
    </div>
  )
}
