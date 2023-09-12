import {createStore} from "@reduxjs/toolkit";
import {RootReducer} from "~/reducer/rootReducter";

export const Store = createStore(RootReducer);