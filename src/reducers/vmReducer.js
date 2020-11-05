export const initialState = [{ virtualState: "Idle" }];

// ACTIONS
export const SET_INITIAL = () => "SET_INITIAL";
export const TOGGLE_VM = () => "TOGGLE_VM";
export const SET_PENDING = () => "SET_PENDING";
export const RESET = () => "RESET";

// REDUCER

export function vmReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL:
      return { ...state, virtualState: action.value };
    case SET_PENDING:
      return { ...state, virtualState: action.value };
    case TOGGLE_VM:
      return { ...state, virtualState: action.value };
    case RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
