import { combineReducers, createStore } from 'redux'
import { styleReducer } from './stores/style'
import { stateReducer } from './stores/state'
import { routeReducer } from './stores/route'

/**
 * Create & Combine redux stores
 */
const store = createStore(
  combineReducers({
    style: styleReducer,
    route: routeReducer,
    state: stateReducer,
  }),
)

export { store }
