import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  friends: [],
  error: '',
  loggingIn: false,
  fetchingFriends: false,
  deletingFriends: false,
  savingFriends: false,
  updatingFriend: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: payload,
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        error: '',
        fetchingFriends: true,
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: payload,
        fetchingFriends: false,
        error: '',
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: payload,
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        savingFriends: true,
        error: '',
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: payload,
        savingFriends: false,
        error: '',
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        savingFriends: false,
        error: payload,
      };
    case UPDATE_FRIEND_START:
      return {
        ...state,
        updatingFriend: true,
        error: '',
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: payload,
        updatingFriend: false,
        error: '',
      };
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        updatingFriend: false,
        error: payload,
      };
    case DELETE_FRIEND_START:
      return {
        ...state,
        deletingFriends: true,
        error: '',
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: payload,
        deletingFriends: false,
        error: '',
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deletingFriends: false,
        error: payload,
      };
    default:
      return state;
  }
};
