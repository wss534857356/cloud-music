
import { createStore, applyMiddleware } from 'redux'

import { logger, thunk, localStorage } from '../middleware'
import rootReducer from '../reducers'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    localStorage,
    logger
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRoducer = require('../reducers')
      store.replaceReducer(nextRoducer)
    })
  }
  return store
}