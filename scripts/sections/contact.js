window.portfolioSections = window.portfolioSections || {};

window.portfolioSections.contact = `
<section id="contact" class="container section section-reveal">
  <div class="contact-layout">
    <div class="contact-copy">
      <h2>Get In Touch</h2>
      <p>
        I'm open to full-time roles and collaborative projects in full-stack development or AI engineering. 
        I usually reply within 24-48 hours.
      </p>
    </div>

    <form
      class="contact-form"
      action="https://formsubmit.co/malishba909@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New Portfolio Message - Alishba Malik" />
      <input type="hidden" name="_captcha" value="false" />

      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your full name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required />

      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="How can I help?" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>

      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</section>
`;
