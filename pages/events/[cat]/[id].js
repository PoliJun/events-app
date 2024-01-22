import Image from 'next/image';

const SingleEventPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Image
        src={data.image}
        width={1000}
        height={300}
        alt={data.title}
        priority={true}
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.image}</p>
    </div>
  );
};

export default SingleEventPage;

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.id;
  const { allEvents } = await import('/data/data.json');
  const eventsData = allEvents.find((ev) => ev.id === id);
  console.log(eventsData);
  return {
    props: { data: eventsData },
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
