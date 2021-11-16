import EventCard from "../../components/EventCard/EventCard";
import "./Events.scss";

export default function events() {
  return (
    <div className="events">
      <div className="events__content">
        <h1 className="events__title">Events</h1>

        <p className="events__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          excepturi fugit vitae doloribus possimus, recusandae sed,
          voluptatibus, molestiae consequatur autem quidem nostrum laboriosam
          hic inventore!
        </p>
      </div>

      <div className="events__cards">
        <EventCard
          img="/images/talent_acquisition.jpg"
          alt="Dummy class"
          title="Dummy class"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi fugit vitae doloribus possimus, recusandae sed, voluptatibus, molestiae consequatur autem quidem nostrum laboriosam hic inventore!"
          date="2021-10-25"
          eventIsActive={true}
        />

        <EventCard
          img="/images/talent_acquisition.jpg"
          alt="Dummy class"
          title="Dummy class"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi fugit vitae doloribus possimus, recusandae sed, voluptatibus, molestiae consequatur autem quidem nostrum laboriosam hic inventore!"
          date="2021-10-21"
          eventIsActive={false}
        />

        <EventCard
          img="/images/talent_acquisition.jpg"
          alt="Skill acquisition class"
          title="Skill acquisition class"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis excepturi fugit vitae doloribus possimus, recusandae sed, voluptatibus, molestiae consequatur autem quidem nostrum laboriosam hic inventore!"
          date="2021-10-27"
          eventIsActive={true}
        />
      </div>

    </div>
  );
}
