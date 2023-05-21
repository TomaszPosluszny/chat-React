import{createStore} from "redux"
import { ReactDOM } from "react"
import { chatReducer } from "./reducers/globalReducer"

const store = createStore(chatReducer)
export default store
