import axios from "axios";
import {
  GET_ALL_COMPANIES,
  COMPANY_IS_LOADING,
  CREATE_COMPANY,
  REMOVE_COMPANY,
  UPDATE_COMPANY,
  RESET_COMPANY_MESSAGE
} from "./companyConstants";
import { errorHandlingAction } from "../../../../error/reducer/errorAction";

const options = {
  headers: { Authorization: `Bearer ${localStorage.auth_token}` }
};

//#region Get all companies
//
// ─── GET ALL COMPANIES ──────────────────────────────────────────────────────────
//

export const fetchAllCompanies = () => dispatch => {
  showLoading(true, dispatch);
  axios
    .get("/company/companies", options)
    .then(res => {
      dispatch({
        type: GET_ALL_COMPANIES,
        payload: res.data.data
      });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

//#endregion

//#region create company
//
// ─── CREATE COMPANY ─────────────────────────────────────────────────────────────
//

export const createNewCompany = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .post("/company/create-company", payload, options)
    .then(res => {
      dispatch({
        type: CREATE_COMPANY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

//#endregion

//#region Remove company
export const removeCompany = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .delete(`/company/delete-company/${payload}`, options)
    .then(res => {
      dispatch({
        type: REMOVE_COMPANY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

//#endregion

//#region update company
//
// ─── Update COMPANY ─────────────────────────────────────────────────────────────
//

export const updateCompany = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .put("/company/update-company", payload, options)
    .then(res => {
      dispatch({
        type: UPDATE_COMPANY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const resetCompMessage = () => dispatch => {
  dispatch({
    type: RESET_COMPANY_MESSAGE
  });
};

//#endregion

export const showLoading = (show, dispatch) => {
  dispatch({ type: COMPANY_IS_LOADING, payload: show });
};
