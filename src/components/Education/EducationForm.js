import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  handleInstitutionChange,
  handleEndDateChange,
  handleFieldOfStudyChange,
  handleAccomplishmentsChange,
  handleCertificationTypeChange,
  handleStartDateChange,
  editEducationHistory,
  addEducationHistory
} from "./../../ducks/educationReducer";
class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <button
          onClick={() => {
            this.props.updateState();
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            !!this.props.eduItem
              ? this.props.editEducationHistory(
                  this.props.eduItem.education_id,
                  this.props.institution,
                  this.props.certification_type,
                  this.props.start_date,
                  this.props.end_date,
                  this.props.field_of_study,
                  this.props.accomplishments
                )
              : this.props.addEducationHistory(
                  this.props.institution,
                  this.props.certification_type,
                  this.props.start_date,
                  this.props.end_date,
                  this.props.field_of_study,
                  this.props.accomplishments
                );
          }}
        >
          Submit
        </button>
        <br />

        <span>Institution</span>
        <input
          name="institution"
          onChange={e => this.props.handleInstitutionChange(e)}
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.institution : ""
          }
        />
        <br />

        {/* using moment.js to autofill my dates is causing my request not to send to my endpoints for some reason? */}
        <span>Start Date</span>
        <input
          type="date"
          name="start_date"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.start_date : ""
          }
          onChange={e => this.props.handleStartDateChange(e)}
        />
        <br />
        <span>End Date</span>
        <input
          type="date"
          name="end_date"
          defaultValue={!!this.props.eduItem ? this.props.eduItem.end_date : ""}
          onChange={e => this.props.handleEndDateChange(e)}
        />
        <br />
        <span>Degree/Certificate</span>
        <input
          name="certification_type"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.certification_type : ""
          }
          onChange={e => this.props.handleCertificationTypeChange(e)}
        />
        <br />
        <span>Field of Study/Major</span>
        <input
          name="field_of_study"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.field_of_study : ""
          }
          onChange={e => this.props.handleFieldOfStudyChange(e)}
        />
        <br />
        <span>Notable Achievements/Extracurricular</span>
        <input
          name="accomplishments"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.accomplishments : ""
          }
          onChange={e => this.props.handleAccomplishmentsChange(e)}
        />
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    educationItems: state.education.educationItems,
    institution: state.education.institution,
    field_of_study: state.education.field_of_study,
    start_date: state.education.start_date,
    end_date: state.education.end_date,
    accomplishments: state.education.accomplishments,
    certification_type: state.education.certification_type
  };
}

export default connect(mapStateToProps, {
  handleInstitutionChange,
  handleEndDateChange,
  handleFieldOfStudyChange,
  handleAccomplishmentsChange,
  handleCertificationTypeChange,
  handleStartDateChange,
  editEducationHistory,
  addEducationHistory
})(EducationForm);
