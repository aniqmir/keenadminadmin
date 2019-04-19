import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import axios from 'axios';
//import firebase from "../../../firebase/firebase.js";
import { storage } from "../../../firebase/firebase.js";
import Alert from './Alert/Alert.jsx';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: true,
    error: false,
    formValid: false,
    username: "null",
    displayname: "null",
    email: "null",
    firstname: "null",
    lastname: "null",
    phoneno: "nul",
    callback: "nul",
    title: "null",
    groupno: "null",
    password: "",
    confirmpass: "",
    pincode: "null",
    authcode: "null",
    hospital: "null",
    url: "no image",
    image: null,
    openAlert:false,
    alertContent:'',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ openAlert: true });
  };

  handleClose = () => {
    this.setState({ openAlert: false });
  };

  handleUpload = e => {
    this.setState({ formValid: false });
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
            this.setState({ formValid: true });
          });
      }
    );
  };
  handleChangeImage = e => {
    if (e.target.files[0]) {
      this.setState({image: e.target.files[0]})
      const image = e.target.files[0];
      this.setState(
        () => ({ image }),
        e => {
          this.handleUpload();
        }
      );
    }
  };
  onSubmit = () => {
    // if(this.state.image===null){
    //   this.setState({
    //     alertContent:"No Image/Select some image and let it Upload",
    //     openAlert:true
    //   })
    // }
    // else{
      if (this.state.password === this.state.confirmpass) {
        const data = JSON.stringify(this.state);
      axios.post('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/users', data,{
        headers: {
          'Content-Type': 'application/json',
       }
      }).then(res => {
        JSON.stringify(res);
        console.log('hereeee',res.data.success);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          alert(res.data.message);
        } 
        else {
          this.setState({
            authcode: 'null',
            callback: 'null',
            password: '',
            confirmpass:'',
            displayname: 'null',
            email: 'null',
            firstname: 'null',
            groupno: 'null',
            hospital: 'null',
            lastname: 'null',
            phoneno: 'null',
            pincode: 'null',
            title: 'null',
            username: 'null',
            image: null,
            url: 'no image'
            });
        }
      })
      .catch(error => {
        alert('Internal Server error');
      });        
     } 
      else {
        this.setState({
          error: true,
          password: "",
          confirmpass: ""
        });
      }
    // }
    
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={9}>
              <Typography variant="headline" component="h1">
                <strong>New User</strong>
              </Typography>
            </Grid>

            <Grid item xs={6} md={3} />

            <Grid item xs={12} style={{ paddingBottom: "3%" }}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
                alignContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Avatar
                    alt="User"
                    src={this.state.url}
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid item xs={10}>
                  <input
                    type="file"
                    // multiple={false}
                    // key= {this.state.image}                    
                    onChange={this.handleChangeImage}
                    alt="Browse"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-username-input"
                    label="Username"
                    name="Username"
                    margin="dense"
                    variant="outlined"
                    value={this.state.username}
                    onChange={this.handleChange("username")}
                    error={this.state.username === ''}
                    helperText={
                    this.state.username === '' ? 'Enter Username' : ''
                    }
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-displayname-input"
                    label="Display Name"
                    name="Display Name"
                    margin="dense"
                    variant="outlined"
                    value={this.state.displayname}
                    onChange={this.handleChange("displayname")}
                    error={this.state.displayname === ''}
                    helperText={
                    this.state.displayname === '' ? 'Enter Display Name' : ''
                    }
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="dense"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    error={this.state.email === ''}
                    helperText={
                    this.state.email === '' ? 'Enter Email' : ''
                    }
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-firstname-input"
                    label="FirstName"
                    name="FirstName"
                    margin="dense"
                    variant="outlined"
                    autoComplete="name"
                    value={this.state.firstname}
                    onChange={this.handleChange("firstname")}
                    error={this.state.firstname === ''}
                    helperText={
                    this.state.firstname === '' ? 'Enter Firstn Name' : ''
                    }
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-lastname-input"
                    label="LastName"
                    name="Username"
                    margin="dense"
                    variant="outlined"
                    autoComplete="name"
                    value={this.state.lastname}
                    onChange={this.handleChange("lastname")}
                    error={this.state.lastname === ''}
                    helperText={
                    this.state.lastname === '' ? 'Enter Last Name' : ''
                    }
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-number-input"
                    label="Phone No."
                    name="Phone No."
                    margin="dense"
                    variant="outlined"
                    autoComplete="tel"
                    value={this.state.phoneno}
                    onChange={this.handleChange("phoneno")}
                    error={this.state.phoneno === ''}
                    helperText={
                    this.state.phoneno === '' ? 'Enter Phone No' : ''
                    }
                    // fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-number-input"
                    label="Call Back Phone No."
                    margin="dense"
                    variant="outlined"
                    value={this.state.callback}
                    autoComplete="tel"
                    onChange={this.handleChange("callback")}
                    error={this.state.callback === ''}
                    helperText={
                    this.state.callback === '' ? 'Enter CallBack' : ''
                    }
                    // fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-status-input"
                    label="Title"
                    name="Title"
                    placeholder="title,eg MD,DO etc"
                    autoComplete="organization-title"
                    // defaultValue="title,eg MD,DO etc"
                    margin="dense"
                    variant="outlined"
                    value={this.state.title}
                    onChange={this.handleChange("title")}
                    error={this.state.title === ''}
                    helperText={
                    this.state.title === '' ? 'Enter Title' : ''
                    }
                    // fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="outlined-group-input"
                    label="Group Number"
                    margin="dense"
                    variant="outlined"
                    value={this.state.groupno}
                    onChange={this.handleChange("groupno")}
                    error={this.state.groupno === ''}
                    helperText={
                    this.state.groupno === '' ? 'Enter Group No' : ''
                    }
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <div style={{ paddingTop: "5%" }}>
                    <Typography variant="headline" component="h1">
                      <SettingsIcon fontSize="small" />
                      Password
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("password")}
                    value={this.state.password}
                    error={this.state.error}
                    // fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="Confirm password"
                    autoComplete="current-password"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("confirmpass")}
                    value={this.state.confirmpass}
                    error={this.state.error}
                    // fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  // id="outlined-email-input"
                  label="Pin Code"
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleChange("pincode")}
                  value={this.state.pincode}
                  error={this.state.pincode === ''}
                  helperText={
                  this.state.pincode === '' ? 'Enter Pin Code' : ''
                  }
                  // fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-email-input"
                  label="Auth Code"
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleChange("authcode")}
                  value={this.state.authcode}
                  error={this.state.authcode === ''}
                  helperText={
                  this.state.authcode === '' ? 'Enter Auth Code' : ''
                  }
                  // fullWidth
                />
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ textAlign: "center", paddingTop: "2.5%" }}
            >
              <TextField
                id="outlined-hospital-input"
                label="Hospital or Clinic"
                margin="dense"
                variant="outlined"
                fullWidth
                value={this.state.hospital}
                onChange={this.handleChange("hospital")}
                error={this.state.hospital === ''}
                helperText={
                this.state.hospital === '' ? 'Enter Hospital Name' : ''
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", paddingTop: "2.5%" }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: "75%" }}
                onClick={() => this.onSubmit()}
                disabled={this.state.username==='' || 
                this.state.displayname === '' || 
                this.state.email==='' || 
                this.state.firstname===''||
                this.state.lastname===''||
                this.state.phoneno==='' ||
                this.state.pstatus===''||
                this.state.password===''||
                this.state.confirmpass===''
              }
              >
                Add User
              </Button>
            </Grid>
            <Alert open={this.state.openAlert} handleClose={this.handleClose} content={this.state.alertContent}/>
          </Grid>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
