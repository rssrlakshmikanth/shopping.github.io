import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {props.isHome ? "Home" : "Cart"}
        </Typography>

        <Button
          color="primary"
          onClick={() => props.setCurrentPage(!props.isHome)}
        >
          {props.isHome ? (
            <NavLink className="route-buttonCss" to="/cart">
              Cart
            </NavLink>
          ) : (
            <NavLink className="route-buttonCss" to="/">
              Home
            </NavLink>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
