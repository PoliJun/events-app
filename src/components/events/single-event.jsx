import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export const SingleEvent = ({ data }) =>{
  const onSubmit = (e) => {
    alert(e.value);
  }

  return (
  <div className='event_single_page'>
    <Image
      src={data.image}
      width={1000}
      height={300}
      alt={data.title}
      priority={true}
    />
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <form onSubmit={onSubmit} className='email_registration'>
      <label htmlFor="email">Get Register</label>
      <input type="email"  id="email" placeholder='Please insert your email here'/>
      <button type='submit'>Submit</button>
    </form>
  </div>
);} 

SingleEvent.propTypes = { data: PropTypes.object.isRequired };
