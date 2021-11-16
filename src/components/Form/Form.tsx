import "./Form.scss";

const Form = () => {
  return (
    <div className="form">
      <form action="" className="form__form">
        <div className="form__names">
          <input
            type="text"
            className="form__firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="form__lastName"
            placeholder="Last Name"
          />
        </div>

        <input type="email" className="form__email" placeholder="Email" />
        <input type="number" className="form__number" placeholder="Number" />
        <input type="text" className="form__address" placeholder="Address" />
        <input type="text" className="form__skills" placeholder="list ya skills" />
        <input
          type="text"
          className="form__about"
          placeholder="Tell us something about you"
        />
        <input className="form__button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
