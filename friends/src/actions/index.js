import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/login', creds)
    .then(({ data: { payload } }) => {
      localStorage.setItem('token', payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get('/friends')
    .then(({ data }) =>
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: data })
    )
    .catch(({ response: { data: { error } } }) => {
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error });
    });
};

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const addFriend = payload => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axiosWithAuth()
    .post('/friends', payload)
    .then(({ data }) => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: data });
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: error });
    });
};

export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

export const updateFriend = (id, payload) => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  axiosWithAuth()
    .put(`/friends/${id}`, payload)
    .then(({ data }) => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: data });
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch({ type: UPDATE_FRIEND_FAILURE, payload: error });
    });
};

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(({ data }) => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: data });
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: error });
    });
};
