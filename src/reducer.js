export const initialState = {
basket: [
  {
  id:"12321341",
  title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
  price:11.96,
  rating:5,
  image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
},
],
user: null,
};

const reducer = (state, action) =>{ 
  console.log(action);
    switch(action.type){

        case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        //logic for adding item to basket

        case 'REMOVE_FROM_BASKET':
        return {state}
         //logic for removing item from basket
        default:
        return state;

    }
};

export default reducer;

// 