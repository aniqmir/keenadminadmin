import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ResponsiveDialog extends React.Component {
  

  handleClickOpen = () => {
    this.props.handleClickOpen()
  };

  handleDisagreeClose = () => {
    this.props.handleClose()
  };

  handleAgreeClose = () => {
      this.props.history.push('/home')
  }
  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button variant="contained" color="primary" style={{width:'75%'}} onClick={this.handleClickOpen}>
            Cancel
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Caution!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete your edits?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDisagreeClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleAgreeClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
