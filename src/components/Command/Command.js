import React, { useState, useEffect } from 'react';

// import styles from './AddCommands.module.css'
import { IconButton, Card, CardContent, CardActions, Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { fetchAllData, removeCommand } from '../../api';


const Command = () => {
    // data = Array.from(data).reverse()
    const [commands, setCommands] = useState([])

    useEffect(() => {
        async function fetchData() { return await fetchAllData(); }
        fetchData().then((fetchedData) => {
            setCommands(Array.from(fetchedData).reverse())
        }
        );
    }, [])

    useEffect(() => {}, [commands])

    const handleDelete = (id) => {
        let updatedCommands = commands.filter((i) => i.id != id)
        setCommands(updatedCommands)
        removeCommand(id)
    };

    const handleEdit = () =>{

    }

    const handleCopy = (copyCommand) => {
        navigator.clipboard.writeText(copyCommand).then(() => {
            /* clipboard successfully set */
            console.log("copy sucessfull")
        });
    }
    const useStyles = makeStyles({
        root: {
            marginBottom: '10px',
        },
    });
    const classes = useStyles();
    return (
        <Grid item container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                {
                    commands.map(item => {
                        return (<Card key={item.id} classes={{ root: classes.root }}>
                            <CardContent>
                                <Typography variant="h5" component="h4">
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" component="p" display="block">
                                    {item.command}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="copy" fontSize="small" color="primary" onClick={() => handleCopy(item.command)} >
                                    <FileCopyIcon />
                                </IconButton>
                                <IconButton aria-label="edit" fontSize="small" >
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" fontSize="small" onClick={() => handleDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>)
                    })
                }
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}
export default Command;