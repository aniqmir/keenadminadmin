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
import Avatar from '@material-ui/core/Avatar';
import awsSettings from '../../../aws-exports';
import Amplify,{API} from 'aws-amplify';
Amplify.configure(awsSettings);


const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
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
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  post = async () => {
    console.log('calling api');
    const response = await API.post('keensuperadmin', '/users', {
      body: {
        username: '1',
        displayname: 'hello amplify!',
        email: 'hello amplify!',
        fname:'Faizan',
        lname:'Ejaz',
        phoneno : '0987656789',
        cbphoneno:'8654567890',
        title:'doctor',
        groupno:'group1',
        password:'6789098',
        pincode:'5678',
        authcode:'8989',
        hospitalclinic:'wow',
      }
    });
    console.log(JSON.stringify(response, null, 2));
  }


  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
           
           <Grid container spacing={0}>
                <Grid item xs={12} md={9}>
                    <Typography variant="headline" component="h1">
                        <strong>New User</strong>
                    </Typography>
                    
                </Grid>

                <Grid item xs={6} md={3}>
                 
                </Grid>

              <Grid item xs={12} style={{paddingBottom:'3%'}}><Divider/></Grid>
                <Grid item xs={12} md={2}>
                  <Grid container spacing={8} direction="column" justify="center" alignContent="center" alignItems="center">
                      <Grid item xs={12}>
                      <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" className={classes.bigAvatar} />
                      </Grid>
                      <Grid item xs={12}>
                        <Button size="small" onClick={()=>console.log("Upload Avatar")}>Upload Avatar</Button>
                      </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Grid container spacing={8}>

                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                            id="outlined-username-input"
                            label="Username"
                            name="Username"
                            margin="dense"
                            variant="outlined"
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
                            // fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                            id="outlined-number-input"
                            label="Call Back Phone No."
                            margin="dense"
                            variant="outlined"
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
                    defaultValue="title,eg MD,DO etc"
                    margin="dense"
                    variant="outlined"
                    // fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                    <TextField
                    id="outlined-group-input"
                    label="Group Number"
                    margin="dense"
                    variant="outlined"
                    // fullWidth
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
                        type="password"
                        autoComplete="current-password"
                        margin="dense"
                        variant="outlined"
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
                        // fullWidth
                        />
                    </Grid>  
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                            <TextField
                            id="outlined-email-input"
                            label="Pin Code"
                            margin="dense"
                            variant="outlined"
                            // fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                            id="outlined-email-input"
                            label="Auth Code"
                            margin="dense"
                            variant="outlined"
                            // fullWidth
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
                  />
                </Grid>    
                <Grid item xs={12} style={{textAlign:'center',paddingTop:'2.5%'}}>
                <Button variant="contained" color="primary" style={{width:'75%'}} onClick={this.post}>Add User</Button>
                </Grid>    
           </Grid>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
