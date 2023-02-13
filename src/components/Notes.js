import { useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";
import "../css/Note.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    console.log("data", data);
    if (!data) return;
    if (data.length > 0) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    console.log(notes);
    //save to localStorage
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <Note
            deleteHandler={deleteHandler}
            id={note.id}
            key={note.id}
            text={note.text}
          />
        );
      })}

      <CreateNote
        saveHandler={saveHandler}
        textHandler={textHandler}
        inputText={inputText}
      ></CreateNote>
    </div>
  );
};

export default Notes;
