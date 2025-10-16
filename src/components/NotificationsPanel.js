// src/components/NotificationsPanel.js
import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import '../styles/NotificationsPanel.css';

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New customer added!', timestamp: new Date().toLocaleTimeString() },
    { id: 2, message: 'Reminder: Follow up with John Doe.', timestamp: new Date().toLocaleTimeString() },
    { id: 3, message: 'Sales pipeline update: New deal won!', timestamp: new Date().toLocaleTimeString() }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: 'New automatic notification!',
        timestamp: new Date().toLocaleTimeString()
      };
      setNotifications(prev => [newNotification, ...prev]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const clearNotifications = () => setNotifications([]);

  return (
    <div className="notifications-panel">
      <div className="panel-header">
        <h3><Bell className="icon" /> Notifications</h3>
        <button onClick={clearNotifications} className="clear-btn"><X /> Clear All</button>
      </div>
      <ul>
        {notifications.length > 0 ? notifications.map((note) => (
          <li key={note.id} className="notification-item">
            <p>{note.message}</p>
            <span>{note.timestamp}</span>
          </li>
        )) : <p>No notifications available</p>}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
