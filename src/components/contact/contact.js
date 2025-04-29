import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="pri-contact">Contact</p>
      <p className="sec-contact">Get In Touch</p>
      <div className="contact-cont">
        <div className="contact-form">
          <form>
            <p>Contact Form</p>
            <div className="inputs">
              <div className="each-form-input">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                ></input>
              </div>

              <div className="each-form-input">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                ></input>
              </div>

              <div className="each-form-input">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="subject"
                  name="subject"
                ></input>
              </div>
              <div className="each-form-input">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <input
                  className="form-input message"
                  type="text"
                  id="message"
                  name="message"
                ></input>
              </div>
            </div>
          </form>

          <button className="btn-form">Send Message</button>
        </div>

        <div className="contact-detail">
          <p className="contact-title">Contact details</p>
          <p className="contact-info">
            <span>
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <p>4 Kilo Square, Addis Ababa, Ethiopia</p>
          </p>
          <p className="contact-info">
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <p>ha0959943@gmail.com</p>
          </p>
          <p className="contact-info">
            <span>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <p> +251907841226</p>
          </p>
        </div>
      </div>
    </section>
  );
}
