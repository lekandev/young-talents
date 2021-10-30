import Form from "../components/Form/Form";
import Nav from "./../components/Nav/Nav";
import Footer from './../components/Footer/Footer';
import Head from 'next/head';

export default function Join() {
  return (
    <div className="join">
      <Head>
        <title>Young Talents | Join</title>
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
      <div className="join__content">
        <h2 className="join__title">Join Young Talents</h2>

        <p className="join__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          voluptatibus ex nemo eligendi illum quia qui! Officiis atque
          inventore, unde, dolorem delectus officia doloribus iure dolor
          ducimus, tempora architecto voluptatem.
        </p>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
