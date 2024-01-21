import Link from "next/link";

const EventsPage = () => (
  <div>
    <h1>Events Page</h1>
    <div>
      <Link href="/events/London">
        <img />
        <h1>Events in London</h1>
      </Link>
      <Link href="/events/Manchester">
        <img />
        <h1>Events in Manchester</h1>
      </Link>
      <Link href="/events/Liverpool">
        <img />
        <h1>Events in Liverpool</h1>
      </Link>
    </div>
  </div>
);
export default EventsPage;

