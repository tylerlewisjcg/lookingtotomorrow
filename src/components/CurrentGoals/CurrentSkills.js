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
        type="button" className="btn btn-link"
          onClick={() =>
            this.props.deleteCurrentSkill(this.props.skill.current_skill_id)
          }
        >
          <i class="far fa-trash-alt"></i>
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
