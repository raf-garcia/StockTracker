import React from 'react';

const TopPeers = ({ topPeers }) => {
  return (
    <div>
      <h2 className="heading-section">Top Peers</h2>
      {topPeers.map((peer, idx) => (
        <span key={idx}>{peer} </span>
      ))}
    </div>
  );
}

export default TopPeers;