import axios from "axios";

const initialState = {
  workHistoryItems: [],
  company: "",
  job_title: "",
  start_date: "",
  end_date: "",
  job_responsibilities: "",
  notable_achievements: "",
  salary: 0
};

const GET_WORK_HISTORY = "GET_WORK_HISTORY";
const DELETE_WORK_HISTORY = "DELETE_WORK_HISTORY";
const EDIT_WORK_HISTORY = "EDIT_WORK_HISTORY";
const COMPANY_CHANGE = "COMPANY_CHANGE";
const SALARY_CHANGE = "SALARY_CHANGE";
const START_DATE_CHANGE = "START_DATE_CHANGE";
const END_DATE_CHANGE = "END_DATE_CHANGE";
const JOB_RESPONSIBILITIES_CHANGE = "JOB_RESPONSIBILITIES_CHANGE";
const NOTABLE_ACHIEVEMENTS_CHANGE = "NOTABLE_ACHIEVEMENTS_CHANGE";
const JOB_TITLE_CHANGE = "JOB_TITLE_CHANGE";
const ADD_WORK_HISTORY = "ADD_WORK_HISTORY";

export function handleCompanyChange(e) {
  let newCompanyTemp = e.target.value;
  return {
    type: COMPANY_CHANGE,
    payload: newCompanyTemp
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
export function handleSalaryChange(e) {
  let newSalaryTemp = e.target.value;
  return {
    type: SALARY_CHANGE,
    payload: newSalaryTemp
  };
}
export function handleNotableAchievementsChange(e) {
  let newNotableAchievementsTemp = e.target.value;
  return {
    type: NOTABLE_ACHIEVEMENTS_CHANGE,
    payload: newNotableAchievementsTemp
  };
}

export function handleJobResponsibilitiesChange(e) {
  let newJobResponsibilitiesTemp = e.target.value;
  return {
    type: JOB_RESPONSIBILITIES_CHANGE,
    payload: newJobResponsibilitiesTemp
  };
}

export function handleJobTitleChange(e) {
  let newJobTitleTemp = e.target.value;
  return {
    type: JOB_TITLE_CHANGE,
    payload: newJobTitleTemp
  };
}

export function editWorkHistory(
  id,
  company,
  job_title,
  start_date,
  end_date,
  job_responsibilities,
  notable_achievements,
  salary
) {
  let body = {
    company: company,
    job_title: job_title,
    start_date: start_date,
    end_date: end_date,
    job_responsibilities: job_responsibilities,
    notable_achievements: notable_achievements,
    salary: salary
  };
  const editData = axios
    .put(`/api/edit_work_history/${id}`, body)
    .then(response => {
      return response.data;
    });
  return {
    type: EDIT_WORK_HISTORY,
    payload: editData
  };
}

export function addWorkHistory(
  company,
  job_title,
  start_date,
  end_date,
  job_responsibilities,
  notable_achievements,
  salary
) {
  let body = {
    company: company,
    job_title: job_title,
    start_date: start_date,
    end_date: end_date,
    job_responsibilities: job_responsibilities,
    notable_achievements: notable_achievements,
    salary: salary
  };
  const addData = axios.post("/api/add_work_history/", body).then(response => {
    return response.data;
  });
  return {
    type: ADD_WORK_HISTORY,
    payload: addData
  };
}

export function getWorkHistory() {
  const workData = axios.get("/api/get_work_history").then(response => {
    return response.data;
  });
  return {
    type: GET_WORK_HISTORY,
    payload: workData
  };
}

export function deleteWorkHistory(id) {
  const deleteData = axios
    .delete(`/api/delete_work_history/${id}`)
    .then(response => {
      return response.data;
    });
  return {
    type: DELETE_WORK_HISTORY,
    payload: deleteData
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORK_HISTORY + "_FULFILLED":
      return Object.assign({}, state, { workHistoryItems: action.payload });

    case DELETE_WORK_HISTORY + "_FULFILLED":
      return Object.assign({}, state, { workHistoryItems: action.payload });

    case EDIT_WORK_HISTORY + "_FULFILLED":
      return Object.assign({}, state, { workHistoryItems: action.payload });

    case COMPANY_CHANGE:
      return Object.assign({}, state, { company: action.payload });

    case START_DATE_CHANGE:
      return Object.assign({}, state, { start_date: action.payload });

    case END_DATE_CHANGE:
      return Object.assign({}, state, { end_date: action.payload });

    case SALARY_CHANGE:
      return Object.assign({}, state, { salary: action.payload });

    case JOB_RESPONSIBILITIES_CHANGE:
      return Object.assign({}, state, { job_responsibilities: action.payload });

    case JOB_TITLE_CHANGE:
      return Object.assign({}, state, { job_title: action.payload });

    case NOTABLE_ACHIEVEMENTS_CHANGE:
      return Object.assign({}, state, { notable_achievements: action.payload });

    default:
      return state;
  }
}
