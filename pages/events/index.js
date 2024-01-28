import PropTypes from 'prop-types';
import { AllEvents } from '@/src/components/events/events-page';

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};
export default EventsPage;

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

EventsPage.propTypes = { data: PropTypes.array.isRequired };
