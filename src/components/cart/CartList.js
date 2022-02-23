import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { ACTION_TYPES } from "../../helpers/constants";
const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});

export default function CartList(props) {
  const classes = useStyles();
  console.log("cartlistprops", props);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>

            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.state.selectedItems.map((item) => (
            <TableRow key={item.productId}>
              <TableCell component="th" scope="row">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={item.isSelected}
                      onChange={(e) =>
                        props.dispatch({
                          type: ACTION_TYPES.TOGGLE_TO_CART,
                          id: item.productId,
                        })
                      }
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label={item.productName}
                />
              </TableCell>

              <TableCell align="center">
                <div>
                  <Button
                    aria-label="reduce"
                    disabled={item.count <= 0}
                    onClick={(e) =>
                      props.dispatch({
                        type: ACTION_TYPES.DECREMENT,
                        id: item.productId,
                      })
                    }
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  {item.count}
                  <Button
                    aria-label="increase"
                    onClick={(e) =>
                      props.dispatch({
                        type: ACTION_TYPES.INCREMENT,
                        id: item.productId,
                      })
                    }
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
