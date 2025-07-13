import React from 'react';
import './Hours.css';

interface DayHours {
  day: string;
  open: string;
  close: string;
  isOpen: boolean;
}

const Hours: React.FC = () => {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  const hours: DayHours[] = [
    { day: 'Monday', open: '11:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Tuesday', open: '11:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Wednesday', open: '11:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Thursday', open: '11:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Friday', open: '11:00 AM', close: '10:00 PM', isOpen: true },
    { day: 'Saturday', open: '12:00 PM', close: '10:00 PM', isOpen: true },
    { day: 'Sunday', open: '12:00 PM', close: '8:00 PM', isOpen: true },
  ];

  const isCurrentlyOpen = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    const today = hours[dayOfWeek === 0 ? 6 : dayOfWeek - 1];
    
    if (!today.isOpen) return false;
    
    const [openHour, openMinute] = today.open.split(':').map(Number);
    const [closeHour, closeMinute] = today.close.split(':').map(Number);
    
    // Convert to 24-hour format
    const openTime = openHour + (today.open.includes('PM') && openHour !== 12 ? 12 : 0);
    const closeTime = closeHour + (today.close.includes('PM') && closeHour !== 12 ? 12 : 0);
    
    const currentTimeMinutes = currentHour * 60 + currentMinute;
    const openTimeMinutes = openTime * 60 + openMinute;
    const closeTimeMinutes = closeTime * 60 + closeMinute;
    
    return currentTimeMinutes >= openTimeMinutes && currentTimeMinutes <= closeTimeMinutes;
  };

  return (
    <div className="hours">
      <div className="hours-header">
        <div className="container">
          <h1>Hours & Location</h1>
          <p>Find us and know when we're serving delicious food</p>
        </div>
      </div>

      <div className="container">
        {/* Current Status */}
        <div className={`status-card ${isCurrentlyOpen() ? 'open' : 'closed'}`}>
          <div className="status-icon">
            {isCurrentlyOpen() ? '🟢' : '🔴'}
          </div>
          <div className="status-content">
            <h2>We are currently {isCurrentlyOpen() ? 'OPEN' : 'CLOSED'}</h2>
            <p>Today is {currentDay} • Current time: {currentTime}</p>
          </div>
        </div>

        {/* Hours Table */}
        <div className="hours-section">
          <h2>Operating Hours</h2>
          <div className="hours-table">
            {hours.map((day, index) => (
              <div 
                key={index} 
                className={`hours-row ${day.day === currentDay ? 'current-day' : ''}`}
              >
                <div className="day">{day.day}</div>
                <div className="time">
                  {day.isOpen ? `${day.open} - ${day.close}` : 'Closed'}
                </div>
                <div className="status">
                  {day.day === currentDay && isCurrentlyOpen() ? '🟢 Open Now' : 
                   day.day === currentDay ? '🔴 Closed' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="location-section">
          <h2>📍 Find Us</h2>
          <div className="location-card">
            <div className="location-info">
              <h3>Food Cart Location</h3>
              <p>📍 123 Food Street, Downtown City, State 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@foodcart.com</p>
            </div>
            <div className="location-map">
              <div className="map-placeholder">
                🗺️ Interactive Map Coming Soon
              </div>
            </div>
          </div>
        </div>

        {/* Special Hours */}
        <div className="special-hours">
          <h2>📅 Special Hours</h2>
          <div className="special-notice">
            <h3>Holiday Hours</h3>
            <p>We may have modified hours during holidays. Please call ahead to confirm our schedule.</p>
            <p><strong>Thanksgiving:</strong> Closed</p>
            <p><strong>Christmas:</strong> Closed</p>
            <p><strong>New Year's Day:</strong> 2:00 PM - 8:00 PM</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <h2>📞 Contact Information</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
              <p>Call for large orders</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>info@foodcart.com</p>
              <p>For catering inquiries</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Social Media</h3>
              <p>@foodcart</p>
              <p>Follow for updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours; 