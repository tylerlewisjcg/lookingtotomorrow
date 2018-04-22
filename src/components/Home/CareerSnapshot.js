import React, { Component } from 'react';
import { connect } from "react-redux";
import { getWorkHistory } from "./../../ducks/workHistoryReducer";
import _ from 'lodash';
class CareerSnapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    this.props.getWorkHistory()
  }
  render() { 
    let currentJob = _.filter(this.props.workHistoryItems, {'end_date': null});


    return ( <div className="mb-4">
      <h2>Career Snapshot</h2>
      
{this.props.workHistoryItems.length !== 0?(<div> <p>{`Currently Working At: ${currentJob[0].company}`}</p>
<p>{`Title: ${currentJob[0].job_title}`}</p>
<p>{`Since ${currentJob[0].start_date}`} years or time from moment.js, take the date started and do a time from method from moment</p>
<p>{`Current Salary: ${currentJob[0].salary}`}</p>
<p>{`Notable Accomplishments`}need to display Accomplishments, but slice them at a comma and then join into an array and map over the array and display as a bullet point list</p>

</div>) : (<div></div>) }
   
    </div> )
  }
  }
function mapStateToProps(state) {
  return {
    workHistoryItems: state.workHistory.workHistoryItems
  };
}
export default connect(mapStateToProps, {getWorkHistory})(CareerSnapshot);
