import React from 'react';

const isMarketOpen = () => {
  const dateNow = new Date();
  const marketOpen = new Date().setUTCHours(13, 30, 0, 0);
  const marketClose = new Date().setUTCHours(20, 0, 0, 0);

  return (dateNow.getTime() > marketOpen && dateNow.getTime() < marketClose);
};

const getLocalTimeZone = () => {
  const date = new Date().toString();
  let timeZone = date.match(/\(([^)]+)\)/)[1];
  timeZone = timeZone.split(' ').map(string => string[0]);
  return timeZone.join('');
}

const MarketStatus = ({lastUpdate}) => {
  const localTimeZone = getLocalTimeZone() ? getLocalTimeZone() : '';
  const sun = <i className="far fa-sun"></i>;
  const moon = <i className="far fa-moon"></i>;
  
  return (
    <div>
      <span>Real-Time Price as of {lastUpdate} {localTimeZone}</span>
      <span>{` `}</span>
      <span>{isMarketOpen() ? sun : moon} Market {isMarketOpen() ? 'Open' : 'Closed'}</span>
    </div>
  );
}

export default MarketStatus;