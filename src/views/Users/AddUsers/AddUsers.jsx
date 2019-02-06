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
                <Grid item xs={6} md={9}>
                    <Typography variant="headline" component="h1">
                        <strong>New User</strong>
                    </Typography>
                    
                </Grid>

                <Grid item xs={6} md={3}>
                 
                </Grid>

              <Grid item xs={12}><Divider/></Grid>
                <Grid item xs={12} md={2}>
                  <Grid container spacing={8} direction="column" justify="center" alignContent="center" alignItems="center">
                      <Grid item xs={12}>
                      <Avatar alt="Remy Sharp" src="https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png" className={classes.bigAvatar} />
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
                    </Grid>
                </Grid>
                
                <Grid item xs={12} md={5}>

                    <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={12}>
                    <TextField
                    id="outlined-status-input"
                    label="Status"
                    name="Status"
                    margin="dense"
                    variant="outlined"
                    // fullWidth
                    />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                    <div style={{paddingTop:'15%'}}>
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
                </Grid>     
                <Grid item xs={12} style={{textAlign:'center'}}>
                <Button variant="contained">Add Button</Button>
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
