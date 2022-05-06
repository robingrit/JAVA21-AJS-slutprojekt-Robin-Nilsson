import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";


import logo from "../../image/cart.png";
import useStyles from "./styles";

const NavBar = ({ cartItems, changeC }) => {
  function clicked() {
    changeC();
    
  }
  const classes = useStyles();
  
  return (
    <>
      <AppBar position="relative" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
           

            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            Robins Shop
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton
              onClick={clicked}
              
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
