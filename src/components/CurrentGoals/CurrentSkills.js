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
      <div>
        <button
          onClick={() =>
            this.props.deleteCurrentSkill(this.props.skill.current_skill_id)
          }
        >
          Delete
        </button>
        <span>{this.props.skill.current_skill}</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentSkills: state.currentGoals.currentSkills
  };
}

export default connect(mapStateToProps, { deleteCurrentSkill })(CurrentSkills);
