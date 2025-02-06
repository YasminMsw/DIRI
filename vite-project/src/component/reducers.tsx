import { Action } from "redux";
import { ExampleAction, ActionTypes } from "./types";

export interface ExampleState {
  currentTime: number; // timestamp
}

export const initialState: ExampleState = {
  currentTime: Date.now(),
};

export const rootReducer = (
  state: ExampleState = initialState,
  action: ExampleAction
): ExampleState => {
  switch (action.type) {
    case ActionTypes.FETCH_NEW_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};
