import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Our story, our passion, and our commitment to serving delicious food</p>
        </div>
      </div>

      <div className="container">
        {/* Our Story */}
        <div className="story-section">
          <div className="story-content">
            <h2>🍔 Our Story</h2>
            <p>
              Founded in 2018, Food Cart began as a simple dream: to bring delicious, 
              fresh food to our community in an accessible and friendly way. What started 
              as a single cart on the corner of Main Street has grown into a beloved 
              local institution, serving thousands of happy customers every year.
            </p>
            <p>
              Our founder, Chef Maria Rodriguez, started with just a passion for cooking 
              and a desire to share her family's traditional recipes with the world. 
              Today, we continue her legacy by combining traditional flavors with modern 
              culinary techniques, always using the freshest local ingredients.
            </p>
            <p>
              We believe that great food has the power to bring people together, create 
              memories, and make any day special. That's why we put our heart into every 
              dish we serve.
            </p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">📸</div>
          </div>
        </div>

        {/* Our Values */}
        <div className="values-section">
          <h2>💝 Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Fresh & Local</h3>
              <p>We source our ingredients from local farmers and suppliers, ensuring the freshest quality while supporting our community.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">👨‍👩‍👧‍👦</div>
              <h3>Community First</h3>
              <p>We're not just a food cart - we're part of the neighborhood. We give back to our community and support local causes.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎨</div>
              <h3>Creativity</h3>
              <p>We're constantly experimenting with new flavors and techniques, always looking to surprise and delight our customers.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Service</h3>
              <p>Every customer interaction matters. We treat everyone like family and go above and beyond to ensure satisfaction.</p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="team-section">
          <h2>👥 Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👩‍🍳</div>
              <h3>Maria Rodriguez</h3>
              <p className="member-title">Founder & Head Chef</p>
              <p>With over 15 years of culinary experience, Maria brings passion and creativity to every dish. Her traditional family recipes are the heart of our menu.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🍳</div>
              <h3>Carlos Martinez</h3>
              <p className="member-title">Sous Chef</p>
              <p>Carlos specializes in Mexican cuisine and brings his expertise in authentic flavors and techniques to our kitchen.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Sarah Johnson</h3>
              <p className="member-title">Operations Manager</p>
              <p>Sarah ensures everything runs smoothly, from customer service to inventory management. She's the friendly face you'll see coordinating our events.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Mike Chen</h3>
              <p className="member-title">Catering Coordinator</p>
              <p>Mike handles all our catering inquiries and ensures every event is perfectly executed. He loves creating memorable experiences for our clients.</p>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="awards-section">
          <h2>🏆 Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🥇</div>
              <h3>Best Food Cart 2023</h3>
              <p>Local Food Critics Association</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🌟</div>
              <h3>Community Choice Award</h3>
              <p>Downtown Business Association</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🍽️</div>
              <h3>Excellence in Catering</h3>
              <p>Event Planners Network</p>
            </div>
          </div>
        </div>

        {/* Community Involvement */}
        <div className="community-section">
          <h2>🤝 Community Involvement</h2>
          <div className="community-content">
            <p>
              We believe in giving back to the community that has supported us. 
              Throughout the year, we participate in various initiatives:
            </p>
            <ul>
              <li>🍎 Donating meals to local schools and community centers</li>
              <li>🌱 Supporting local farmers and sustainable agriculture</li>
              <li>🎓 Providing culinary internships for local students</li>
              <li>🏥 Participating in charity events and fundraisers</li>
              <li>🌍 Using eco-friendly packaging and reducing waste</li>
            </ul>
            <p>
              We're proud to be part of this amazing community and look forward 
              to continuing to serve you for many years to come.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-cta">
          <h2>📞 Get in Touch</h2>
          <p>Have questions about our story or want to learn more? We'd love to hear from you!</p>
          <div className="cta-buttons">
            <a href="tel:(555) 123-4567" className="btn btn-primary">Call Us</a>
            <a href="mailto:info@foodcart.com" className="btn btn-secondary">Email Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 