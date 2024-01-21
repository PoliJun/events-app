import Link from 'next/link';
import Image from 'next/image';

const EventsPage = ({ data }) => {
  return (
    <div>
        {console.log('Fetching data from getServerSideProps')}
        {console.log('Fetching data from getServerSideProps')}
        {console.log('Fetching data from getServerSideProps')}
        {console.log('Fetching data from getServerSideProps')}
        {console.log('Fetching data from getServerSideProps')}
        {console.log('Fetching data from getServerSideProps')}
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
};
export default EventsPage;

export async function getServerSideProps() {
  // const data = await import("../data.json");
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
