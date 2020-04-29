import React from 'react';

const HeaderPage = (props) => {
  return (
    <div className="page-header">
      <img src={props.img} alt="header-icon" />
      <span>{props.subtitle}</span>
      <h1>{props.title}</h1>
    </div>
  )
}

export default HeaderPage;