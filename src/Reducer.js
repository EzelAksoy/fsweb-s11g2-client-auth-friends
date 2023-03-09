import React from "react";
import { Switch } from "react-router-dom";
import { ADDFRIEND, FRIENDSLIST, LOGIN } from "./Action";

const initialState = {
  loginForm: { username: "workintech", password: "wecandoit" },
  token: "",
  friendslist: [],
  log: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        log: true,
        token: action.payload,
      };
    case FRIENDSLIST:
      return { ...state, friendslist: action.payload };
    case ADDFRIEND:
      return { ...state, friendslist: action.payload };
    default:
      return state;
  }
};

export default reducer;
