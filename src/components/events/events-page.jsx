import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ec) => (
        <Link href={`/events/${ec.id}`} key={ec.id}>
          <div className="card">
            <Image
              src={ec.image}
              width={400}
              height={400}
              alt={ec.id}
              priority={true}
            />
            <h2>{ec.title}</h2>
            <p>{ec.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

AllEvents.propTypes = {
  data: PropTypes.array.isRequired,
};
