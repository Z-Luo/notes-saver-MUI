import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "../css/Note.css";

const Note = (props) => {
  const onClickHandler = () => {
    props.deleteHandler(props.id);
  };

  return (
    <div className="note">
      <div className="note__body">{props.text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          onClick={onClickHandler}
          className="note__delete"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
};

export default Note;
