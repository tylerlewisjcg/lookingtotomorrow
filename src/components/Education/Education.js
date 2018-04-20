import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import { connect } from "react-redux";
import EducationForm from "./EducationForm";
import EducationDisplayChild from "./EducationDisplayChild";
import { getEducationHistory } from "./../../ducks/educationReducer";
import FileUpload from './../Home/FileUpload';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewButtonIsPressed: false
    };
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    this.props.getEducationHistory();
  }
  updateState() {
    this.setState({ addNewButtonIsPressed: !this.state.addNewButtonIsPressed });
    this.props.getEducationHistory();
  }

  renderEducationHistory() {
    return this.props.educationItems.map(eduItem => {
      return (
        <EducationDisplayChild eduItem={eduItem} key={eduItem.education_id} />
      );
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          <h1>Education and Training</h1>
          {!this.state.addNewButtonIsPressed ? (
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={() => this.updateState()}
            >
              <i className="fas fa-plus mr-2" />
              Add New Education/Training
            </button>
          ) : (
            <EducationForm updateState={this.updateState} />
          )}
          <div className="container">
            <FileUpload component={"edu"}/>
            </div>
          <div className="container">{this.renderEducationHistory()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    educationItems: state.education.educationItems
  };
}

export default connect(mapStateToProps, { getEducationHistory })(Education);
