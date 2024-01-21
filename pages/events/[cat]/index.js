import Head from "next/head";
import Link from "next/link";
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

export function getServerSideProps() {
  return {
    props: {
      title: "Hello everyone!",
    },
  };
}

