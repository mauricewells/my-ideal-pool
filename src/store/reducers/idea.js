import { createAction, createReducer } from '@reduxjs/toolkit';

import {
  GET_IDEAS_REQUEST,
  CREATE_IDEA_REQUEST,
  UPDATE_IDEA_REQUEST,
  DELETE_IDEA_REQUEST,
} from '../types';
import { requestSuccess, requestFail, requestPending } from 'src/utils/api';


/**
 * Initial state
 */
const initialState = {
  ideas: [],
  idea: null,
  status: 'INIT',
  error: null,
};

/**
 * Crate actions
 */
export const getIdeas = createAction(GET_IDEAS_REQUEST);
export const createIdea = createAction(CREATE_IDEA_REQUEST);
export const updateIdea = createAction(UPDATE_IDEA_REQUEST);
export const deleteIdea = createAction(DELETE_IDEA_REQUEST);

/**
 * Create reducers
 */
export default createReducer(initialState, {
  [requestSuccess(GET_IDEAS_REQUEST)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_IDEAS_REQUEST),
    ideas: payload,
  }),

  [requestPending(GET_IDEAS_REQUEST)]: (state) => ({
    ...state,
    status: requestPending(GET_IDEAS_REQUEST),
  }),

  [requestFail(GET_IDEAS_REQUEST)]: (state, { payload }) => ({
    ...state,
    ideas: [],
    status: requestFail(GET_IDEAS_REQUEST),
    error: payload.error,
  }),
});