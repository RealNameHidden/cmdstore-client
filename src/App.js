import React from 'react';
import { AddCommand, Command } from './components'
import { Divider, Container, Grid } from '@material-ui/core'
import styles from './App.module.css'
import { fetchAllData} from './api'



class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: []
      }
  }

  async componentDidMount() {
    const fetchedData = await fetchAllData();
    console.log(fetchedData)
    this.setState(() => { return { data: fetchedData } });
}
  // handleCountryChange = async (country) => {
  //     if (country !== "Global") {
  //         const fetchedData = await fetchData(country);
  //         this.setState({ data: fetchedData, country: country })
  //     } else {
  //         this.setState({ country: '' })
  //     }
  // }

  render() {
    // const apidata = this.state.data;
    // const country = this.state.country;
    return (
      <Grid container spacing={3} direction="column">

        <AddCommand />
        <Grid item container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}><Divider light /></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
          <Command data={this.state.data}/>
      </Grid>
    );
  }
}
export default App;