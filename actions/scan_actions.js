import axios from 'axios';
import _ from 'lodash';
import {
  SUCCESSFUL_FETCH,
  ERROR_FETCH
} from './types';

const baseUrl = 'https://l422o3r0o5.execute-api.us-east-1.amazonaws.com/prod/upc';

export const fetchBarCode = (upc) => async (dispatch) => {
  const requestUrl = `${baseUrl}?upc=${upc}`;
  try {
    const { data } = await axios.get(requestUrl);
    const result = data.upc;
    if (data.errorMessage) {
      dispatch({ type: ERROR_FETCH, payload: data })
    } else {
      return !_.isEmpty(result);
    }
  } catch (e) {
    dispatch({ type: ERROR_FETCH, payload: { error: 'fetching upc error' } })
  }
};

export const fetchBarCodes = () => async (dispatch) => {
  const requestUrl = baseUrl + 's';
  try {
    const { data } = await axios.get(requestUrl);
    if (data.errorMessage) {
      dispatch({ type: ERROR_FETCH, payload: data })
    } else {
      dispatch({ type: SUCCESSFUL_FETCH, payload: data });
    }
  } catch (e) {
    dispatch({ type: ERROR_FETCH, payload: { error: 'fetching upcs error' } })
  }
};
