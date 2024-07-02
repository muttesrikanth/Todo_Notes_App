import React, { useState } from "react";
import '../App.css'
const InputDataComponent = ({todos,addTodoHandeller,mainSearch,setMainSearch,setPopupDispay}) => {
  const [indata, setIndata] = useState(mainSearch);
  const [desc, setDesc] = useState('');
  const [inputExist,setInputExist]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const indataHandeller = (e) => {
    setIndata(e.target.value);
    let copyTodo=[...todos]
    let mapItem=copyTodo.map((val)=>val.headding)
    setInputExist(mapItem.includes(e.target.value))
    if(mapItem.includes(e.target.value)){
      setErrorMessage('*Data allready exist')
    }
    else{
      setErrorMessage("")
    }
  };

  const descHandeller = (e) => {
    setDesc(e.target.value);
  };

  const formSubmitHandeller = (e) => {
    e.preventDefault();
      let indate = new Date();
      let fullDate = `${indate.toLocaleDateString()}  ${indate.toLocaleTimeString()}`;
      let totalData = {headding: indata.replace(/\s+/g,' '),description: desc.replace(/\s+/g,' '),dt: fullDate,stared: false,deleted: false};
  
      if(totalData.headding === ""||totalData.description==="") {
        setErrorMessage("*Please Fill headding or description it can't be empty.")
      }
      else if(totalData.headding === " "||totalData.description===' ') {
        setErrorMessage("*space is not accepted Please Fill headding or description")
      }
      else {
        addTodoHandeller(totalData);
        setMainSearch('');
        setErrorMessage('')
        setPopupDispay(false)
      }
  };
const cancelHandeller=()=>{
      setMainSearch('');
      setErrorMessage('')
      setPopupDispay(false)
}

  return (
    <>
      <form
        id="inputDataComp"
        className="text-center container-fluid card d-flex flex-column"
        onSubmit={formSubmitHandeller}>
            <h3 className="d-flex flex-row justify-content-center text-danger">Add Notes</h3>
           {/* <div className="ml-15">
          </div> */}
            <div className="text-danger">{errorMessage}</div>
          <label className="text-info d-flex align-left">Headding</label>
          <input className="" value={indata} onChange={indataHandeller} />
          <label className="text-info  d-flex align-left">Description</label>
          <textarea
            className=""
            rows={5}
            value={desc}
            onChange={descHandeller}/>
        <div className="d-flex flex-row justify-content-center m-2 ">
          <button className="m-2 btn btn-success" type="submit" disabled={inputExist}>Add
          </button>
            <button className="m-2 btn btn-danger" onClick={cancelHandeller}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default InputDataComponent;
