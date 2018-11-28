import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
  winter: {
    text: 'Brrr, its cold!',
    iconName: 'snowflake'
  },
  summer: {
    text: 'Lets go to the beach!',
    iconName: 'sun'
  }
};

const getSeason = (lat, month) => {
  if (month < 2 && month > 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // reference for the object seasonConfig
  const {text, iconName} = seasonConfig[season] // {text, iconName}

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-right ${iconName} massive icon`} />
      <h1>{text}</h1>
      <i className={`icon-left ${iconName} massive icon`} />
    </div>
  );
};

export default SeasonDisplay;
