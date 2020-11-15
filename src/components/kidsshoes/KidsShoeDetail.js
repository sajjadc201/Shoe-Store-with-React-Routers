import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import kidsshoestore from "../../kidsshoestore.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "200px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 550,
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export function KidsShoeDetail() {
  const { val } = useParams();
  const kidsShoesDetail = kidsshoestore[val];
  const classes = useStyles();
  if (!kidsShoesDetail)
    return <h2 style={{ marginTop: "70px" }}>Product Not Found</h2>;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={kidsShoesDetail.img}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {kidsShoesDetail.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span>Product Details:</span>
                  <br />
                  <li>Kids Perfect Shoe </li>
                  <li>Style: Look Smart</li>
                  <li>Color: Different Colors</li>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Add Cart
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
