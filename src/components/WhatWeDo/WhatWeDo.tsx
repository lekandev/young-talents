import "./WhatWeDo.scss";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo">
      <h2 className="whatWeDo__title">What we do</h2>

      <div className="whatWeDo__container">
        <div className="whatWeDo__box1">
          <img
            src="/images/talent_showcase.jpg"
            alt=""
            className="whatWeDo__img"
          />

          <div className="whatWeDo__content">
            <h3>Talent Showcase</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quidem est sint minima eaque excepturi enim
              recusandae molestiae quod ad unde adipisci et magni incidunt
              soluta tempore reprehenderit consequuntur dignissimos? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
              quidem est sint minima eaque excepturi enim recusandae molestiae
              quod ad unde adipisci et magni incidunt soluta tempore
              reprehenderit consequuntur dignissimos?
            </p>
          </div>
        </div>

        <div className="whatWeDo__box1">
          <div className="whatWeDo__content">
            <h3>Skill Training</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quidem est sint minima eaque excepturi enim
              recusandae molestiae quod ad unde adipisci et magni incidunt
              soluta tempore reprehenderit consequuntur dignissimos? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
              quidem est sint minima eaque excepturi enim recusandae molestiae
              quod ad unde adipisci et magni incidunt soluta tempore
              reprehenderit consequuntur dignissimos?
            </p>
          </div>

          <img
            src="/images/skill_training.jpg"
            alt=""
            className="whatWeDo__img"
          />
        </div>

        <div className="whatWeDo__box1">
          <img
            src="/images/talent_acquisition.jpg"
            alt=""
            className="whatWeDo__img"
          />

          <div className="whatWeDo__content">
            <h3>Talent Acquisition</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quidem est sint minima eaque excepturi enim
              recusandae molestiae quod ad unde adipisci et magni incidunt
              soluta tempore reprehenderit consequuntur dignissimos? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
              quidem est sint minima eaque excepturi enim recusandae molestiae
              quod ad unde adipisci et magni incidunt soluta tempore
              reprehenderit consequuntur dignissimos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
