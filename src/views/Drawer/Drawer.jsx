import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Grid from '@material-ui/core/Grid';
import Billing from '../Billing/Billing.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import AddUsers from '../Users/AddUsers/AddUsers.jsx';
import AllUsers from '../Users/AllUsers/AllUsers.jsx';
import RequestedUsers from '../Users/RequestedUsers/RequestedUsers.jsx';

const drawerWidth = 240;

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
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: true,
    selectedIndex: 0,
    openList: false,
    display:<AddUsers/>,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

//   handleListItemClick = (event, index) => {
//     this.setState({ selectedIndex: index });
//   };

  handleClickUser = () => {
    this.setState(state => ({ openList: !state.openList }));
  };

  displayStatistics = (event, index) => {
    this.setState({
        display:<Statistics/>,
        selectedIndex: index 
    })
}

  displayBilling = (event, index) => {
      this.setState({
            display:<Billing/>,
            selectedIndex: index 
      })
  }

  displayAddUsers = (event,index) => {
    this.setState({
      
        display:<Grid item xs={12} md={12}>
                <AddUsers/>,
                </Grid>,
        selectedIndex: index 
     })
  }

  
  displayAllUsers = (event,index) => {
    this.setState({
        display:
        <Grid item xs={5} md={12}>
        <AllUsers history={this.props.history}/>
        </Grid>,
        selectedIndex: index 
     })
  }

  
  displayRequestedUsers = (event,index) => {
    this.setState({
        display:<RequestedUsers/>,
        selectedIndex: index 
     })
  }
  

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
              
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
              KeenSuperAdmin
            </Typography>
            <Button color='inherit' onClick={()=>this.props.history.push('/')}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
          <Typography variant="h6" color="inherit" noWrap>
              SuperAdmin
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          {/* <ListItem
            button
            selected={this.state.selectedIndex === 0}
            onClick={event => this.displayStatistics(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem> */}
          {/* <ListItem
            button
            selected={this.state.selectedIndex === 1}
            onClick={event => this.displayBilling(event, 1)}
          >
             <ListItemIcon>
              <InboxIcon />
            </ListItemIcon> 
            <ListItemText primary="Billing" />
          </ListItem> */}
         
          {/* <ListItem button onClick={this.handleClickUser}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Users" />
          {this.state.openList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openList} timeout="auto" unmountOnExit> */}
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}
            selected={this.state.selectedIndex === 2}
            onClick={event => this.displayAddUsers(event, 2)}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Add Users" />
            </ListItem>
            <ListItem button className={classes.nested}
            selected={this.state.selectedIndex === 3}
            onClick={event => this.displayAllUsers(event, 3)}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="All Users" />
            </ListItem>
            {/* <ListItem button className={classes.nested}
            selected={this.state.selectedIndex === 4}
            onClick={event => this.displayRequestedUsers(event, 4)}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Requested Users" />
            </ListItem> */}
          </List>
        {/* </Collapse> */}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.display}
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
