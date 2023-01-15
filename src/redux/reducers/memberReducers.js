import {
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_DETAILS_REQUEST,
  MEMBER_DETAILS_SUCCESS,
  MEMBER_DETAILS_FAIL,
  MEMBER_DELETE_REQUEST,
  MEMBER_DELETE_SUCCESS,
  MEMBER_DELETE_FAIL,
  MEMBER_CREATE_REQUEST,
  MEMBER_CREATE_SUCCESS,
  MEMBER_CREATE_FAIL,
  MEMBER_CREATE_RESET,
  MEMBER_UPDATE_REQUEST,
  MEMBER_UPDATE_SUCCESS,
  MEMBER_UPDATE_FAIL,
  MEMBER_UPDATE_RESET,
  MEMBER_CREATE_REVIEW_REQUEST,
  MEMBER_CREATE_REVIEW_SUCCESS,
  MEMBER_CREATE_REVIEW_FAIL,
  MEMBER_CREATE_REVIEW_RESET,
  MEMBER_TOP_REQUEST,
  MEMBER_TOP_SUCCESS,
  MEMBER_TOP_FAIL,
} from '../constants/memberConstants';

export const memberListReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case MEMBER_LIST_REQUEST:
      return { loading: true, members: [] };

    case MEMBER_LIST_SUCCESS:
      return {
        loading: false,
        members: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case MEMBER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const memberDetailsReducer = (
  state = { member: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case MEMBER_DETAILS_REQUEST:
      return { loading: true, ...state };

    case MEMBER_DETAILS_SUCCESS:
      return { loading: false, member: action.payload };

    case MEMBER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const memberDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MEMBER_DELETE_REQUEST:
      return { loading: true };

    case MEMBER_DELETE_SUCCESS:
      return { loading: false, success: true };

    case MEMBER_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const memberCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MEMBER_CREATE_REQUEST:
      return { loading: true };

    case MEMBER_CREATE_SUCCESS:
      return { loading: false, success: true, member: action.payload };

    case MEMBER_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case MEMBER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const memberUpdateReducer = (state = { member: {} }, action) => {
  switch (action.type) {
    case MEMBER_UPDATE_REQUEST:
      return { loading: true };

    case MEMBER_UPDATE_SUCCESS:
      return { loading: false, success: true, member: action.payload };

    case MEMBER_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case MEMBER_UPDATE_RESET:
      return { member: {} };

    default:
      return state;
  }
};

export const memberReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MEMBER_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case MEMBER_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case MEMBER_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case MEMBER_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const memberTopRatedReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case MEMBER_TOP_REQUEST:
      return { loading: true, members: [] };

    case MEMBER_TOP_SUCCESS:
      return { loading: false, members: action.payload };

    case MEMBER_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
