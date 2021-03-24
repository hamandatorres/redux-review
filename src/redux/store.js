import { createStore } from 'redux'
import movieReducer from './movieReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'



let store = createStore(movieReducer, devToolsEnhancer())


export default store