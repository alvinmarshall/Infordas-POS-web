import createReducer from "../../../../../app/common/util/reducerUtil";
import {
  GET_ALL_COMPANIES,
  COMPANY_IS_LOADING,
  CREATE_COMPANY,
  REMOVE_COMPANY,
  UPDATE_COMPANY,
  RESET_COMPANY_MESSAGE
} from "./companyConstants";

const initialState = {
  loading: false,
  companies: [],
  message: ""
};

//
// ─── GET ALL COMAPANIES ─────────────────────────────────────────────────────────
//

export const getAllCompanies = (state, payload) => {
  return { ...state, companies: payload, loading: false };
};

//
// ─── SET LOADING STATE ──────────────────────────────────────────────────────────
//

export const isLoading = (state, payload) => {
  return { ...state, loading: payload };
};

//
// ─── CREATE COMPANY ─────────────────────────────────────────────────────────────
//

export const createCompany = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

//
// ─── REMOVE COMPANY ─────────────────────────────────────────────────────────────
//

export const removeCompany = (state, payload) => {
  return { ...state, message: payload };
};

//
// ─── UPDATE COMPANY ─────────────────────────────────────────────────────────────
//

export const updateCompany = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const resetCompanyMessage = (state, payload) => {
  return { ...state, message: payload || "" };
};

export default createReducer(initialState, {
  [COMPANY_IS_LOADING]: isLoading,
  [GET_ALL_COMPANIES]: getAllCompanies,
  [CREATE_COMPANY]: createCompany,
  [REMOVE_COMPANY]: removeCompany,
  [UPDATE_COMPANY]: updateCompany,
  [RESET_COMPANY_MESSAGE]: resetCompanyMessage
});
