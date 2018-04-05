import axios from "axios";


 // initialize state

 const initialState = {
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


  const ADD_WORK_HISTORY_ITEM = "ADD_WORK_HISTORY_ITEM";
const DELETE_WORK_HISTORY_ITEM = "DELETE_WORK_HISTORY_ITEM";
const HANDLE_CHANGE = "HANDLE_CHANGE";
const GET_WORK_HISTORY = "GET_WORK_HISTORY";




// export function handleAddNewWorkHistory() {
//     return { 
//       type: ADD_WORK_HISTORY_ITEM,
//       payload: ////?????????    company: this.state.company,
//       // job_title: this.state.job_title,
//       // start_date: this.state.start_date,
//       // end_date: this.state.end_date,
//       // job_responsibilities: this.state.job_responsibilities,
//       // notable_achievements: this.state.notable_achievements,
//       // salary: this.state.salary
//       //// need to add a case statement to reducer function for this
//     };
//   }
  

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
    const workData = axios.get( '/api/get_work_history' )
        .then( response => {
           return response.data
            });
            return {
              type: GET_WORK_HISTORY,
              payload: workData
            }
          } 




  

// export function handleChange(e) {
//     return {
//       type: HANDLE_CHANGE,
//       payload: { [e.target.name]: e.target.value }
//     }
//    } 
   




   
export default function reducer(state = initialState, action) {
    switch (action.type) {
  
        case GET_WORK_HISTORY:
        return Object.assign({}, state, {})
        // case ADD_WORK_HISTORY_ITEM:
        // return Object.assign({}, state, {addNewButtonIsPressed: true} );
        
        // case DELETE_WORK_HISTORY_ITEM:
        // return Object.assign({}, state, { workHistoryItems: action.payload });
  
        // case HANDLE_CHANGE:
        // return Object.assign({}, state, {?????????: action.payload})
  
      default:
        return state;
    }
  }
  