import '../styles/Contact.css'
import { useState } from 'react';
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Formik } from 'formik';
import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  function handleChange(e) {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }


  async function handleSubmit(e) {
  e.preventDefault();

  setIsSending(true);

  try {
    const response = await fetch("https://my-portfolio-r1im.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!.I'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
  }
  finally{
    setIsSending(false);
  }
}
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-intro">
        <h1 className="contact-title">Contact Me</h1>
        <h2 className="contact-subtitle">Let's Connect</h2>
        <p className="contact-description">Have a project in mind or just want to say hi?
          <br />I'd love to hear from you!
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <MdEmail className="contact-detail-icon contact-email-icon" />
            <div className="contact-detail-content">
              <span className="contact-detail-label">Email</span>
              <a className="contact-detail-value" href="mailto:bakareaisha006@gmail.com">
                bakareaisha006@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <FaPhoneAlt className="contact-detail-icon contact-phone-icon" />
            <div className="contact-detail-content">
              <span className="contact-detail-label">Phone</span>
              <span className="contact-detail-value">07067447015</span>
              <span className="contact-detail-value">09016437017</span>
            </div>
          </div>

          <div className="contact-detail">
            <IoLocationSharp className="contact-detail-icon contact-location-icon" />
            <div className="contact-detail-content">
              <span className="contact-detail-label">Location</span>
              <span className="contact-detail-value">Nigeria</span>
            </div>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input value={formdata.name} onChange={handleChange} name='name' className="contact-input" type="text" placeholder="Your name" />
        <input value={formdata.email} onChange={handleChange} name='email' className="contact-input" type="email" placeholder="Your email" />
        <textarea value={formdata.message} onChange={handleChange} name='message' className="contact-message" placeholder="Your message"></textarea>
        <button className="contact-submit" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"} {!isSending &&<LiaTelegramPlane />}
        </button>
       <ToastContainer position="top-right" autoClose={5000} closeOnClick pauseOnHover />
      </form>
    </section>
  );
};

export default Contact;