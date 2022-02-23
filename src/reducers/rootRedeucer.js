import { ACTION_TYPES, Item } from "./../helpers/constants";
export const intialState = {
  count: 0,
  masterListArray: [],
  displayList: [],
  selectedItems: [],
  searchString: "",
  showLoader: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEMS: {
      const finalArray = action.items.map((item) => {
        return new Item(item);
      });
      return {
        ...state,
        showLoader: false,
        masterListArray: [...state.masterListArray, ...finalArray],
        displayList: [...state.masterListArray, ...finalArray],
      };
    }
    case ACTION_TYPES.API_CALL_FAILED: {
      return {
        ...state,
        showLoader: false,
      };
    }
    case ACTION_TYPES.INCREMENT: {
      const finalArray = state.masterListArray.map((item) => {
        if (item.productId === action.id) {
          item.count++;
        }
        return item;
      });
      return {
        ...state,
        masterListArray: finalArray,
        displayList: filterSerchedDevices(finalArray, state.searchString),
      };
    }
    case ACTION_TYPES.DECREMENT: {
      const finalArray = state.masterListArray.map((item) => {
        if (item.productId === action.id) {
          item.count--;
        }
        return item;
      });
      return {
        ...state,
        masterListArray: finalArray,
        displayList: filterSerchedDevices(finalArray, state.searchString),
      };
    }
    case ACTION_TYPES.TOGGLE_TO_CART: {
      const finalArray = state.masterListArray.map((item) => {
        if (item.productId === action.id) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
      return {
        ...state,
        masterListArray: finalArray,
        displayList: filterSerchedDevices(finalArray, state.searchString),
      };
    }
    case ACTION_TYPES.UPDATE_CART: {
      const finalArray = state.masterListArray.filter(
        (item) => item.isSelected
      );
      return {
        ...state,
        selectedItems: finalArray,
      };
    }
    case ACTION_TYPES.UPDATE_SEARCH: {
      return {
        ...state,
        searchString: action.value,
        displayList: filterSerchedDevices(state.masterListArray, action.value),
      };
    }

    default:
      return state;
  }
};

function filterSerchedDevices(masterArray, searchString) {
  let filterdArray;
  if (searchString === "") {
    filterdArray = [...masterArray];
  } else {
    const searchvalue = searchString.toLowerCase();
    filterdArray = masterArray.filter((item) => {
      return (
        item.productName.toLowerCase().includes(searchvalue) ||
        item.desc.toLowerCase().includes(searchvalue) ||
        item.category.toLowerCase().includes(searchvalue)
      );
    });
  }

  return filterdArray;
}
