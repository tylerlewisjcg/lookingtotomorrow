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
      <span className="badge badge-pill badge-light">{this.props.skill.current_skill}
        <button
        type="button" className="btn btn-link"
          onClick={() =>
            this.props.deleteCurrentSkill(this.props.skill.current_skill_id)
          }
        >
         <i class="fas fa-times-circle"></i>
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
