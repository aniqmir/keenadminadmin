import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class Billing extends React.Component{
    render () {

        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                <h1>Billing</h1>
                </Grid>
                <Grid item xs={12}>
                <Divider/>
                </Grid>
                <Grid item xs={12}>
                    <h2>Billing Information</h2>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                        <h1>General Information</h1>
                        </Grid>
                        <Grid item xs={12}>
                        <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Doctor's Name"
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Patients's Name"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Department Name"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Billing Number"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Billing Number"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Billing Number"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                        <h1>Pricing Information</h1>
                        </Grid>
                        <Grid item xs={12}>
                        <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Doctor's Name"
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Patients's Name"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Department Name"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Billing Number"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Billing Number"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        label="Billing Number"
                        margin="dense"
                        variant="outlined"
                        />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{textAlign:'center'}}>
                <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Billing;