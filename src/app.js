import React from 'react';
import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  CTA,
} from '../sections';

function app() {
  return (
    <div className="overflow-hidden bg-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="z-0 gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="z-0 gradient-03" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="z-0 gradient-05" />
        <Feedback />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
export default app;
