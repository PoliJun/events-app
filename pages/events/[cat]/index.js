import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const EventsPerCityPage = ({ data }) => {
  return (
    <div>
      <h1>Events in </h1>
      {data.map((ev) => (
        <Link href={`/events/${ev.city}/id`} key={ev.id}>
          <Image width={300} height={300} alt={ev.image} priority={false}/>
          <h2>{ev.title}</h2> <p>{ev.description}</p>
        </Link>
      ))}
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
  console.log(`myid:${id}`);
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return {
    props: { data },
  };
}
export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');

  const allPaths = events_categories.map((ev) => ({
    params: { cat: ev.id.toString() },
  }));
    console.log(`allPaths:${allPaths}`);

  return {
    paths: allPaths,
    fallback: false,
  };
}
