import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((ev) => (
        <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id} passHref>
          <Image src={ev.image} width={300} height={300} alt={ev.image} priority={true}/>
          <h2>{ev.title}</h2> <p>{ev.description}</p>
        </Link>
      ))}
    </div>
  );
};
export default EventsCatPage;

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
    props: { data, pageName: id },
  };
}
export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');

  const allPaths = events_categories.map((ec) => ({
    params: { cat: ec.id.toString() },
  }));
    console.log(`allPaths:${allPaths}`);

  return {
    paths: allPaths,
    fallback: false,
  };
}
