/**
 * Check if actions exists inside of classes and execute him
 * @param { class } ReducerClass Receive a reducer class
 */
function createReducer(ReducerClass) {
  return (state, payload) => {
    if (!state) {
      return new ReducerClass()
    }

    if (payload.type in ReducerClass) {
      return ReducerClass[payload.type](state, payload.data)
    }

    return state
  }
}

export { createReducer }
