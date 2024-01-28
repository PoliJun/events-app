import { useRef, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export const SingleEvent = ({ data }) => {
  const inputEmail = useRef(null);
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log('router: ', router);
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    // email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setMessage('Please insert a valid email');
      return;
    } else {
      setMessage('');
    }
    // console.log('submitted')
    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log('POST', data);

      // Post fetch request
      // body emailValue, eventId
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <div className="event_single_page">
      <Image
        src={data.image}
        width={1000}
        height={300}
        alt={data.title}
        priority={true}
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label htmlFor="email">Get Register</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

SingleEvent.propTypes = { data: PropTypes.object.isRequired };
