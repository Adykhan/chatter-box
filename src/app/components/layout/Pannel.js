import React from 'react';

const Pannel = (props) => {
  const { mainHeading } = props;
  return(
    <h3 className="mainHeading">{ mainHeading }</h3>
  )
}

export default Pannel;
