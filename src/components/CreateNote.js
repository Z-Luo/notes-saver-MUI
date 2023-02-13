import LinearProgress from "@mui/material/LinearProgress";

const CreateNote = (props) => {
  const charLimit = 100;
  const charLeft = charLimit - props.inputText.length;
  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        value={props.inputText}
        placeholder="Type..."
        maxLength="100"
        onChange={props.textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label">{`${charLeft} characters left`}</span>
        <button onClick={props.saveHandler} className="note__save">
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      ></LinearProgress>
    </div>
  );
};

export default CreateNote;
