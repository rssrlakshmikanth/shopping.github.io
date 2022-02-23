import React from "react";
import Accordions from "./Accordions";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import Container from "@mui/material/Container";

const CartPage = (props) => {
  return (
    <div className="cart-container">
      <Container maxWidth="xl">
        {props.state.selectedItems.length !== 0 ? (
          <Accordions state={props.state} dispatch={props.dispatch} />
        ) : (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="info">
              No item Selected Please select spme thing and come back
            </Alert>
          </Stack>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
