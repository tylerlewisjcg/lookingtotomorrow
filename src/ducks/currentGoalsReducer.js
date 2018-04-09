import axios from "axios";

const initialState = {
  currentSkills: [],
  userNewCurrentSkillInput: ""
};

const GET_CURRENT_SKILLS = "GET_CURRENT_SKILLS";
const DELETE_CURRENT_SKILL = "DELETE_CURRENT_SKILL";
const ADD_CURRENT_SKILL = "ADD_CURRENT_SKILL";

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

    default:
      return state;
  }
}
