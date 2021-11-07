import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h3>Contact us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minus unde commodi esse blanditiis deserunt non eligendi facere
            labore nulla nesciunt dicta sit, saepe incidunt mollitia quas,
            libero eius voluptatem. Velit deserunt sapiente sint, soluta non
            consectetur! Eligendi corrupti quidem voluptas adipisci, velit,
            repellendus itaque nam, tempora quae architecto incidunt.
          </p>
        </div>

        <form className="contact__form">
          <input type="text" placeholder="Jane Doe" className="contact__name" />
          <input
            type="email"
            placeholder="janedoe@gmail.com"
            className="contact__email"
          />
          <input
            type="text"
            placeholder="Message"
            className="contact__message"
          />
          <input type="submit" value="Send" className="contact__button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
