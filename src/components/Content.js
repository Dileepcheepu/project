// src/components/Content.js
import React from 'react';
import '../styles/Content.css';
import { FaPencilAlt, FaImages, FaShareAlt, FaVideo, FaRegFileAlt } from 'react-icons/fa';

const Content = () => {
  return (
    <div className="content-container">
      <h2>Content Management</h2>
      <p>
        Create, manage, and distribute engaging content across multiple channels to boost customer engagement.
      </p>

      <div className="content-features">
        <div className="content-feature">
          <FaPencilAlt className="content-icon" />
          <h3>Content Creation</h3>
          <p>Create high-quality content for blogs, social media, and other platforms.</p>
        </div>

        <div className="content-feature">
          <FaImages className="content-icon" />
          <h3>Visual Content</h3>
          <p>Design and share compelling visuals and graphics to engage your audience.</p>
        </div>

        <div className="content-feature">
          <FaShareAlt className="content-icon" />
          <h3>Content Distribution</h3>
          <p>Distribute your content across multiple channels for maximum reach.</p>
        </div>

        <div className="content-feature">
          <FaVideo className="content-icon" />
          <h3>Video Content</h3>
          <p>Create and manage video content for better audience engagement.</p>
        </div>

        <div className="content-feature">
          <FaRegFileAlt className="content-icon" />
          <h3>Content Analytics</h3>
          <p>Analyze the performance of your content across various platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
