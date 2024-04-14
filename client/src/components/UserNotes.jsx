import React, { useEffect, useState } from "react";
import { Base_url } from "../config";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import "../styles/UserNotes.css";
import Note from "./Note";
const UserNotes = () => {
  const navigate=useNavigate()
  const [tasks, setTasks] = useState([]);
  const [createNote, setcreateNote] = useState(false);
  const [t, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [completed, setCompleted] = useState(false);

  const completeNote = () => {
    setCompleted(true);
  };
  const deleteNoteHandler = async (id) => {
    console.log(id)
    try {
      const { data } = await axios.delete(`${Base_url}/note/${id}`, {
        withCredentials: true,
      });

    alert("delete succcess")
    window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const updateNoteHandler = async (id) => {
    console.log(id)
    try {
      const { data } = await axios.put(`${Base_url}/note/comp/${id}`,{}, {
        withCredentials: true,
      });

    alert("update succcess")
    window.location.reload();
    if(data.success){
      sty
    }
    } catch (error) {
      console.log(error);
    }
  };
  const createNoteHandler = async() => {
    // e.preventDefault();
    console.log("click")
    try {
      const {note} = await axios.post(
        `${Base_url}/note/create`,
        {
          title:t,
          description:desc,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setcreateNote(false)
      console.log(note);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${Base_url}/note/mynote`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.note);
        setTasks(res.data.note);
      })
      .catch((e) => {
        console.log("e.response.message");
      });
  }, []);

  return (
    <div className="user-container">
      <div className="top">
        <div>
          <h1>My Notes</h1>
        </div>
        <div>
          <button onClick={() => setcreateNote(!createNote)}>
            Create Notes
          </button>
        </div>
      </div>
      <div className="notes">
        {tasks.map((tasks) => {
          return (
            <Note key={tasks._id} 
              id={tasks._id}
              completed={tasks.isCompleted}
              title={tasks.title}
              description={tasks.description}
              deleteNoteHandler={deleteNoteHandler}
              updateNoteHandler ={updateNoteHandler}
            />
          );
        })}
      </div>

      <div className="create-notes">
        {createNote && (
          <div className="modal">
            <div className="modal-content center-modal">
              <div className="modal-top">
                <h2>Create Notes</h2>
                <span className="close" onClick={() => setcreateNote(false)}>
                  &times;
                </span>
              </div>
            <form action="" onSubmit={createNoteHandler}>
              <div className="inp">
                <input
                  type="text"
                  placeholder="Enter title"
                  value={t}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <button >Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNotes;
