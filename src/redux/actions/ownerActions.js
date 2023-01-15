import axios from 'axios';
import {
  OWNER_LIST_REQUEST,
  OWNER_LIST_SUCCESS,
  OWNER_LIST_FAIL,
  OWNER_DETAILS_REQUEST,
  OWNER_DETAILS_SUCCESS,
  OWNER_DETAILS_FAIL,
  OWNER_DELETE_REQUEST,
  OWNER_DELETE_SUCCESS,
  OWNER_DELETE_FAIL,
  OWNER_CREATE_REQUEST,
  OWNER_CREATE_SUCCESS,
  OWNER_CREATE_FAIL,
  OWNER_UPDATE_REQUEST,
  OWNER_UPDATE_SUCCESS,
  OWNER_UPDATE_FAIL,
  OWNER_CREATE_REVIEW_REQUEST,
  OWNER_CREATE_REVIEW_SUCCESS,
  OWNER_CREATE_REVIEW_FAIL,
  OWNER_TOP_REQUEST,
  OWNER_TOP_SUCCESS,
  OWNER_TOP_FAIL,
} from '../constants/ownerConstants';

export const listOwners =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: OWNER_LIST_REQUEST });

      const { data } = await axios.get(`/api/owners${keyword}`);

      dispatch({
        type: OWNER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: OWNER_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

/*export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top/`);

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};*/

export const listOwnerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: OWNER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/owners/${id}`);

    dispatch({
      type: OWNER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OWNER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/*export const deleteMember = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEMBER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/members/delete/${id}/`, config);

    dispatch({
      type: MEMBER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: MEMBER_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}; */

/*
export const createMember = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEMBER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/members/create/`, {}, config);
    dispatch({
      type: MEMBER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEMBER_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}; */

export const updateOwner = (owner) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OWNER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/owners/update/${owner.id}/`,
      owner,
      config
    );
    dispatch({
      type: OWNER_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: OWNER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OWNER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createOwnerReview =
  (ownerId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: OWNER_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/owners/${ownerId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: OWNER_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: OWNER_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
