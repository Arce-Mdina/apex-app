import React from 'react';

const DeveloperProfile = ({ name, imageUrl, bio }) => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '200px' }}>
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default DeveloperProfile;
