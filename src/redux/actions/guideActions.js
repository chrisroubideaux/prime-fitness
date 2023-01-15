import axios from 'axios';
import {
  GUIDE_LIST_REQUEST,
  GUIDE_LIST_SUCCESS,
  GUIDE_LIST_FAIL,
  GUIDE_DETAILS_REQUEST,
  GUIDE_DETAILS_SUCCESS,
  GUIDE_DETAILS_FAIL,
  GUIDE_DELETE_REQUEST,
  GUIDE_DELETE_SUCCESS,
  GUIDE_DELETE_FAIL,
  GUIDE_CREATE_REQUEST,
  GUIDE_CREATE_SUCCESS,
  GUIDE_CREATE_FAIL,
  GUIDE_UPDATE_REQUEST,
  GUIDE_UPDATE_SUCCESS,
  GUIDE_UPDATE_FAIL,
  GUIDE_CREATE_REVIEW_REQUEST,
  GUIDE_CREATE_REVIEW_SUCCESS,
  GUIDE_CREATE_REVIEW_FAIL,
  GUIDE_TOP_REQUEST,
  GUIDE_TOP_SUCCESS,
  GUIDE_TOP_FAIL,
} from '../constants/guideConstants';

export const listGuides =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: GUIDE_LIST_REQUEST });

      const { data } = await axios.get(`/api/guides${keyword}`);

      dispatch({
        type: GUIDE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GUIDE_LIST_FAIL,
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

export const listGuideDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GUIDE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/guides/${id}`);

    dispatch({
      type: GUIDE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GUIDE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteGuide = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GUIDE_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/guides/delete/${id}/`, config);

    dispatch({
      type: GUIDE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: GUIDE_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createGuide = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GUIDE_CREATE_REQUEST,
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

    const { data } = await axios.post(`/api/guides/create/`, {}, config);
    dispatch({
      type: GUIDE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GUIDE_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateGuide = (guide) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GUIDE_UPDATE_REQUEST,
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
      `/api/guides/update/${guide.id}/`,
      guide,
      config
    );
    dispatch({
      type: GUIDE_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: GUIDE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GUIDE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createGuideReview =
  (guideId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GUIDE_CREATE_REVIEW_REQUEST,
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
        `/api/guides/${guideId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: GUIDE_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GUIDE_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
