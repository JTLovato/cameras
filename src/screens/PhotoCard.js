import React from 'react';

export default function PhotoCard(props) {

  const { photo } = props;
  
  return (
    <div key={photo.id} className="photo-card">
        <img src={photo.src} alt="" />
        <div className="photo-card-hover">
          <h3>title:</h3>
          <h1>{photo.title}</h1>
          <h3>credit:</h3>
          <h2>{photo.credit}</h2>
        </div>
    </div>
  );
}