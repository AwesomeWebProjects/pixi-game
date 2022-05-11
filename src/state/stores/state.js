import { createReducer } from '../create-reducer'

class State {
  constructor(options = {}) {
    const { id = '', language = '' } = options

    this.id = id
    this.language = language
  }

  static UPDATE_STATE(state, payload = {}) {
    state = { ...state, ...payload }

    return state
  }

  static LOAD_STATE(state, payload = {}) {
    if ('id' in payload) {
      const { id, language } = payload
      return new State({ id, language })
    }

    return state
  }

  static CLEAR_STATE() {
    return new State()
  }
}

export const stateReducer = createReducer(State)
