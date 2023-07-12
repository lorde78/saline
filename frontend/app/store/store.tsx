import {createStore} from "@reduxjs/toolkit";
import {RootReducter} from "../reducer/rootReducter";

export const Store = createStore(RootReducter);