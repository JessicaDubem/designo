import './contact.scss';
import Button from '../../components/reusable/Button/Button';
import Countries from '../../components/countries/Countries';
import { useState } from 'react';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
      <div className='contact mx-sm-5'>
        <div className='d-flex
         flex-column 
         flex-lg-row 
         justify-content-center 
         p-5 
         bg-primary 
         contact-div
         justify-content-lg-between
         '>
          <div className='text-center text-md-left text-white col-lg-5 align-self-lg-center'>
            <h1>
           Contact Us
            </h1>
            <p>
            Ready to take it to the next level? Let’s talk about your project or idea and find out
             how we can help your business grow. If you are looking for unique digital
              experiences that’s relatable to your users, drop us a line.
            </p>
          </div>
          <div className='form-div text-white col-lg-5'>
            <form className='needs-validation'>
              <div className='w-100'>
              <input type='text' placeholder='Name' className='px-3 w-100 bg-primary border-0' required onChange={e => setName(e.target.value)}/>
              </div>
              <hr/>
              <div className='w-100'>
              <input type='email' placeholder='Email' className='px-3 w-100 bg-primary border-0' required onChange={e => setEmail(e.target.value)}/>
              </div>
              <hr/>
             <div className='w-100'>
             <input type='tel' placeholder='Phone' className='px-3 w-100 bg-primary border-0'/>
             </div>
             <hr/>
            <div className='w-100'>
            <input type='textarea' placeholder='Your Message' className='px-3 w-100 bg-primary border-0 pb-5' required onChange={e => setMessage(e.target.value)}/>
            </div>
            <hr/>
            <div className='w-100'>
            <Button text= "SUBMIT" styles = "contact-button" className='btn btn-md bg-white px-3'/>
            </div>
            </form>
          </div>
        </div>
      <Countries/>
      </div>
  );
}
