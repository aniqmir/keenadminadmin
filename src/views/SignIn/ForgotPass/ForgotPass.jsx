import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    // open: false,
    email:'',
    newpass:'',
    confirmpass:''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickOpen = () => {
   this.props.handleOpen()
  };

  handleClose = () => {
    this.props.handleClose()
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          Forgot Password
        </Button>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              Change Password
            </DialogContentText> */}
               <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              variant="outlined"
              onChange={()=>this.handleChange('email')}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="New Password"
              type="password"
              variant="outlined"
              onChange={()=>this.handleChange('newpass')}
              fullWidth
            />
                <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Confirm Password"
              variant="outlined"
              type="password"
              onChange={()=>this.handleChange('confirmpass')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
