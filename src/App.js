import React from 'react';
import { AddCommand, Command } from './components'
import { Divider, Grid } from '@material-ui/core'


class App extends React.Component {

  render() {
    return (
      <Grid container spacing={3} direction="column">
        <AddCommand />
        <Grid item container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}><Divider light /></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Command />
      </Grid>
    );
  }
}
export default App;