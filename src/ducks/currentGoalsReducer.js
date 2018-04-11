import axios from "axios";

const initialState = {
  currentSkills: [],
  skillsWorkingOn: [],
  actionItems: []
};

const GET_CURRENT_SKILLS = "GET_CURRENT_SKILLS";
const DELETE_CURRENT_SKILL = "DELETE_CURRENT_SKILL";
const ADD_CURRENT_SKILL = "ADD_CURRENT_SKILL";
const ADD_WORKING_SKILL = "ADD_WORKING_SKILL";
const GET_WORKING_SKILLS = "GET_WORKING_SKILLS";
const DELETE_WORKING_SKILL = "DELETE_WORKING_SKILL";
const MARK_AS_COMPLETE = "MARK_AS_COMPLETE";
const ADD_ACTION_ITEM = "ADD_ACTION_ITEM";
const DELETE_ACTION_ITEM = "DELETE_ACTION_ITEM";
const GET_ACTION_ITEMS = "GET_ACTION_ITEMS";
const MARK_ACTION_ITEM_AS_COMPLETE = "MARK_ACTION_ITEM_AS_COMPLETE";

export function getSkillsWorkingOn() {
  const skillData = axios.get("/api/get_skills").then(response => {
    return response.data;
  });
  return {
    type: GET_WORKING_SKILLS,
    payload: skillData
  };
}
export function markAsComplete(completion_date, id) {
  let body = {
    completion_date: completion_date
  };

  const completed = axios
    .put(`/api/mark_skill_as_complete/${id}`, body)
    .then(response => {
      return response.data;
    });
  return {
    type: MARK_AS_COMPLETE,
    payload: completed
  };
}
export function addSkillWorkingOn(
  addNewSkillToWorkOnInput,
  start_date,
  completion_date,
  due_date
) {
  let body = {
    skill_name: addNewSkillToWorkOnInput,
    start_date: start_date,
    completion_date: completion_date,
    due_date: due_date
  };
  const newSkillData = axios.post("/api/add_skill", body).then(response => {
    return response.data;
  });
  return {
    type: ADD_WORKING_SKILL,
    payload: newSkillData
  };
}
export function deleteSkillWorkingOn(id) {
  const deleteData = axios.delete(`/api/delete_skill/${id}`).then(response => {
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

/////not working/ unable to select items from database.
export function getActionItems(id){

  const actionData = axios.get(`/api/get_action_items/${id}`)
  .then(response => {
    return response.data
  });
  return {
    type: GET_ACTION_ITEMS,
    payload: actionData
  }
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

export function addActionItem(
  actionItemInput,
  start_date,
  completion_date,
  due_date,
  skill_id
) {
  let body = {
    action_item_description: actionItemInput,
    start_date: start_date,
    completion_date: completion_date,
    due_date: due_date,
    skill_id: skill_id
  };
  const newActionItem = axios
    .post("/api/add_action_item", body)
    .then(response => {
      return response.data;
    });
  return {
    type: ADD_ACTION_ITEM,
    payload: newActionItem
  };
}
export function deleteActionItem(id, skill_id) {

  const deleteItem = axios
    .delete(`/api/delete_action_item/${id}/${skill_id}`)
    .then(response => {
      return response.data;
    });
  return {
    type: DELETE_ACTION_ITEM,
    payload: deleteItem
  };
}

export function markAsActionItemAsComplete(completion_date, id, skill_id) {
  let body = {
    completion_date: completion_date,
    skill_id: skill_id
  };

  const completed = axios
    .put(`/api/mark_action_item_as_complete/${id}`, body)
    .then(response => {
      return response.data;
    });
  return {
    type: MARK_ACTION_ITEM_AS_COMPLETE,
    payload: completed
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

    case MARK_AS_COMPLETE + "_FULFILLED":
      return Object.assign({}, state, { skillsWorkingOn: action.payload });

    case ADD_ACTION_ITEM + "_FULFILLED":
      return Object.assign({}, state, { actionItems: action.payload });

    case DELETE_ACTION_ITEM + "_FULFILLED":
      return Object.assign({}, state, { actionItems: action.payload });

      case GET_ACTION_ITEMS + "_FULFILLED":
      return Object.assign({}, state, {actionItems: action.payload})

      case MARK_ACTION_ITEM_AS_COMPLETE + "_FULFILLED":
      return Object.assign({}, state, {actionItems: action.payload})
    default:
      return state;
  }
}
