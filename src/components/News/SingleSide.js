import React from 'react';

const SingleSide = ({item}) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank">
      <div className="section">
        
        <h5>{item.title}</h5>
        <p>{item.source.name}</p>
      </div>
    </a>
  </div>
);

export default SingleSide;
