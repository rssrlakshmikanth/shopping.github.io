import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./components/cart/CartPage";
import ShoppingList from "./components/shoppingPage/ShoppingList";
import NavBar from "./components/shared/NavBar";
import { reducer, intialState } from "./reducers/rootRedeucer";
import { ACTION_TYPES } from "./helpers/constants";

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [isHome, setCurrentPage] = React.useState(true);
  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          dispatch({ type: ACTION_TYPES.ADD_ITEMS, items: json });
        })
        .catch(() => {
          dispatch({ type: ACTION_TYPES.API_CALL_FAILED });
        });
    } catch (e) {
      console.log("failed to fetch data", e);
      dispatch({ type: ACTION_TYPES.API_CALL_FAILED });
    }
  }, []);
  useEffect(() => {
    dispatch({ type: ACTION_TYPES.UPDATE_CART });
  }, [isHome]);
  return (
    <Router>
      <div>
        <NavBar isHome={isHome} setCurrentPage={setCurrentPage} />
        <Switch>
          <Route path="/cart" exact>
            <CartPage state={state} dispatch={dispatch} />
          </Route>
          <Route path="/" exact>
            <ShoppingList state={state} dispatch={dispatch} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
