import EventCard from "../components/EventCard/EventCard";
import Footer from "../components/Footer/Footer";
import Nav from './../components/Nav/Nav';
import Head from 'next/head';

export default function events() {
  return (
    <div className="events">
      <Head>
        <title>Young Talents | Events</title>
        <meta name="description" content="Nurturing and developing skills" />
        <meta name="author" content="Mohammed Kabir Hussaini" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="Young talents, skill acquisition, training, talent showcase"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="events__content">
        <h1 className="events__title">Events</h1>

        <p className="events__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          excepturi fugit vitae doloribus possimus, recusandae sed,
          voluptatibus, molestiae consequatur autem quidem nostrum laboriosam
          hic inventore!
        </p>
      </div>

      <EventCard
        img=""
        alt="Dummy class"
        title="Dummy class"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi fugit vitae doloribus possimus, recusandae sed, voluptatibus, molestiae consequatur autem quidem nostrum laboriosam hic inventore!"
        date="2021-10-25"
        eventIsActive={false}
      />

      <EventCard
        img=""
        alt="Dummy class"
        title="Dummy class"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi fugit vitae doloribus possimus, recusandae sed, voluptatibus, molestiae consequatur autem quidem nostrum laboriosam hic inventore!"
        date="2021-10-21"
        eventIsActive={false}
      />

      <EventCard
        img=""
        alt="Skill acquisition class"
        title="Skill acquisition class"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi fugit vitae doloribus possimus, recusandae sed, voluptatibus, molestiae consequatur autem quidem nostrum laboriosam hic inventore!"
        date="2021-10-27"
        eventIsActive={true}
      />

      <Footer />
    </div>
  );
}
