import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Delete from "@material-ui/icons/Delete";

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirm = () => {
    console.log(typeof this.props.id)
    const data = {'id': this.props.id}
      axios.put('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/users',data,{
        headers: {
          'Content-Type': 'application/json',
       }
      }).then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        console.log(res.data.success)
        if (res.data.success === false) {
          this.handleClose()      
          alert(res.data.message);

        } 
        else {
          this.handleClose()
        }
      })
      .catch(error => {
        console.log(error);
        this.handleClose()
        alert('Internal Server error');
      });
  };


  render() {
    return (
      <div>
        <IconButton color="secondary" onClick={this.handleClickOpen}>
          <Delete/>
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Delete User
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              You Sure Want to delete this User?!!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleConfirm} color="primary">
              Confirm
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;
