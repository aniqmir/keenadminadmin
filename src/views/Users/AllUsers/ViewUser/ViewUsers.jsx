import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import axios from 'axios';

  const styles = {
    card: {
      width:300,
    },
    media: {
      height: 250,
    },
  };

  const alignCenter = {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

class ViewUsers extends React.Component{

    constructor(props){
        super(props)
        console.log(this.props.match.params.id)
        this.state={
          data: {},
        }
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
          console.log(usera.displayname);
          self.setState({
                   data:usera,
                 })
        }
      })
      .catch(error => {
        alert('Internal Server error');
      });           
  }

    render() {
        const { classes } = this.props;
        const emp = this.state.data;
       if(this.state.data.displayname)
        return (
              <Grid container spacing={24}>
              {
              //    {console.log('here emp', emp);}}
                
                //{const emp : this.state.data}
                  // Object.values(this.state.data).map((emp,key)=>{
                  // if(this.props.match.params.id===key.toString()){
                      // return (
                          <Grid item xs={12} style={alignCenter}>
                          <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={emp.url}
                            title="image"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              <strong>Name:{emp.displayname.toUpperCase()}</strong>
                            </Typography>
                            <Typography gutterBottom component="p">
                              <strong>First Name:</strong>{emp.firstname}
                            </Typography>
                            <Typography gutterBottom component="p">
                              <strong>Last Name:</strong>{emp.lastname}
                            </Typography>
                            <Typography gutterBottom component="p">
                              <strong>Display Name:</strong>{emp.displayname}
                            </Typography>
                            <Typography component="p">
                              <strong>Email:</strong>{emp.email}
                            </Typography>
                            <Typography component="p">
                              <strong>Phone Number:</strong>{emp.phoneno}
                            </Typography>
                            <Typography component="p" >
                              <strong>Title:</strong>{emp.title}
                            </Typography>
                            <Typography component="p">
                              <strong>Hospital:</strong>{emp.hospital}
                            </Typography>
                          </CardContent>
                          <CardActions>
                          <Button size="medium" color="primary" variant="contained" onClick={()=>this.props.history.push('/home')}>
                          Go Back
                          </Button>
                           </CardActions>
                      </Card>
                      </Grid>
                         //) 
                  // }
                  // else{
                  //     return null
                  // }
                    
                  // })
              }
              </Grid>
        )
        else return null;
    }
}

ViewUsers.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ViewUsers);