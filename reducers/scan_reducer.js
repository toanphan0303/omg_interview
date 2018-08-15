import {
  SUCCESSFUL_FETCH
} from '../actions/types';

const INIATIAL_STATE = {};

export default function (state = INIATIAL_STATE, action) {
  switch (action.type) {
    case SUCCESSFUL_FETCH:
      return action.payload;
    default:
      return state;
  }
}
