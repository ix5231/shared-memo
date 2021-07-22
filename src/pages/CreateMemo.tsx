import clsx from "clsx";
import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useMemoUtils } from "src/features/hooks";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "100ch",
  },
}));

const CreateMemo = () => {
  const styles = useStyles();
  const history = useHistory();
  const { isReady, addMemo } = useMemoUtils();
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      addMemo({
        title: values.title,
        content: values.content,
      });
      history.replace("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <TextField
          className={clsx(styles.margin, styles.textField)}
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          label="Title"
          placeholder="Memo title is here"
        />
      </Box>
      <Box>
        <TextField
          className={clsx(styles.margin, styles.textField)}
          rows={10}
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
          label="Content"
          placeholder="Content..."
          variant="outlined"
          multiline
        />
      </Box>
      <Button
        className={styles.margin}
        variant="contained"
        color="primary"
        disabled={!isReady || formik.values.title === ""}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default CreateMemo;
