import { SingleEvent } from '@/src/components/events/single-event';
import PropTypes from 'prop-types';

const SingleEventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};


export default SingleEventPage;

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.id;
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.find((ev) => ev.id === id);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json');

  const allPaths = allEvents.map((ev) => ({
    params: {
      cat: ev.city,
      id: ev.id,
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

SingleEventPage.propTypes = { data: PropTypes.object.isRequired };
