import React from 'react';
import { Chart } from "react-charts";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

class Statisitcs extends React.Component{
    render () {
        
        return (
          <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="display1">Chart 1</Typography>
              </Grid>
              <Grid item xs={12}>
              <Card style={{
                width: "400px",
                height: "300px"
              }}>
              <Chart
              data={[
                {
                  label: "Series 1",
                  data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                },
                {
                  label: "Series 2",
                  data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                }
              ]}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
            />
          </Card>
            </Grid>
            </Grid>
            
            </Grid>
            <Grid item xs={12} md={6}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="display1">Chart 2</Typography>
              </Grid>
              <Grid item xs={12}>
              <Card style={{
                width: "400px",
                height: "300px"
              }}>
              <Chart
              data={[
                {
                  label: "Series 1",
                  data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                },
                {
                  label: "Series 2",
                  data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                }
              ]}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
            />
          </Card>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
        )
    }
}

export default Statisitcs;