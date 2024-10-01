import React from 'react';
import AppBar from './AppBar'; // Import the AppBar component
import MainContent from './MainContent'; // Import the MainContent component
import TrafficLightNavigation from './TrafficLightNavigation'; // Import the TrafficLightNavigation component
import TypingHi from './TypingHi'; // Import the TypingHi component
import SkillsCarousel from './SkillsCarousel'; // Import the SkillsCarousel component
import { gsap } from 'gsap';

const Home = () => {
  React.useEffect(() => {
    // GSAP animations for the homepage content
    gsap.fromTo('.homepage-title', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5 });
    gsap.fromTo('.homepage-text', { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 1 });
    gsap.fromTo('.homepage-button', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, delay: 1, duration: 1 });

    // GSAP animation for the AppBar
    gsap.fromTo('.appbar', { y: -100 }, { y: 0, duration: 1, ease: 'power4.out' });
  }, []);

  return (
    <div 
      className="min-h-screen text-white relative flex flex-col justify-center items-center" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmQlMjBwaXhlbGF0ZWR8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* AppBar Component at the top */}
      <div className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="appbar bg-transparent bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg px-6 py-4 max-w-7xl mx-auto">
          <AppBar />
        </div>
      </div>
      
      <br />
      <br />


      {/* Card layout for MainContent and TrafficLightNavigation */}
      <div className="flex items-stretch justify-between w-full max-w-screen-xl p-8">
        {/* Main Content in the card */}
        <div className="flex-1 max-w-6xl mr-4">
          <MainContent />
        </div>

        {/* Right side: TypingHi component and Traffic Light Navigator */}
        <div className="flex-shrink-0 w-1/4 mt-20">
          <TypingHi /> {/* Greeting Typing Effect */}
          <div className="mt-8">
            <TrafficLightNavigation /> {/* Traffic Light Navigator */}
          </div>
        </div>
      </div>

      {/* Skills Carousel Component */}
      <div className="mt-20 w-full max-w-screen-xl px-8 mt-0">
        <SkillsCarousel /> {/* Skills Carousel */}
      </div>
    </div>
  );
};

export default Home;
