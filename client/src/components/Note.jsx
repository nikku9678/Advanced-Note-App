import React from 'react'
import '../styles/UserNotes.css'
const Note = ({title,description,id,deleteNoteHandler,updateNoteHandler,completed}) => {
  return (
    <div className="note" >
              <h2>{title} </h2>
              <p>{description}</p>
              {/* <p>{tasks._id}</p> */}
              <div className="ope">
                <li>
                  <i className="fa-solid fa-square-check" style={{color: completed? 'green':'black'}} onClick={()=>updateNoteHandler(id)} ></i>
                </li>
                <li>
                  <i className="fa-solid fa-trash" onClick={()=>deleteNoteHandler(id)}  />
                </li>
               
              </div>
            </div>
  )
}

export default Note
