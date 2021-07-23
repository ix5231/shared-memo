import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import { useFormik } from "formik";

interface FormValues {
  title: string;
  content: string;
}

interface Props {
  defaultValue?: FormValues;
  onSubmit: (values: FormValues) => void;
  disabled?: boolean;
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "100ch",
  },
}));

const MemoForm = ({ defaultValue, onSubmit, disabled = false }: Props) => {
  const styles = useStyles();
  const formik = useFormik<FormValues>({
    initialValues: defaultValue ?? {
      title: "",
      content: "",
    },
    onSubmit,
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
        disabled={disabled || formik.values.title === ""}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default MemoForm;
