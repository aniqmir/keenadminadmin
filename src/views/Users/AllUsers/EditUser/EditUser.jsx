import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import TextField from '@material-ui/core/TextField';


import SettingsIcon from '@material-ui/icons/Settings';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import {storage} from '../../../../firebase/firebase.js'

import CancelDialog from './CancelDialog.jsx';

const drawerWidth = 300;


const styles = theme => ({
  root: {
    display: 'flex',
    paddingLeft:'15%',
    paddingRight:'15%'
  },
  grow:{
    flexGrow:1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: true,
    error:false,
    formValid:false,
    username: "",
    displayname: "",
    email: "",
    firstname: "",
    lastname: "",
    phoneno: "",
    callback: "",
    title: "",
    groupno: "",
    password: "",
    confirmpass: "",
    pincode: "",
    authcode: "",
    hospital: "",
    url: "",
    id: "",
    load: false,
    image: null,
    //data:{},
    cancelOpen:false,
    cancel:false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
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

  editUser = () => {
    console.log('here',this.state);
    const data = JSON.stringify(this.state);
    axios.put('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/user', data,{
      headers: {
        'Content-Type': 'application/json',
     }
    }).then(res => {
      JSON.stringify(res);
      //Check if response reture suceess: true or false
      if (res.data.success === false) {
        alert(res.data.message);
      } 
      else {
        this.props.history.push('/home')
      }
    })
    .catch(error => {
      alert('Internal Server error');
    });        
   } 

  cancelHandleClickOpen = () => {
    this.setState({
      cancelOpen:true
    })
  }
  cancelHandleClose = () => {
    this.setState({
      cancelOpen:false
    })
  }
  componentWillMount() {
    const data = {'id': this.props.match.params.id}
      const self = this;
      axios.post('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/user',data,{
        headers: {
          'Content-Type': 'application/json',
       }
      }).then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          alert(res.data.message);
        } 
        else {
          const usera = JSON.parse(res.data.user);
          console.log(usera.userid);
          self.setState({
            authcode: usera.authcode,
            callback: usera.callback,
            password: usera.password,
            displayname: usera.displayname,
            email: usera.email,
            firstname: usera.firstname,
            groupno: usera.groupno,
            hospital: usera.hospital,
            lastname: usera.lastname,
            phoneno: usera.phoneno,
            pincode: usera.pincode,
            title: usera.title,
            username: usera.username,
            id: usera.userid,
            url: usera.url,
            load: true
            })
        }
      })
      .catch(error => {
        alert('Internal Server error');
      });
    // var ref = firebase.database().ref(`user_admin/`);  
    // var self = this;       
    // ref.once('value')
    // .then(function (snap) {
    //     let temp = snap.val()
    //     if(temp){
    //       console.log(temp)
    //       console.log(Object.values(temp))
    //       let x = Object.values(temp)
    //       let y = x[self.props.match.params.id]
    //       self.setState({
    //         data:temp,
    //         username:y.username,
    //         displayname:y.displayname,
    //         email:y.email,
    //         firstname:y.firstname,
    //         lastname:y.lastname,
    //         phoneno:y.phoneno,
    //         callback:y.callback,
    //         title:y.title,
    //         groupno:y.groupno,
    //         password:y.password,
    //         confirmpass:y.confirmpass,
    //         pincode:y.pincode,
    //         authcode:y.authcode,
    //         hospital:y.hospital,
    //         url:y.url,
    //       })
    //     }
    // });
}
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    if(this.state.load)
    return (
      <div className={classes.root}>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
           
           <Grid container spacing={0}>
                <Grid item xs={12} md={10}>
                    <Typography variant="headline" component="h1">
                        <strong>Edit User</strong>
                    </Typography>
                    
                </Grid>

                <Grid item xs={6} md={2} style={{paddingBottom:'1%'}}>
                {/* <Grid item xs={12} style={{textAlign:'center',paddingTop:'2.5%'}}> */}
                      <Button variant="contained" color="primary" onClick={()=>this.props.history.push('/home')}>Go Back</Button>
                      {/* </Grid>  */}
                </Grid>

              <Grid item xs={12} style={{paddingBottom:'3%'}}><Divider/></Grid>
              {
              //  Object.values(this.state.data).map((type,key)=>{
              //      if(this.props.match.params.id===key.toString()){
              //          return (
                        <div>
                        <Grid item xs={12} md={12}>
                        <Grid container spacing={16} direction="column" justify="center" alignContent="center" alignItems="center">
                            <Grid item xs={12}>
                            <Avatar alt="Remy Sharp" src={this.state.url} className={classes.bigAvatar} />
                            </Grid>
                            <Grid item xs={12}>
                            <input type="file" onChange={this.handleChangeImage}/>
                            </Grid>
                            </Grid>
                      </Grid>
      
                      <Grid item xs={12} md={12}>
                          <Grid container spacing={8}>
      
                              <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-username-input"
                                  label="Username"
                                  name="Username"
                                  margin="dense"
                                  variant="outlined"
                                  value={this.state.username}
                                  fullWidth
                                  onChange={this.handleChange('username')}
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
                                  fullWidth
                                  onChange={this.handleChange('displayname')}
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
                                  onChange={this.handleChange('email')}
                                  fullWidth
                                  />
                              </Grid>
      
                              <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-firstname-input"
                                  label="FirstName"
                                  name="FirstName"
                                  margin="dense"
                                  variant="outlined"
                                  value={this.state.firstname}
                                  onChange={this.handleChange('firstname')}
                                  fullWidth
                                  />
                              </Grid>
      
                              <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-lastname-input"
                                  label="LastName"
                                  name="Username"
                                  margin="dense"
                                  variant="outlined"
                                  value={this.state.lastname}
                                  onChange={this.handleChange('lastname')}
                                  fullWidth
                                  />
                              </Grid>
      
                              <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-number-input"
                                  label="Phone No."
                                  name="Phone No."
                                  margin="dense"
                                  variant="outlined"
                                  value={this.state.phoneno}
                                  onChange={this.handleChange('phoneno')}
                                  fullWidth
                                  />
                              </Grid>
                              <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-number-input"
                                  label="Call Back Phone No."
                                  margin="dense"
                                  variant="outlined"
                                  value={this.state.callback}
                                  onChange={this.handleChange('callback')}
                                  fullWidth
                                  />
                              </Grid>
                          </Grid>
                      </Grid>
                      
                      <Grid item xs={12}>
      
                          <Grid container spacing={8}>
                          <Grid item xs={12} sm={12} md={12}>
                          <TextField
                          id="outlined-status-input"
                          label="Title"
                          name="Title"
                          margin="dense"
                          variant="outlined"
                          value={this.state.title}
                          onChange={this.handleChange('title')}
                          fullWidth
                          />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                          <TextField
                          id="outlined-group-input"
                          label="Group Number"
                          margin="dense"
                          variant="outlined"
                          value={this.state.groupno}
                          onChange={this.handleChange('groupno')}
                          fullWidth
                          />
                          </Grid>
      
                          <Grid item xs={12} sm={12} md={12}>
                          <div style={{paddingTop:'5%'}}>
                          <Typography variant="headline" component="h1"><SettingsIcon fontSize="small"/>Password</Typography>
                         
                          </div>
                          </Grid>
      
                          <Grid item xs={12} md={6}>
                          <Divider/>
                          </Grid>
                          <Grid item xs={12}>
                          <TextField
                              id="outlined-password-input"
                              label="Password"
                              autoComplete="current-password"
                              margin="dense"
                              variant="outlined"
                              fullWidth
                              value={this.state.password}
                              onChange={this.handleChange('password')}
                              />
                          </Grid>   
                          
                          <Grid item xs={12}>
                          {/* <TextField
                              id="outlined-password-input"
                              label="Confirm Password"
                              type="Confirm password"
                              autoComplete="current-password"
                              margin="dense"
                              variant="outlined"
                              fullWidth
                              value={this.state.data.confirmpass}
                              onChange={this.handleChange('confirmpass')}
                              /> */}
                          </Grid>  
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-email-input"
                                  label="Pin Code"
                                  margin="dense"
                                  variant="outlined"
                                  fullWidth
                                  value={this.state.pincode}
                                  onChange={this.handleChange('pincode')}
                                  />
                              </Grid>
                              <Grid item xs={12} sm={12} md={12}>
                                  <TextField
                                  id="outlined-email-input"
                                  label="Auth Code"
                                  margin="dense"
                                  variant="outlined"
                                  fullWidth
                                  value={this.state.authcode}
                                  onChange={this.handleChange('authcode')}
                                  />
                              </Grid>
                      </Grid>     
      
                      <Grid item xs={12} style={{textAlign:'center',paddingTop:'2.5%'}}>
                        <TextField
                          id="outlined-hospital-input"
                          label="Hospital or Clinic"
                          margin="dense"
                          variant="outlined"
                          fullWidth
                          value={this.state.hospital}
                          onChange={this.handleChange('hospital')}
                        />
                      </Grid>    
                      <Grid item xs={12} style={{textAlign:'center',paddingTop:'2.5%'}}>
                      <Button variant="contained" color="primary" style={{width:'75%'}} onClick={()=>this.editUser()}>Save</Button>
                      </Grid> 
                      {/* <Grid item xs={12} style={{textAlign:'center',paddingTop:'2.5%'}}>
                      <Button variant="contained" color="primary" style={{width:'75%'}} onClick={()=>this.cancel()}>Cancel</Button>
                      </Grid>    */}
                      <Grid item xs={12} style={{textAlign:'center',paddingTop:'2.5%'}}>
                      <CancelDialog open={this.state.cancelOpen} handleClose={()=>this.cancelHandleClose()} handleClickOpen={()=>this.cancelHandleClickOpen()} history={this.props.history}/>
                      </Grid> 
                   
                      </div>
                  //      )
                  //  }
                  //  else{
                  //      return null
                  //  }
               
              // })
               
           }
     
           </Grid>
        </main>
      </div>
    );
    else 
    return null
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
