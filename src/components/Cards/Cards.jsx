import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
 import cx from 'classnames';
 import styles from "./Cards.modules.css";
import CountUp from "react-countup";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="container" >
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}  xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}  className="card recovered" >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5"><CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            seperator=","
          /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of cases recovered from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}  className="card deaths" >

          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5"><CountUp
            start={0}
            end={deaths.value}
            duration={2.5}
            seperator=","
          /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths caused from COVID-19
            </Typography>
          </CardContent>
         
        </Grid>
      </Grid>
      <style dangerouslySetInnerHTML={{__html: `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
      }
      
      .card {
        margin: 2% 2% !important;
      }
      
      .infected {
        border-bottom: 10px solid rgba(0, 0, 255, 0.5);
      }
      
      .recovered{
        border-bottom: 10px solid rgba(0, 255, 0, 0.5);
      }
      
      .deaths{
        border-bottom: 10px solid rgba(255, 0, 0, 0.5);
      }
    `}} />
    </div>
  );
};
export default Cards;
