export enum ActionTypes {
  FETCH_NEW_TIME = "FETCH_NEW_TIME",
  RESET_TIME = "RESET_TIME",
}

interface FetchNewTimeAction {
  type: ActionTypes.FETCH_NEW_TIME;
  payload: number;
}

interface ResetTimeAction {
  type: ActionTypes.RESET_TIME;
}
export const fetchNewTime = () => ({
    type: ActionTypes.FETCH_NEW_TIME,
    payload: Date.now()
   });

export type ExampleAction = FetchNewTimeAction | ResetTimeAction;
