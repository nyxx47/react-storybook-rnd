import { OPEN_OPTIONS, CLOSE_OPTIONS, IS_CHECKED } from "./constants";

// Action creator
export const open = () => ({type: OPEN_OPTIONS})
export const close = () => ({type: CLOSE_OPTIONS})
export const isChecked = option => ({type: IS_CHECKED, payload: option})