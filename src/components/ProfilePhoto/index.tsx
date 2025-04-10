import React from 'react';
import profileSrc from 'assets/images/profile.jpg';

const ProfilePhoto: React.FC = () => {
  return (
    <div className="w-full flex justify-center xl:justify-end">
      <img
        src={profileSrc}
        alt="Basu Ojha"
        className="w-32 h-32 md:min-w-48 md:min-h-48 lg:min-w-64 lg:min-h-64 rounded-full border-4 border-gray-200 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-150"
      />
    </div>
  );
};

export default ProfilePhoto;
