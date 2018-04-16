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
  handleEditEducationHistorySubmit() {
    this.props.editEducationHistory(
      this.props.eduItem.education_id,
      this.props.institution,
      this.props.certification_type,
      moment(this.props.start_date).toISOString(),
      moment(this.props.end_date).toISOString(),
      this.props.field_of_study,
      this.props.accomplishments
    );
    this.props.updateState();
  }

  handleAddEducationHistorySubmit() {
    this.props.addEducationHistory(
      this.props.institution,
      this.props.certification_type,
      moment(this.props.start_date).toISOString(),
      moment(this.props.end_date).toISOString(),
      this.props.field_of_study,
      this.props.accomplishments
    );

    this.props.updateState();
  }

  render() {
    return (
      <div className="container mb-2">
        <div  className="card border-primary">
          <div className="card-body">
            <div className="card-subtitle mb-2 text-muted">New Education Item</div>

      <form>
       
        <label htmlFor="institution">Institution</label>
        <input
        className="form-control mb-2"
        type="text"
        id="institution"
          name="institution"
          onChange={e => this.props.handleInstitutionChange(e)}
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.institution : ""
          }
          />
       
        <label htmlFor="start_date">Start Date</label>
        <input
          type="date"
          id="start_date"
          className="form-control mb-2"
          name="start_date"
          defaultValue={
            !!this.props.eduItem
              ? moment(this.props.eduItem.start_date).format("YYYY-MM-DD")
              : ""
          }
          onChange={e => this.props.handleStartDateChange(e)}
        />
    
        <label htmlFor="end_date">End Date</label>
        <input
        id="end_date"
        className="form-control mb-2"
          type="date"
          name="end_date"
          defaultValue={
            !!this.props.eduItem
            ? moment(this.props.eduItem.end_date).format("YYYY-MM-DD")
            : ""
          }
          onChange={e => this.props.handleEndDateChange(e)}
        />
       
        <label htmlFor="certification_type">Degree/Certificate</label>
        <input
        type="text"
        className="form-control mb-2"
          name="certification_type"
          id="certification_type"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.certification_type : ""
          }
          onChange={e => this.props.handleCertificationTypeChange(e)}
        />
      
        <label htmlFor="field_of_study">Field of Study/Major</label>
        <input
        className="form-control mb-2"
          name="field_of_study"
          id="field_of_study"
          type="text"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.field_of_study : ""
          }
          onChange={e => this.props.handleFieldOfStudyChange(e)}
          />
        
        <label htmlFor="accomplishments">Notable Achievements/Extracurricular</label>
        <input
        type="text"
        className="form-control mb-2"
          name="accomplishments"
          id="accomplishments"
          defaultValue={
            !!this.props.eduItem ? this.props.eduItem.accomplishments : ""
          }
          onChange={e => this.props.handleAccomplishmentsChange(e)}
        />
      </form>
      <button
        type="button" className="btn btn-light mr-3"
        onClick={() => {
            this.props.updateState();
          }}
        >
        <i className="fas fa-times mr-2"></i>
          Cancel
        </button>
        <button
        type="button" className="btn btn-secondary"
          onClick={() => {
            !!this.props.eduItem
            ? this.handleEditEducationHistorySubmit()
              : this.handleAddEducationHistorySubmit();
          }}
        >
          Submit
        </button>

</div>
</div>
</div>
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
