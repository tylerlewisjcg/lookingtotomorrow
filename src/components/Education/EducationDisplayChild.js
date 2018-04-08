import React, { Component } from "react";
import EducationForm from "./EducationForm";
import { connect } from "react-redux";
import { deleteEducationHistory } from "./../../ducks/educationReducer";
import moment from 'moment';
class EducationDisplayChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editButtonIsPressed: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    if (this.state.editButtonIsPressed === false) {
      this.setState({ editButtonIsPressed: true });
    } else {
      this.setState({ editButtonIsPressed: false });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editButtonIsPressed ? (
          <div>
            <button onClick={() => this.updateState()}>Edit</button>
            <button
              onClick={() =>
                this.props.deleteEducationHistory(this.props.eduItem.education_id)
              }
            >
              Delete
            </button>

            <p>Institution: {this.props.eduItem.institution}</p>
            <p>Start Date: {moment(this.props.eduItem.start_date).format('MMM DD, YYYY')}</p>
            <p>End Date: {moment(this.props.eduItem.end_date).format('MMM DD, YYYY ')}</p>
            <p>Certification/Degree Type: {this.props.eduItem.certification_type}</p>
            <p>JField of Study: {this.props.eduItem.field_of_study}</p>
            <p>Accomplishments/Extra-Curricular: {this.props.eduItem.accomplishments}</p>
          </div>
        ) : (
          <EducationForm updateState={this.updateState} eduItem={this.props.eduItem} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    educationItems: state.education.educationItems
  };
}

export default connect(mapStateToProps, { deleteEducationHistory })(
  EducationDisplayChild
);
