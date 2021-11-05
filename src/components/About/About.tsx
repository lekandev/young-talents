import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">About Young Talents</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            neque accusantium quaerat tenetur eaque ipsa id veritatis
            doloremque. Esse doloribus accusamus laborum voluptatibus neque, non
            quaerat qui inventore quod obcaecati! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias neque accusantium quaerat
            tenetur eaque ipsa id veritatis doloremque. Esse doloribus accusamus
            laborum voluptatibus neque, non quaerat qui inventore quod
            obcaecati!
          </p>
        </div>

        <div className="about__img">
          <img src="../../assets/hero_img.jpg" alt="Young Talents" />
        </div>
      </div>
    </div>
  );
};

export default About;
