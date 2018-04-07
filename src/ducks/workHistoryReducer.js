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
    salary: 0
  };



const GET_WORK_HISTORY = "GET_WORK_HISTORY";
const DELETE_WORK_HISTORY = "DELETE_WORK_HISTORY";
function getWorkHistoryTheSecond(){
  const workData = axios.get( '/api/get_work_history' )
        .then( response => {
         return response.data
          });
            return {
              type: GET_WORK_HISTORY,
              payload: workData
            }
}

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

export function deleteWorkHistory( id ) {
  console.log('reducer connected correctly');
    const workData = axios.delete( `/api/delete_work_history/${id}` )
    .then( response => {
      return response.data
       });
         return {
           type: GET_WORK_HISTORY,
           payload: workData
         }
}

   
export default function reducer(state = initialState, action) {
    switch (action.type) {
  
        case GET_WORK_HISTORY + "_FULFILLED":
        return Object.assign({}, state, {workHistoryItems: action.payload})
      
        case DELETE_WORK_HISTORY + "_FULFILLED":
        return Object.assign({}, state, {workHistoryItems: action.payload})

      default:
        return state;
    }
  }
  