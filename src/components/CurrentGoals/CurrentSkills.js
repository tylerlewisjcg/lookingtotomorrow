import React, { Component } from "react";
import { deleteCurrentSkill } from "./../../ducks/currentGoalsReducer";
import { connect } from "react-redux";

class CurrentSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span id="skills-pills" className="badge badge-pill badge-light">
        {this.props.skill.current_skill}
        <button
          type="button"
          className="btn btn-link"
          style={{ color: "#5A6268" }}
          onClick={() =>
            this.props.deleteCurrentSkill(this.props.skill.current_skill_id)
          }
        >
          <i className="fas fa-times-circle" />
        </button>
      </span>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentSkills: state.currentGoals.currentSkills
  };
}

export default connect(mapStateToProps, { deleteCurrentSkill })(CurrentSkills);
