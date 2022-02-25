import classes from "./add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={classes.mainAddButton}>
      Add New Pizza
    </div>
  );
};

export default AddButton;
