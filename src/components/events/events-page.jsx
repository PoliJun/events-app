import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types';    

export const EventsPage = ({data}) => {
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((ec) => (
        <Link href={`/events/${ec.id}`} key={ec.id}>
          <Image
            src={ec.image}
            width={300}
            height={300}
            alt={ec.id}
            priority={true}
          />
          <h2>{ec.title}</h2> <p>{ec.description}</p>
        </Link>
      ))}
    </div>
  );
}



EventsPage.propTypes = {
    data: PropTypes.array.isRequired,
}