import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ data }) => {
  return (
    <main /* className={`${styles.main} ${inter.className}`} */>
      <div>
        {data?.map((ec) => (
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
    </main>
  );
};
