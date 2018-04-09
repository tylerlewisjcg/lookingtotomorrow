import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import { connect } from "react-redux";
import EducationForm from "./EducationForm";
import EducationDisplayChild from "./EducationDisplayChild";
import { getEducationHistory } from "./../../ducks/educationReducer";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewButtonIsPressed: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ addNewButtonIsPressed: !this.state.addNewButtonIsPressed });
  }
  componentDidMount() {
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
        <h1>Education and Training</h1>
        {/* // {this.props.educationItems && ...more code} */}
        <div>{this.renderEducationHistory()}</div>
        {!this.state.addNewButtonIsPressed ? (
          <button onClick={() => this.updateState()}>
            Add New Education/Training
          </button>
        ) : (
          <EducationForm updateState={this.updateState} />
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

export default connect(mapStateToProps, { getEducationHistory })(Education);
