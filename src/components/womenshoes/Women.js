import React from "react";
import womenshoestore from "../../womenshoestore.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    marginRight: "20px",
    width: "70%",
    float: "right",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export const Women = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(womenshoestore).map((val) => {
          const womenShoesDetail = womenshoestore[val];
          return (
            <Grid item xs={6} sm={4} key={val}>
              <Paper className={classes.paper}>
                <Link
                  to={val}
                  style={{ textDecoration: "none", color: "none" }}
                >
                  <CardMedia
                    className={classes.media}
                    image={womenShoesDetail.img}
                    title={womenShoesDetail.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {womenShoesDetail.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
