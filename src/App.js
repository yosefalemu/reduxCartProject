import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

//import reducers
import reducer from "./reducer";
//import provider
import { Provider } from "react-redux";
//intial store
const intialStore = {
  cart: cartItems,
  total: 30,
  amount: 10,
};

const store = createStore(reducer, intialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
