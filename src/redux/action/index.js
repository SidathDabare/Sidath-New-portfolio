/** @format */
export const SET_COLOR = "SET_COLOR"
export const SET_PROJECT = "SET_PROJECT"

export const setColor = (data) => {
  return {
    type: SET_COLOR,
    payload: data,
  }
}
export const selectedProject = (data) => {
  return {
    type: SET_PROJECT,
    payload: data,
  }
}
