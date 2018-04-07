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
const COMPANY_CHANGE = "COMPANY_CHANGE";
const SALARY_CHANGE = "SALARY_CHANGE";
const START_DATE_CHANGE = "START_DATE_CHANGE";
const END_DATE_CHANGE = "END_DATE_CHANGE";
const JOB_RESPONSIBILITIES_CHANGE = "JOB_RESPONSIBILITIES_CHANGE";
const NOTABLE_ACHIEVEMENTS_CHANGE = "NOTABLE_ACHIEVEMENTS_CHANGE";
const JOB_TITLE_CHANGE = "JOB_TITLE_CHANGE";


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
///// reducer function created/ unknown if working
//// endpoint created and working with postman
//// handle change inputs not setup in CareerForm component and not influencing state in workHistoryReducer
//// editWorkHistory function not passed down to CareerHistoryDisplayChild component to be called
////
////

///// trying to get handleChange to actually change values in the reducer state
export function handleCompanyChange(e) {
  let newCompanyTemp = e.target.value
  return {type: COMPANY_CHANGE,
        payload: newCompanyTemp
      }
}
export function handleStartDateChange(e) {
  let newStartDateTemp = e.target.value
  return {type: START_DATE_CHANGE,
    payload: newStartDateTemp
  }
}
export function handleEndDateChange(e){
  let newEndDateTemp = e.target.value
  return {type: END_DATE_CHANGE,
    payload: newEndDateTemp
  }
}
export function handleSalaryChange(e){
  let newSalaryTemp = e.target.value
  return {type: SALARY_CHANGE,
    payload: newSalaryTemp
  }
}
export function handleNotableAchievementsChange(e){
  let newNotableAchievementsTemp = e.target.value
  return {type: NOTABLE_ACHIEVEMENTS_CHANGE,
    payload: newNotableAchievementsTemp
  }
}

export function handleJobResponsibilitiesChange(e){
  let newJobResponsibilitiesTemp = e.target.value
  return {type: JOB_RESPONSIBILITIES_CHANGE,
    payload: newJobResponsibilitiesTemp
  }
}

export function handleJobTitleChange(e){
  let newJobTitleTemp = e.target.value
  return {type: JOB_TITLE_CHANGE,
    payload: newJobTitleTemp
  }
}

export function editWorkHistory( id, company, job_title, start_date, end_date, job_responsibilities, notable_achievements, salary ) {
  let body = {
      company: company,
      job_title: job_title,
      start_date: start_date,
      end_date: end_date,
      job_responsibilities: job_responsibilities,
      notable_achievements: notable_achievements,
      salary: salary
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

        case EDIT_WORK_HISTORY  + "_FULFILLED":   //// i don't think this is going to work
        //because i don't have anything that is pushing the new values onto the workHistoryItems array
        /// i might be able to pull down the info from initial state as props for every single key
        //and then somehow take props.(key or whatever item) and push it onto a temporary array
        //and then somehow make a new function that takes the value of that array from the component
        // and sets it as the action.payload to push to workHistoryItems
        return Object.assign({}, state, {workHistoryItems: action.payload})

        case COMPANY_CHANGE:
        return Object.assign({}, state, {company: action.payload} )

        case START_DATE_CHANGE:
        return Object.assign({}, state, {start_date: action.payload} )

        case END_DATE_CHANGE:
        return Object.assign({}, state, {end_date: action.payload} )

        case SALARY_CHANGE:
        return Object.assign({}, state, {salary: action.payload} )

        case JOB_RESPONSIBILITIES_CHANGE:
        return Object.assign({}, state, {job_responsibilities: action.payload} )

        case JOB_TITLE_CHANGE:
        return Object.assign({}, state, {job_title: action.payload} )

        case NOTABLE_ACHIEVEMENTS_CHANGE:
        return Object.assign({}, state, {notable_achievements: action.payload} )

      default:
        return state;
    }
  }
  