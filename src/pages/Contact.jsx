import React from "react";
import { useState } from "react";
function Contact() {
  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const a = await fetch("https://admin.azgpen.com/blog/ContactView/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        full_name: contactForm.username,
        email: contactForm.email,
        phone_number: contactForm.phoneNumber,
        title: contactForm.subject,
        message: contactForm.message,
      }),
    })
      .then((a) => a.json())
      .then((data) => data);
     setContactForm({

    username: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  })
  };
  
  return (
    <section className="photo">
      <div className="k">
        <p>Əlaqə</p>
      </div>
      <div className="container">
        <div className="contact">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3622078848916!2d49.87192827514779!3d40.37866425795654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5b16f03049%3A0x8b233276e2e00004!2sAzure%20Business%20Center!5e0!3m2!1sen!2saz!4v1686773020037!5m2!1sen!2saz"
              width="500"
              height="550"
           
         />
          </div>
          <div className="contact-text">
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-phone orange" />
                <p className="pcontent">Əlaqə:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">+994513126599</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-at orange" />
                <p className="pcontent ">E-mail:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">azgpenginee@gmail.com</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-location-dot orange" />
                <p className="pcontent">Ünvan:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">Azure business center</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-calendar orange" />
                <p className="pcontent">İş günləri:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">Həftəiçi hər gün</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-clock orange" />
                <p className="pcontent">İş saatları:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">09:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <p>Operativ cavablandırma</p>
          <h1>Bizimlə əlaqə üçün</h1>
          <form onSubmit={onSubmit}>
            <div className="line-inputs">
              <input
                type="text"
                placeholder="Ad Soyad"
                onChange={handleInput}
                name="username"
                autoComplete="off"
                value={contactForm.username}
              />
              <input
                type="email"
                onChange={handleInput}
                name="email"
                autoComplete="off"
                value={contactForm.email}
                placeholder="Email"
              />
              <input
                type="number"
                placeholder="Nömrə"
                onChange={handleInput}
                name="phoneNumber"
                autoComplete="off"
                value={contactForm.phoneNumber}
              />
            </div>
            <div className="textareas">
              <textarea
                placeholder="Mövzu"
                onChange={handleInput}
                name="subject"
                autoComplete="off"
                value={contactForm.subject}
              ></textarea>
              <textarea
                placeholder="Mesaj"
                onChange={handleInput}
                name="message"
                autoComplete="off"
                value={contactForm.message}
              ></textarea>
            </div>
            <div className="submitDiv">
              <button type="submit" className="submitBtn">
                Mesajı göndər
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
