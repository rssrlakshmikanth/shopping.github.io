import React from "react";
import ListItem from "./ListItem";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";
import SearchBar from "../shared/SearchBar";
import Loader from "../shared/Loader";
import AlertBar from "../shared/AlertBar";

const ShoppingList = (props) => {
  return (
    <div className="shoppingList-container">
      {props.state.showLoader ? (
        <Loader show={props.state.showLoader} />
      ) : (
        <Container maxWidth="xl">
          <Grid className="shopping-grid">
            <SearchBar state={props.state} dispatch={props.dispatch} />
            {props.state.displayList.length === 0 ? (
              <AlertBar message="No Records Found! Try with a diffent Word" />
            ) : (
              <Grid item xs={12}>
                <Grid container justifyContent="space-around">
                  {props.state.displayList.map((value) => (
                    <Grid key={value.productId} padding={10}>
                      <ListItem dispatch={props.dispatch} data={value} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default ShoppingList;
