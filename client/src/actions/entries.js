import { entriesByDate } from '../utils.js';

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const SET_DISPLAY_MONTH = 'SET_DISPLAY_MONTH';
export const SET_ACTIVE_MONTH = 'SET_ACTIVE_MONTH';

export function fetchEntries() {
  const config = {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('reflective_token')
    }
  };

  return dispatch => {
    dispatch(requestEntries());
    return fetch('/entries', config)
      .then(response => response.json())
      .then(responseJSON => {
        const byDate = entriesByDate(responseJSON.entries);
        dispatch(receiveEntries(responseJSON.entries, byDate));
      })
      .catch(error => console.error(error))
  }
}

function receiveEntries(entries, byDate) {
  return {
    type: RECEIVE_ENTRIES,
    entries: entries,
    byDate: byDate,
    receivedAt: Date.now(),
    isFetching: false
  }
}

function requestEntries() {
  return {
    type: REQUEST_ENTRIES,
    isFetching: true
  }
}

export function setDisplayMonth(month) {
  return {
    type: SET_DISPLAY_MONTH,
    month: month
  }
}

export function setActiveMonth(mon) {
  return {
    type: SET_ACTIVE_MONTH,
    month: mon
  };
}
