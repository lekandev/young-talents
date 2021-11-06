// interface Props {
//     title: string,
//     desc: string,
//     img: string,
//     eventIsActive: boolean
// }

type Props = {
    img: string,
    alt: string,
    title: string,
    desc: string,
    date: string | number,
    eventIsActive: boolean
}

const EventCard = (props: Props) => {
    return (
        <div className="eventCard">
            <div className="eventCard__img">
                <img src={props.img} alt={props.alt} />
            </div>

            <div className="eventCard__content">
                <h2 className="eventCard__title">{props.title}</h2>

                <p className="eventCard__desc">{props.desc}</p>

                <small className="eventCard__date">{props.date}</small>

                {props.eventIsActive && <a href="" className="eventCard__button">Register</a>}
            </div>
        </div>
    )
}

export default EventCard
