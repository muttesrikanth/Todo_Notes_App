import React from "react";

const StaredDataDisplayComponent = (props) => {
  return (
    <div
      key={props.index}
      className="displayContainer bg-info p-3 m-1 d-flex justify-content-between"
    >
      <div className="ovScroll">
        <h2 className=" headding">{props.value.headding}</h2>
        <p className="description">{props.value.description}</p>
      </div>
      <div className="d-flex flex-column justify-content-around">
        {
          <i
            className="bi bi-star-fill" title="Remove from Stared"
            style={{ fontSize: "40px", marginLeft: "20px",color:"yellow" }}
            onClick={() => props.onStaredHandeller(props.value)}
          ></i>
        }
        {
          <i
            className="bi bi-trash text-danger" title=" Add to Deleted"
            onClick={() => props.deleteHandeller(props.value)}
            style={{ fontSize: "40px", marginLeft: "20px" }}
          ></i>
        }
      </div>
    </div>
  );
};

export default StaredDataDisplayComponent;
