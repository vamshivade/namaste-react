const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">📞 Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Send us your questions, feedback, or
          suggestions.
        </p>

        <form className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
