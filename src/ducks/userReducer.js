import axios from "axios";




 // initialize state

const initialState = {
  user: {},
  workHistoryItems: [],
  company: "",
  job_title: "",
  start_date: "",
  end_date: "",
  job_responsibilities: "",
  notable_achievements: "",
  salary: 0,
  addNewButtonIsPressed: false,
  editButtonIsPressed: false
};

//////need to bring in every damn method on my page and every damn piece of state////


//const variables



const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const ADD_WORK_HISTORY_ITEM = "ADD_WORK_HISTORY_ITEM";
const DELETE_WORK_HISTORY_ITEM = "DELETE_WORK_HISTORY_ITEM";






 //action creators

export function getUserInfo() {
  const userData = axios.get("/auth/me").then(res => {
    return res.data;
  });

  return {
    type: UPDATE_USER_INFO,
    payload: userData
  };
}


export function handleAddNewWorkHistory() {
  return { 
    type: ADD_WORK_HISTORY_ITEM
  };
}


export function deleteWorkHistoryItem( id ) {
  const item = axios.delete( `/api/delete_work_history_item/${id}` )
      .then( () => {
          this.getWorkHistory()
      })
      return {
        type: DELETE_WORK_HISTORY_ITEM,
        payload: item
      }
}



//reducer function


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });

      case ADD_WORK_HISTORY_ITEM:
      return Object.assign({}, state, {addNewButtonIsPressed: true} );
      
      case DELETE_WORK_HISTORY_ITEM:
      return Object.assign({}, state, { workHistoryItems: action.payload });


    default:
      return state;
  }
}
