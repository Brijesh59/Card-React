import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton'; 
import Icon from '@material-ui/core/Icon'; 

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 275,
    borderLeft: "10px solid orange"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    marginLeft: "1.5em"
  },
  value: {
    fontSize: 14
  },
  btn: {
    cursor: "pointer",
    fontSize: 14
  },
  addStudent: {}
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <IconButton  style={{ position: "absolute", right: "0", background:'green', marginRight:'0.5em', marginTop:'0.1em' }}>
        <Icon className={classes.iconHover} style={{ fontSize: 15, color:"#fff" }}>
          edit
        </Icon>
      </IconButton>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4} style={{ marginTop: "10px" }}>
            <Typography className={classes.title} color="textSecondary">
              Class
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ marginTop: "10px" }}>
            <Typography className={classes.value} color="textSecondary">
              12
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.title} color="textSecondary">
              Section
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.value} color="textSecondary">
              A
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.title} color="textSecondary">
              Subject Teacher
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.value} color="textSecondary">
              Naman Singh
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={4} style={{ marginBottom: "10px" }}>
            <Typography className={classes.title} color="textSecondary">
              Total Students
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ marginBottom: "10px" }}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Typography className={classes.value} color="textSecondary">
                  45
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.btn} color="secondary">
                  ADD
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
