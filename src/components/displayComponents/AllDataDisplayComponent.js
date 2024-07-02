import React,{useState} from "react";
import '../../App.css'
import EditPopup from "../EditPopup";
const AllDataDisplayComponent = ({todos,setTodos,value,index,divtimeDisplayHandeller,deleteHandeller, onStaredHandeller}) => {
  const [editPopupDisplay,setEditPopupDisplay]=useState(false)
  const [editPopupData,setEditPopupData]=useState([]);
  const editHandeller=(value)=>{
    setEditPopupDisplay(!editPopupDisplay)
    setEditPopupData(value)
      }
const popupSaveHandeller=(value,formHeadding,formDescription)=>{
  let todoscopy=[...todos];
  let avaliable=todoscopy.find((val)=>val.dt===value);
  if(avaliable){
    avaliable.headding=formHeadding.replace(/\s+/g,' ');
    avaliable.description=formDescription.replace(/\s+/g,' ');
    setTodos(todoscopy);
    setEditPopupDisplay(false)
  }
  else{
    setEditPopupDisplay(false)
  }
}
const allHeadd=todos.map((v)=>v.headding);
  return (
    <div
      key={index}
      onClick={(e) => {divtimeDisplayHandeller(value);e.stopPropagation()}}
      className="displayContainer bg-info p-3 m-1 d-flex justify-content-between" style={{position:'relative'}} >
      <div className="ovScroll"  >
        <h2 className=" headding">{value.headding}</h2>
        <p className="description">{value.description}</p>
      </div>
     {editPopupDisplay && <div style={{position:'absolute',top:0,left:0}}>
        <EditPopup allHeadd={allHeadd} setEditPopupDisplay={setEditPopupDisplay} editPopupData={editPopupData} popupSaveHandeller={popupSaveHandeller}/>
      </div>}

      <div className="d-flex flex-column justify-content-between">
        {value.stared ? (
          <i
            className="bi bi-star-fill ml-3" title="Remove from starred"
            onClick={(e) => {onStaredHandeller(value);e.stopPropagation()}}
            style={{ fontSize: "30px", marginLeft: "20px", color: "yellow" }}
          ></i>
        ) : (
          <i
            className="bi bi-star"  title="Add to Stared"
            onClick={(e) => {onStaredHandeller(value);e.stopPropagation()}}
            style={{ fontSize: "30px", marginLeft: "20px" }}
          ></i>
        )}
        {
          <i
            className="bi bi-pencil-square text-secondary" title="Edit item"
            onClick={() =>editHandeller(value)}
            style={{ fontSize: "30px", marginLeft: "20px" }}
          ></i>
        }
       
        {
          <i
            className="bi bi-trash text-danger" title="Add to Deleted"
            onClick={() => deleteHandeller(value)}
            style={{ fontSize: "30px", marginLeft: "20px" }}
          ></i>
        }
      </div>
    </div>
  );
};

export default AllDataDisplayComponent;
