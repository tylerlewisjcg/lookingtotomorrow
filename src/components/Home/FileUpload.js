import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "./../../ducks/userReducer";

class FileUpload extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      file: "",
      filename: "",
      filetype: ""
    };
    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }

  componentDidMount() {
    this.props.getUserInfo();
  }
  sendToback(photo) {
    return axios.post("/api/photoUpload", photo);
  }

  handlePhoto(event) {
    const reader = new FileReader(),
      file = event.target.files[0],
      _this = this;

    reader.onload = photo => {
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type
      });
    };
    reader.readAsDataURL(file);
  }

  sendPhoto(event) {
    event.preventDefault();
    let stuffToSend = {
      file: this.state.file,
      filename: this.state.filename,
      filetype: this.state.filetype
    };
    this.sendToback(stuffToSend).then(response => {
      console.log("Upload response", response.data);
      this.uploadPhotoToDB(response);
    });
  }

  uploadPhotoToDB(response) {
    let body = {
      img: response.data.Location
    };
    if(this.props.component === 'work'){
    axios.post("/api/add_uploads", body).then(response => {
    })}
    else if (this.props.component === "edu"){
      axios.post("/api/add_edu_uploads", body).then(response => {
      })
    }
    else {
      console.log('props not passed correctly')
    }
    this.setState({file: "",
    filename: "",
    filetype: ""})
  }

  render() {
    this.state.file && console.log(this.state.photo);
    return (
      <div hidden={!this.props.user.display_name}>
        <form>
          <div className="form-group">
            <label htmlFor="formControlFile">Upload Resume</label>
            <input
              className="form-control-file btn-secondary"
              id="formControlFile"
              type="file"
              onChange={this.handlePhoto}
            />
          </div>
        </form>
        <button className="secondary" onClick={this.sendPhoto}>
          Submit
        </button>
        {this.state.file && (
          <img src={this.state.file} alt="" className="file-preview" />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(FileUpload);
