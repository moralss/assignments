import * as actions from "../actionTypes";

export function clearSearchResults() {
  return {
    type: actions.CLEAR_SEARCH_RESULTS,
    payload: []
  };
}
