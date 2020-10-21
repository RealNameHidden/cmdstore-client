import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import { addCommand } from '../../api';


const useStyles = makeStyles({
    root: {
        marginTop: '10px',
    },
});



const AddCommand = () => {
    const [values, setValues] = useState({
        name: '',
        command: '',
    });
    const handleChangeForm = event => {
        if (event.target.id === 'name') {
            setValues({ ...values, name: event.target.value });
            console.log(values)
        }
        if (event.target.id === 'command') {
            setValues({ ...values, command: event.target.value });
        }
        console.log(values)
    };
    const handleAdd = () => {
        if(values.name!=='' && values.command!==''){
        addCommand(values)
        document.getElementById("name").value=''
        document.getElementById("command").value=''
        window.location.reload()}
        
    }



    const classes = useStyles();
    return (

        <Grid item container spacing={1} alignContent="center">
            <Grid item xs={12} sm={2}></Grid>

            <Grid item xs={12} sm={2}>
                <TextField id="name" label="Command name" variant="filled" size="small" margin="dense" fullWidth onChange={handleChangeForm} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="command" label="Command" variant="filled" size="small" margin="dense" fullWidth onChange={handleChangeForm} />
            </Grid>

            <Grid item xs={12} sm={1}>
                <Button variant="contained" classes={{ root: classes.root }} color="primary" onClick={handleAdd}>Submit</Button>
            </Grid>

            <Grid item xs={6} sm={2}></Grid>
        </Grid>

    );
}
export default AddCommand;
