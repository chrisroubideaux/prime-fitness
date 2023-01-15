import axios from 'axios';
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
  MEMBER_UPDATE_REQUEST,
  MEMBER_UPDATE_SUCCESS,
  MEMBER_UPDATE_FAIL,
  MEMBER_CREATE_REVIEW_REQUEST,
  MEMBER_CREATE_REVIEW_SUCCESS,
  MEMBER_CREATE_REVIEW_FAIL,
  MEMBER_TOP_REQUEST,
  MEMBER_TOP_SUCCESS,
  MEMBER_TOP_FAIL,
} from '../constants/memberConstants';

export const listMembers =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: MEMBER_LIST_REQUEST });

      const { data } = await axios.get(`/api/members${keyword}`);

      dispatch({
        type: MEMBER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MEMBER_LIST_FAIL,
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

export const listMemberDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MEMBER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/members/${id}`);

    dispatch({
      type: MEMBER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEMBER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteMember = (id) => async (dispatch, getState) => {
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
};

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
};

export const updateMember = (member) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEMBER_UPDATE_REQUEST,
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
      `/api/members/update/${member.id}/`,
      member,
      config
    );
    dispatch({
      type: MEMBER_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: MEMBER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEMBER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createMemberReview =
  (memberId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: MEMBER_CREATE_REVIEW_REQUEST,
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
        `/api/members/${memberId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: MEMBER_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MEMBER_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
