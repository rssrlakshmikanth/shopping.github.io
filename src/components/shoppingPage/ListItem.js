import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ACTION_TYPES } from "../../helpers/constants";

import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    minHeight: 200,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
  },
  buttonCount: {
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    width: "100%",
    marginBottom: "5px",
  },
  description: {
    height: "4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

function ListItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.image}
          title="Shoping image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.data.productName}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.data.desc}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            $ : {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <div className={classes.buttonCount}>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              Quantity: {props.data.count}
            </Typography>
          </div>
          <div>
            <IconButton
              aria-label="delete"
              disabled={props.data.isSelected}
              onClick={(e) =>
                props.dispatch({
                  type: ACTION_TYPES.INCREMENT,
                  id: props.data.productId,
                })
              }
            >
              <AddIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              disabled={props.data.count <= 1 || props.data.isSelected}
              onClick={(e) =>
                props.dispatch({
                  type: ACTION_TYPES.DECREMENT,
                  id: props.data.productId,
                })
              }
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </div>
        <Button
          fullWidth
          variant="contained"
          color={!props.data.isSelected ? "primary" : "secondary"}
          onClick={(e) =>
            props.dispatch({
              type: ACTION_TYPES.TOGGLE_TO_CART,
              id: props.data.productId,
            })
          }
          startIcon={<AddShoppingCartIcon />}
        >
          {!props.data.isSelected ? "Add to Cart" : "Remove from Cart"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ListItem;
