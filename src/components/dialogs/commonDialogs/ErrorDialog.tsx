import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';

type propsType = {
  dialog: boolean,
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const ErrorDialog: React.FC<propsType> = ({dialog, setDialog}) => {
  return (
    <Dialog
      open={dialog}
      onClose={() => setDialog(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}
        <IconButton
          aria-label="close"
          onClick={() => setDialog(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton></DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialog(false)}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;