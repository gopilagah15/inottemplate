import React, { useState } from 'react'

const NoteState = () => {
  const notesInitials = [];
  const [notes, setnotes] = useState(notesInitials);
  const host = "http://localhost:5000" 

  const getAllNotes =async()=>{
      //API CALL

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
  }
  const addNote =async()=>{
      //API CALL

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
  }
  const editNote =async()=>{
      //API CALL

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
  }
  const deleteNote =async()=>{
      //API CALL

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
  }
  
  return (
    <div>NoteState</div>
  )
}

export default NoteState