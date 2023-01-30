/** @format */

import { SET_PROJECT } from "../action/index.js"

const initialState = {
  selectedProject: null,
}
export const setProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      }

    default:
      return state
  }
}
