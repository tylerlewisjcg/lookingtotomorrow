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
  addNewButtonIsPressed: false, //// do i need to put this back in local state and just call 2 methods with my onClick?
  editButtonIsPressed: false //// do i need to put this back in local state and just call 2 methods with my onClick?
};




////////  the reason i make these strings into const variables is to take advantage of auto-complete
const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const ADD_WORK_HISTORY_ITEM = "ADD_WORK_HISTORY_ITEM";
const DELETE_WORK_HISTORY_ITEM = "DELETE_WORK_HISTORY_ITEM";
const HANDLE_CHANGE = "HANDLE_CHANGE";





 //action creators/// functions that i can export and call in my individual components

// export function getUserInfo() {
//   const userData = axios.get("/auth/me").then(res => {
//     return res.data;
//   });

//   return {
//     type: UPDATE_USER_INFO,
//     payload: userData
//   };
// }


export function handleAddNewWorkHistory() {
  return { 
    type: ADD_WORK_HISTORY_ITEM,
    payload: ////?????????    company: this.state.company,
    // job_title: this.state.job_title,
    // start_date: this.state.start_date,
    // end_date: this.state.end_date,
    // job_responsibilities: this.state.job_responsibilities,
    // notable_achievements: this.state.notable_achievements,
    // salary: this.state.salary
    //// need to add a case statement to reducer function for this
  };
}




// export function deleteWorkHistoryItem( id ) {
//   const item = axios.delete( `/api/delete_work_history_item/${id}` )
//       .then( () => {
//           this.getWorkHistory()
//       })
//       return {
//         type: DELETE_WORK_HISTORY_ITEM,
//         payload: item
//       }
// }   


export function getWorkHistory() {
  axios.get( '/api/get_work_history' )
      .then( response => {
          console.log( response.data );
          this.setState({
              jobs: response.data
          });
      } );
} ///// i think this will work


export function handleChange(e) {
 return {
   type: HANDLE_CHANGE,
   payload: { [e.target.name]: e.target.value }
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

      case HANDLE_CHANGE:
      return Object.assign({}, state, {?????????: action.payload})

    default:
      return state;
  }
}
