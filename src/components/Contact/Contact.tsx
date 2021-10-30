const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__container">
                <form className="contact__form">
                    <input type="text" placeholder="Jane Doe" className="contact__name" />
                    <input type="email" placeholder="janedoe@gmail.com" className="contact__email" />
                    <input type="text" placeholder="Message" className="contact__message" />
                    <input type="submit" value="Send" className="contact__button" />
                </form>

                <div className="contact__socials">
                    <div className="contact__ig"></div>
                    <div className="contact__fb"></div>
                    <div className="contact__tw"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
