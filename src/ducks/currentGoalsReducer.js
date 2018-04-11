import axios from "axios";

const initialState = {
  currentSkills: [],
  skillsWorkingOn: [],
};

const GET_CURRENT_SKILLS = "GET_CURRENT_SKILLS";
const DELETE_CURRENT_SKILL = "DELETE_CURRENT_SKILL";
const ADD_CURRENT_SKILL = "ADD_CURRENT_SKILL";
const ADD_WORKING_SKILL = "ADD_WORKING_SKILL";
const GET_WORKING_SKILLS = "GET_WORKING_SKILLS";
const DELETE_WORKING_SKILL = "DELETE_WORKING_SKILL";


export function getSkillsWorkingOn(){
  const skillData = axios.get("/api/get_skills")
  .then(response => {
    return response.data
  });
  return {
    type: GET_WORKING_SKILLS,
    payload: skillData
  }
}
////// need to create a form to grab input values to pass as parameters for the addSkillWorkingOn function
////// also probably need an edit form for this as well
export function addSkillWorkingOn(addNewSkillToWorkOnInput, start_date, completion_date, due_date) {
  let body = {
    skill_name: addNewSkillToWorkOnInput,
    start_date:  start_date, 
    completion_date: completion_date,
    due_date: due_date
  };
  const newSkillData = axios
    .post("/api/add_skill", body)
    .then(response => {
      return response.data;
    });
  return {
    type: ADD_WORKING_SKILL,
    payload: newSkillData
  };
}
export function deleteSkillWorkingOn(id) {
  const deleteData = axios
    .delete(`/api/delete_skill/${id}`)
    .then(response => {
      return response.data;
    });
  return {
    type: DELETE_WORKING_SKILL,
    payload: deleteData
  };
}


export function getCurrentSkills() {
  const skillData = axios.get("/api/get_current_skills").then(response => {
    return response.data;
  });
  return {
    type: GET_CURRENT_SKILLS,
    payload: skillData
  };
}

export function addCurrentSkill(userNewCurrentSkillInput) {
  let body = {
    current_skill: userNewCurrentSkillInput
  };
  const newSkillData = axios
    .post("/api/add_current_skill", body)
    .then(response => {
      return response.data;
    });
  return {
    type: ADD_CURRENT_SKILL,
    payload: newSkillData
  };
}

export function deleteCurrentSkill(id) {
  const deleteData = axios
    .delete(`/api/delete_current_skill/${id}`)
    .then(response => {
      return response.data;
    });
  return {
    type: DELETE_CURRENT_SKILL,
    payload: deleteData
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_SKILLS + "_FULFILLED":
      return Object.assign({}, state, { currentSkills: action.payload });

    case ADD_CURRENT_SKILL + "_FULFILLED":
      return Object.assign({}, state, { currentSkills: action.payload });

    case DELETE_CURRENT_SKILL + "_FULFILLED":
      return Object.assign({}, state, { currentSkills: action.payload });

      case GET_WORKING_SKILLS + "_FULFILLED":
      return Object.assign({}, state, { skillsWorkingOn: action.payload });

    case ADD_WORKING_SKILL + "_FULFILLED":
      return Object.assign({}, state, { skillsWorkingOn: action.payload });

    case DELETE_WORKING_SKILL + "_FULFILLED":
      return Object.assign({}, state, { skillsWorkingOn: action.payload });
    default:
      return state;
  }
}
