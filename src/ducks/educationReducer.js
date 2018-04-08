import axios from "axios";
////// done with educationForm/ education


//// need to do
/// education reducer
/// education display child
//// education endpoints
//// combine reducers in main reducer

const initialState = {
  educationItems: [],
  institution: "",
  certification_type: "",
  start_date: "",
  end_date: "",
  accomplishments: "",
  field_of_study: ""
};

const GET_EDUCATION_HISTORY = "GET_EDUCATION_HISTORY";
const DELETE_EDUCATION_HISTORY = "DELETE_EDUCATION_HISTORY";
const EDIT_EDUCATION_HISTORY = "EDIT_EDUCATION_HISTORY";
const INSTITUTION_CHANGE = "INSTITUTION_CHANGE";
const FIELD_OF_STUDY_CHANGE = "FIELD_OF_STUDY_CHANGE";
const START_DATE_CHANGE = "START_DATE_CHANGE";
const END_DATE_CHANGE = "END_DATE_CHANGE";
const ACCOMPLISHMENTS_CHANGE = "ACCOMPLISHMENTS_CHANGE";
const CERTIFICATION_TYPE_CHANGE = "CERTIFICATION_TYPE_CHANGE";
const ADD_EDUCATION_HISTORY = "ADD_EDUCATION_HISTORY";

export function handleInstitutionChange(e) {
  let newInstitutionTemp = e.target.value;
  return {
    type: INSTITUTION_CHANGE,
    payload: newInstitutionTemp
  };
}
export function handleStartDateChange(e) {
  let newStartDateTemp = e.target.value;
  return {
    type: START_DATE_CHANGE,
    payload: newStartDateTemp
  };
}
export function handleEndDateChange(e) {
  let newEndDateTemp = e.target.value;
  return {
    type: END_DATE_CHANGE,
    payload: newEndDateTemp
  };
}
export function handleFieldOfStudyChange(e) {
  let newFieldOfStudyTemp = e.target.value;
  return {
    type: FIELD_OF_STUDY_CHANGE,
    payload: newFieldOfStudyTemp
  };
}
export function handleAccomplishmentsChange(e) {
  let newAccomplishmentsTemp = e.target.value;
  return {
    type: ACCOMPLISHMENTS_CHANGE,
    payload: newAccomplishmentsTemp
  };
}


export function handleCertificationTypeChange(e) {
  let newCertificationTypeTemp = e.target.value;
  return {
    type: CERTIFICATION_TYPE_CHANGE,
    payload: newCertificationTypeTemp
  };
}

export function editEducationHistory(
  id,
  institution,
  certification_type,
  start_date,
  end_date,
  accomplishments,
  field_of_study
) {
  let body = {
    institution: institution,
    certification_type: certification_type,
    start_date: start_date,
    end_date: end_date,
    accomplishments: accomplishments,
    field_of_study: field_of_study
  };
  const editData = axios
    .put(`/api/edit_education_history/${id}`, body)
    .then(response => {
      return response.data;
    });
  return {
    type: EDIT_EDUCATION_HISTORY,
    payload: editData
  };
}

export function addEducationHistory(
  institution,
  certification_type,
  start_date,
  end_date,
  accomplishments,
  field_of_study
) {
  let body = {
    institution: institution,
    certification_type: certification_type,
    start_date: start_date,
    end_date: end_date,
    accomplishments: accomplishments,
    field_of_study: field_of_study
  };
  const addData = axios.post("/api/add_education_history/", body).then(response => {
    return response.data;
  });
  return {
    type: ADD_EDUCATION_HISTORY,
    payload: addData
  };
}

export function getEducationHistory() {
  const educationData = axios.get("/api/get_education_history").then(response => {
    return response.data;
  });
  return {
    type: GET_EDUCATION_HISTORY,
    payload: educationData
  };
}

export function deleteEducationHistory(id) {
  const deleteData = axios
    .delete(`/api/delete_education_history/${id}`)
    .then(response => {
      return response.data;
    });
  return {
    type: DELETE_EDUCATION_HISTORY,
    payload: deleteData
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_EDUCATION_HISTORY + "_FULFILLED":
      return Object.assign({}, state, { educationItems: action.payload });

    case DELETE_EDUCATION_HISTORY + "_FULFILLED":
      return Object.assign({}, state, { educationItems: action.payload });

    case EDIT_EDUCATION_HISTORY + "_FULFILLED":
      return Object.assign({}, state, { educationItems: action.payload });

    case INSTITUTION_CHANGE:
      return Object.assign({}, state, { institution: action.payload });

    case START_DATE_CHANGE:
      return Object.assign({}, state, { start_date: action.payload });

    case END_DATE_CHANGE:
      return Object.assign({}, state, { end_date: action.payload });

    case FIELD_OF_STUDY_CHANGE:
      return Object.assign({}, state, { field_of_study: action.payload });

    case CERTIFICATION_TYPE_CHANGE:
      return Object.assign({}, state, { certification_type: action.payload });

    case ACCOMPLISHMENTS_CHANGE:
      return Object.assign({}, state, { accomplishments: action.payload });

    default:
      return state;
  }
}
