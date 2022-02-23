export const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD_ITEMS: "ADD_ITEMS",
  TOGGLE_TO_CART: "TOGGLE_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  UPDATE_SEARCH: "UPDATE_SEARCH",
  API_CALL_FAILED: "API_CALL_FAILED",
};
export class Item {
  constructor(response) {
    this.productName = response.title;
    this.desc = response.description;
    this.count = 1;
    this.isSelected = false;
    this.image = response.image;
    this.productId = response.id;
    this.price = response.price;
    this.category = response.category;
  }
}
