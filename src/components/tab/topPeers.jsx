import React from 'react';

const TopPeers = ({ topPeers }) => {
  return (
    <div>
      <h4>Top Peers</h4>
      {topPeers.map((peer, idx) => (
        <span key={idx}>{peer} </span>
      ))}
    </div>
  );
}

export default TopPeers;