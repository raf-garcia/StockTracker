import React from 'react';

const TopPeers = ({ topPeers }) => {
  return (
    <div className="section-topPeers">
      <h2 className="heading-section">Top Peers</h2>
      {topPeers.map((peer, idx) => (
        <span className='section-topPeers__peer' key={idx}>{peer} </span>
      ))}
    </div>
  );
}

export default TopPeers;