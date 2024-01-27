import PropTypes from 'prop-types';
import { EventsPage } from '@/src/components/events/events-page';

const Page = ({ data }) => {
  return <EventsPage data={data} />;
};
export default Page;

export async function getServerSideProps() {
  try {
    const { events_categories } = await import('/data/data.json');
    return {
      props: {
        title: 'Hello everyone!',
        data: events_categories,
      },
    };
  } catch (e) {
    console.error('error occured', e);
    return {
      props: {
        title: 'Hello everyone!',
      },
    };
  }
}

Page.propTypes = { data: PropTypes.array.isRequired };
