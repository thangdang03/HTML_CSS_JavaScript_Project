import ContactImg from "../public/contact.jpg"

const Contact = () => {
    return (  
        <section id="Contact" className="centerDiv">
            <div className="Contact__nested">
                <div className="Concat_text">
                    <div className="Contact__nested__header value__text__header">
                             <h4>Our Contact Us</h4>
                            <h3> 
                                Easy to contact us
                            </h3>
                            <p>
                                We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                            </p>
                    </div>
                    <div className="Contact__nested__list">
                            <div className="Contact__nested__item">
                                <div className="info__contact">
                                    <i class="fa-solid fa-phone"></i>
                                    <div className="info__text">
                                        <h3>Call</h3>
                                        <p>021 123 145 14</p>
                                    </div>
                                </div>
                                <button>Call now</button>
                            </div>

                            <div className="Contact__nested__item">
                                <div className="info__contact">
                                    <i class="fa-brands fa-rocketchat"></i>
                                    <div className="info__text">
                                        <h3>Chat</h3>
                                        <p>021 123 145 14</p>
                                    </div>
                                </div>
                                <button>Chat now</button>
                            </div>

                            <div className="Contact__nested__item">
                                <div className="info__contact">
                                    <i class="fa-solid fa-video"></i>
                                    <div className="info__text">
                                        <h3>Video Call</h3>
                                        <p>021 123 145 14</p>
                                    </div>
                                </div>
                                <button>Video Call now</button>
                            </div>

                            <div className="Contact__nested__item">
                                <div className="info__contact">
                                    <i class="fa-solid fa-comments"></i>
                                    <div className="info__text">
                                        <h3>Message</h3>
                                        <p>021 123 145 14</p>
                                    </div>
                                </div>
                                <button>Message now</button>
                            </div>
                    </div>
                </div>
                <div className="Concat_img">
                    <img src={ContactImg} alt="Contact Img" />
                </div>
            </div>

        </section>
    );
}
 
export default Contact;