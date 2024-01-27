import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((ec) => (
        <Link className="card" href={`/events/${ec.id}`} key={ec.id}>
          <div className="image">
            <Image
              src={ec.image}
              width={600}
              height={400}
              alt={ec.id}
              priority={true}
            />
          </div>
          <div className="content">
            <h2>{ec.title}</h2>
            <p className="content">{ec.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

HomePage.propTypes = {
  data: PropTypes.array.isRequired,
};
