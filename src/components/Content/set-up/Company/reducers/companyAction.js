import axios from "axios";
import { GET_ERRORS } from "../../../../error/reducer/errorConstants";
import {
  GET_ALL_COMPANIES,
  COMPANY_IS_LOADING,
  CREATE_COMPANY,
  REMOVE_COMPANY,
  UPDATE_COMPANY,
  RESET_COMPANY_MESSAGE
} from "./companyConstants";
import { logoutUser } from "../../../../Auth/reducers/authAction";

//#region Get all companies
//
// ─── GET ALL COMPANIES ──────────────────────────────────────────────────────────
//

export const fetchAllCompanies = () => dispatch => {
  dispatch(setCompanyIsLoading());
  const token = localStorage.auth_token;
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  };
  axios
    .get("/company/companies", options)
    .then(res => {
      dispatch(setCompany(res.data.data));
    })
    .catch(err => {
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const setCompanyIsLoading = () => ({
  type: COMPANY_IS_LOADING
});

export const setCompany = payload => ({
  type: GET_ALL_COMPANIES,
  payload: payload
});
//#endregion

//#region create company
//
// ─── CREATE COMPANY ─────────────────────────────────────────────────────────────
//

export const createNewCompany = payload => dispatch => {
  const options = {
    headers: { Authorization: `Bearer ${localStorage.auth_token}` }
  };
  axios
    .post("/company/create-company", payload, options)
    .then(res => {
      dispatch({
        type: CREATE_COMPANY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      console.error(err);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

//#endregion

//#region Remove company
export const removeCompany = payload => dispatch => {
  const options = {
    headers: { Authorization: `Bearer ${localStorage.auth_token}` }
  };
  axios
    .delete(`/company/delete-company/${payload}`, options)
    .then(res => {
      dispatch({
        type: REMOVE_COMPANY,
        payload: res.data.data.message
      });
      fetchAllCompanies();
    })
    .catch(err => {
      console.error(err);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

//#endregion

//#region update company
//
// ─── Update COMPANY ─────────────────────────────────────────────────────────────
//

export const updateCompany = payload => dispatch => {
  const options = {
    headers: { Authorization: `Bearer ${localStorage.auth_token}` }
  };
  axios
    .put("/company/update-company", payload, options)
    .then(res => {
      dispatch({
        type: UPDATE_COMPANY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      console.error(err.response);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const resetCompMessage = () => dispatch => {
  dispatch({
    type: RESET_COMPANY_MESSAGE,
    payload: ""
  });
};

//#endregion
