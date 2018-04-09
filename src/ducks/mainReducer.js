import { combineReducers } from "redux";
import workHistoryReducer from "./workHistoryReducer";
import userReducer from "./userReducer";
import educationReducer from "./educationReducer";
import currentGoalsReducer from "./currentGoalsReducer";
export default combineReducers({
  workHistory: workHistoryReducer,
  users: userReducer,
  education: educationReducer,
  currentGoals: currentGoalsReducer
});
