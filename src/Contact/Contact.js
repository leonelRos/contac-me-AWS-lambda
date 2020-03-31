import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '20ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Please enter a name" variant="filled" />
      <TextField id="email" label="email" variant="filled" />
      <TextField id="message" label="Enter Message here" variant="filled" />
      <button href='#'>Submit</button>
    </form>
  );
}

// export default Contact;