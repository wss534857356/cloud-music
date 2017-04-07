
import { createAction } from 'redux-actions'

export const addPlaylist = createAction('add playlist')
export const deletePlaylist = createAction('delete playlist')
export const replacePlaylist = createAction('replace playlist')
export const clearPlaylist = createAction('clear playlist')
export const savePlaylist = createAction('save playlist')