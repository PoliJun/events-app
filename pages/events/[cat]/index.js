import Head from "next/head";
const EventsPerCityPage = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Events in London</h1>
      <a href="/events/event1">Event1</a>
      <a href="/events/event2">Event2</a>
      <a href="/events/event3">Event3</a>
      <a href="/events/event4">Event4</a>
    </div>
  );
};
export default EventsPerCityPage;

export function getServerSideProps() {
  return {
    props: {
      title: "Hello everyone!",
    },
  };
}

