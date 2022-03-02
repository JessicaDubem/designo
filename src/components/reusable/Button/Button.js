import './button.scss';
export default function Button(props) {
  return (
     <button className='
     button
      btn
      btn-lg 
      text-nowrap
      w-md-25
      mx-auto
      fs-6
      align-self-md-center
      py-md-3
      '
      id={props.styles}>
       {props.text}
      </button>
  )
}
