import React from 'react';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import { Grid } from "@material-ui/core";

class MainLandingPage extends React.Component{
    render(){
        return (
            <>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Filter />
                </Grid>

                <Grid item xs={9}>
                    <div className="border-1"></div>
                </Grid>
                
            </Grid>
            </>
        )
      
    }
}


export default MainLandingPage;