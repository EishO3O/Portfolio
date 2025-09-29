import { Icon } from '@iconify/react';
import googleIcon from '@iconify-icons/logos/google';
import clarityLogo from '../assets/clarity.png';
import React from 'react';
import '../styles/FeaturedProject.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function FeaturedProject() {
  return (
    <section id="project" className="featured-section">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        style={{ width: '100%' }}
      >
        {/* --- Project 1: Trash Trackr --- */}
        <SwiperSlide>
          <div className="featured-container">
            <div className="featured-left">
              <Icon icon={googleIcon} width="80" height="80" className="google-logo" />
              <h1>Trash Trackr</h1>
              <p>
                Designed and built with Flutter, Firebase, and Gemini as part of the 2025 Google
                Solutions Challenge APAC. Achieved Top 3 ranking in the region for innovation,
                impact, and user engagement.
              </p>
              <div className="featured-sub">
                <h4>Date</h4>
                <p>March – September 2025</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Project 2: Clairity --- */}
        <SwiperSlide>
          <div className="featured-container">
            <div className="featured-left">
              <img src={clarityLogo} alt="Clairity Logo" width="80" className="clarity-logo" />
              <h1>Clairity</h1>
              <p>
                An AI-powered system that uses IoT sensors and predictive analytics to
                monitor restroom air quality and notify staff when thresholds are exceeded.
              </p>
              <div className="featured-sub">
                <h4>Date</h4>
                <p>January – September 2025</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 👇 Put the dots once here, outside slides */}
        <div className="custom-pagination"></div>
      </Swiper>
    </section>
  );
}
