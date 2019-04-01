import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
// import GridList from "@material-ui/core/GridList";
import View from "@material-ui/icons/RemoveRedEye";
import Edit from "@material-ui/icons/Edit";
import Delete from './DeleteUser/DeleteUser.jsx';
import axios from 'axios';
const styles = theme => ({
  card: {
    display: 'flex',
    width:'70vh'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    // paddingLeft: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
  },
});



class SimpleTable extends React.Component {

 constructor(props){
   super(props);
   this.state={
     data:{}
   }
 }

  componentWillMount(){
  axios.get('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/users',{
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
        this.setState({
                 data:res.data.users
               })
      }
    })
    .catch(error => {
      alert('Internal Server error');
    });        
   }    

  render(){
    const { classes } = this.props;
  return (
      <Grid container spacing={24}>
      {Object.values(this.state.data).map((emp, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
            <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                {emp.displayname}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {emp.email}, {emp.phoneno}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {emp.title}, {emp.hospital}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {emp.groupno}
                </Typography>
              </CardContent>
              </div>
              <div className={classes.control}>
                <IconButton aria-label="View Detaials" onClick={()=>this.props.history.push('/view-employee/'+emp.userid)}>
                  <View/>
                </IconButton>
                <IconButton aria-label="Edit" onClick={()=>this.props.history.push('/edit-employee/'+emp.userid)}>
                  <Edit/>
                </IconButton>
                  <Delete id={emp.userid} data={this.state.data}/>
              </div>
              <CardMedia
              className={classes.cover}
              image={emp.url}
              title="Live from space album cover"
            />
          </Card>
          </Grid>
          ))}
     </Grid>
  );
}
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
