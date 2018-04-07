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
const EDIT_WORK_HISTORY = "EDIT_WORK_HISTORY";

///// what i need to do.
///// i need my input fields in my careerform to change the state of company: "",
  //  job_title: "",
   // start_date: "",
   // end_date: "",
   // job_responsibilities: "",
   // notable_achievements: "",
   // salary: 0
/// to the value of the input
////  then i need to take all of that info and push it to my endpoint
//// then i need my endpoint to use my SQL query to update the info in the database
// then i need that updated information to come back to the endpoint 
// then i need my endpoint to send the response back to the reducer axios request function 
// then i need to re-render the updated information 
/// 

// call it in my component 
//and setup the endpoint to receive request
export function editWorkHistory( id, newCompany, newJobTitle, newStartDate, newEndDate, newJobResponsibilities, newNotableAchievements, newSalary ) {
  let body = {
      company: newCompany,
      job_title: newJobTitle,
      start_date: newStartDate,
      end_date: newEndDate,
      job_responsibilities: newJobResponsibilities,
      notable_achievements: newNotableAchievements,
      salary: newSalary
  }
 const editData = axios.put( `/api/edit_work_history/${id}`, body )
  .then( response => {
    return response.data
     });
       return {
         type: EDIT_WORK_HISTORY,
         payload: editData
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
    const deleteData = axios.delete( `/api/delete_work_history/${id}` )
    .then( response => {
      return response.data
       });
         return {
           type: GET_WORK_HISTORY,
           payload: deleteData
         }
}

   
export default function reducer(state = initialState, action) {
    switch (action.type) {
  
        case GET_WORK_HISTORY + "_FULFILLED":
        return Object.assign({}, state, {workHistoryItems: action.payload})
      
        case DELETE_WORK_HISTORY + "_FULFILLED":
        return Object.assign({}, state, {workHistoryItems: action.payload})

        case EDIT_WORK_HISTORY  + "_FULFILLED":
        return Object.assign({}, state, {workHistoryItems: action.payload})
      default:
        return state;
    }
  }
  