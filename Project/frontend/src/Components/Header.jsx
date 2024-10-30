import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import group from '../assets/group_profiles.png';
import girl from '../assets/Home.jpg';

const Header = () => {
  return (
    <div className="bg-primary rounded-lg px-8 md:px-12 lg:px-20 py-4 border-b border-gray-400">
      <div className="flex flex-col lg:flex-row items-center justify-between">

        {/*-----left side-----*/}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10"> {/* Removed margin auto for centering */}
          <p className="text-lg mb-4">
            Need someone to talk to? <br />
            Our counselors and <br />
            listeners are standing by.
          </p>
          <div className="mb-4">
            <img src={group} alt="Group profiles" className="w-32 h-auto" />
            <p className="mt-2">
              MindCare connects you to caring listeners for free emotional support.
            </p>
          </div>
          <button className="flex items-center text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white transition">
            <span>Get Started</span>
            <ArrowRightOutlined />
          </button>
        </div>

        {/*-----right side-----*/}
        <div className="md:w-1/2"> {/* Control width for responsive design */}
          <img src={girl} alt="Girl" className="w-full h-auto" />
        </div>

      </div>
    </div>
  );
};

export default Header;
