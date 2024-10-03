import React,{useState} from 'react'

const EditPopup = ({allHeadd,setEditPopupDisplay,editPopupData,popupSaveHandeller}) => {
    const [formHeadding,setFormHeadding]=useState(editPopupData?editPopupData.headding:'');
    const [formDescription,setFormDescription]=useState(editPopupData?editPopupData.description:'');
    const [inputError,setInputError]=useState('')
    
    const headdingHandeller=(e)=>{
        setFormHeadding(e.target.value.replace(/\s+/g,' '))
        if(e.target.value.replace(/\s+/g,' ')===''||e.target.value.replace(/\s+/g,' ')===' '){
            setInputError("*Data can't be empty")
        }
        else if((allHeadd.includes(e.target.value.replace(/\s+/g,' '))) && (e.target.value!==editPopupData.headding)){
            setInputError('*Data allready Exist')
        }
        else{
            setInputError('')
        }
    }

    const descriptionHandeller=(e)=>{
        setFormDescription(e.target.value.replace(/\s+/g,' '))
        // if(e.target.value.replace(/\s+/g,' ')===''||e.target.value.replace(/\s+/g,' ')===' '){
        //     setInputError("*Data can't be empty")
        // }
        // // else if((allHeadd.includes(formHeadding)||editPopupData.headding!==formHeadding)){
        // //     setInputError('*Data allready Exist')
        // // }
        // else{
        //     setInputError('')
        // }
    }

  return (
    <div className={'d-flex flex-column bg-secondary edit-form  ovScroll '} style={{position:'absolute',top:0,left:0
    }}>
        <div className="d-flex flex-column p-2 pt-0">
        <div className='text-light'>{inputError}</div>
            <div className="d-flex flex-row justify-content-between" style={{marginTop:'7px'}}>
                <button className="btn btn-success" onClick={()=>popupSaveHandeller(editPopupData.dt,formHeadding,formDescription)} disabled={inputError} >Save</button>
                <button className="btn btn-danger" onClick={()=>setEditPopupDisplay(false)}>Cancel</button>
            </div>
            <hr/>
                <label className="text-info">Headding</label>
                <textarea value={formHeadding} onChange={(e)=>headdingHandeller(e)}   style={{borderRadius:'10px'}}/>
                <label className="text-info">Description</label>
                <textarea value={formDescription} onChange={e=>descriptionHandeller(e)}   style={{borderRadius:'10px'}}/>
        </div>
    </div>
  )
}
export default EditPopup;