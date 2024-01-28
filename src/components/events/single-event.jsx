import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export const SingleEvent = ({ data }) => (
  <div>
    <Image
      src={data.image}
      width={1000}
      height={300}
      alt={data.title}
      priority={true}
    />
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <input type="email" /> <button>Submit</button>
  </div>
);

SingleEvent.propTypes = { data: PropTypes.object.isRequired };
