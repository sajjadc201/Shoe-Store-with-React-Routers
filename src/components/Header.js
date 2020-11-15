import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(30),
  },
  title: {
    flexGrow: 0.1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src="/icon.jpg" alt="shoe-icon" className="shoeicon" />
          </IconButton>
          <NavLink to="/" className="makeStyles-title-3">
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </NavLink>
          <NavLink to="/men" className="makeStyles-title-3">
            <Typography variant="h6" className={classes.title}>
              Men
            </Typography>
          </NavLink>
          <NavLink to="/women" className="makeStyles-title-3">
            <Typography variant="h6" className={classes.title}>
              Women
            </Typography>
          </NavLink>
          <NavLink to="/kids" className="makeStyles-title-3">
            <Typography variant="h6" className={classes.title}>
              Kids
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};
