import React from 'react';

const ContactForm = () =>
  <section>
    <form name="killer-rhino-contact" method="POST" data-netlify="true">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
        <button type="submit" className="button submit">Send Message</button>
          
        </li>
<input type="hidden" name="form-name" value="killer-rhino-contact" />
      </ul>
    </form>
  </section>

export default ContactForm;
