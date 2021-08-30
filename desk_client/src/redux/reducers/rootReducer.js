import { combineReducers } from "redux"
import chatReducer from "./chat/"
import customizer from "./customizer/"
import auth from "./auth/"

const rootReducer = combineReducers({
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth
})

export default rootReducer
