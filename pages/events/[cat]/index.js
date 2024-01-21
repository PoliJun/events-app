import Head from 'next/head';
import Link from 'next/link';
const EventsPerCityPage = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Events in London</h1>
      <Link href="/events/event1">Event1</Link>
      <Link href="/events/event2">Event2</Link>
      <Link href="/events/event3">Event3</Link>
      <Link href="/events/event4">Event4</Link>
    </div>
  );
};
export default EventsPerCityPage;

// export function getServerSideProps() {
//   return {
//     props: {
//       title: "Hello everyone!",
//     },
//   };
// }

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter((ev) => ev.id === city);
  console.log(data);
  return {
    props: {},
  };
}
export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');

  const allPaths = events_categories.map((ev) => ({
    params: { cat: ev.id.toString() },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}
