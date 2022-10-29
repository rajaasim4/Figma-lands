import React from "react";

const ComponentCard = (props) => {
  return (
    <div className="Content_main d-flex justify-content-evenly flex-column">
      <h5 className="text-center">{props.title}</h5>
      <p className="text-center">{props.para}</p>
      <button className="blue_bg d-block mx-auto">{props.btntitle}</button>
      <img src={props.imgsrc} className="d-block w-100 h-50" alt="" />
    </div>
  );
};

export default ComponentCard;
