import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id} passHref>
            <div className="card">
              <Image
                src={ev.image}
                width={300}
                height={200}
                alt={ev.image}
                priority={true}
              />
              <h2>{ev.title}</h2> <p>{ev.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

CatEvent.propTypes = {
  data: PropTypes.array.isRequired,
  pageName: PropTypes.string.isRequired,
};
