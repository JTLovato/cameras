import React from 'react';
import Data from '../Data';
import PhotoCard from './PhotoCard';

export default function Highlights() {
  return (
      <div className="highlights-container">
        {Data.photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} ></PhotoCard>
        ))}
      </div>
  );
}
