import React, { Component } from "react";
import { connect } from "react-redux";
import { getWorkHistory } from "./../../ducks/workHistoryReducer";
import _ from "lodash";
import moment from "moment";
class CareerSnapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getWorkHistory();
  }

  render() {
    let currentJob = _.filter(this.props.workHistoryItems, { end_date: null });

    let notableAchievements = currentJob => {
      let splitArray = currentJob[0].notable_achievements.split(",");

      return splitArray.map(achievement => {
        return <li className="mt-1" key={achievement}>{achievement}</li>;
      });
    };

    return (
      <div className="container mb-4">
        <h2>Career Snapshot</h2>

        {currentJob.length !== 0 ? (
          <div className="container">
            {" "}
            <p><strong>{`Currently Company: `}</strong><span>{currentJob[0].company}</span></p>
            <p><strong>{`Since`}</strong> {`${moment
              .utc(currentJob[0].start_date)
              .format("MMM DD, YYYY")} (${moment
              .utc(currentJob[0].start_date)
              .fromNow(true)})`}</p>
            <p><strong>{`Title: `}</strong><span>{currentJob[0].job_title}</span></p>
            <p><strong>{`Current Salary: $`}<span></span>{currentJob[0].salary}</strong></p>
            <p><strong>Notable Accomplishments:</strong></p>
            <ul>{notableAchievements(currentJob)}</ul>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    workHistoryItems: state.workHistory.workHistoryItems
  };
}
export default connect(mapStateToProps, { getWorkHistory })(CareerSnapshot);
