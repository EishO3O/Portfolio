import { Icon } from '@iconify/react';
import googleIcon from '@iconify-icons/logos/google';
import React from 'react';
import '../styles/FeaturedProject.css';

export default function FeaturedProject() {
  return (
    <section id="project" className="featured-section">
      <div className="featured-container">
        <div className="featured-left">
          <Icon icon={googleIcon} width="80" height="40" className="google-logo" />

          <h1>Trash Trackr</h1>

          <p>
            Designed and built with Flutter, Firebase, and Gemini as part of the 2025 Google
            Solutions Challenge APAC. Achieved Top 3 ranking in the region for innovation,
            impact, and user engagement.
          </p>

          <div className="featured-sub">
            <h4>Date</h4>
            <p>March - September 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
