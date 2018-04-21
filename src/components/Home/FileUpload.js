import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "./../../ducks/userReducer";

class FileUpload extends Component {
  constructor() {
    super();

    this.state = {
      careerImages: [],
      eduImages: [],
      file: "",
      filename: "",
      filetype: "",
      displayFileUpload: false
    };
    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }




  
  updateState() {
    this.setState({ displayFileUpload: !this.state.displayFileUpload });
  }


  componentDidMount() {
    this.props.getUserInfo();
    this.getUploads();
  }
  sendToback(photo) {
    return axios.post("/api/photoUpload", photo);
  }

getUploads(){
  if(this.props.component === 'work'){
    axios.get("/api/get_uploads").then(result => {
      this.setState({careerImages: result.data})
    })
  }
  else if(this.props.component === 'edu'){
    axios.get('/api/get_edu_uploads').then(result =>{
      this.setState({eduImages: result.data})
    })
  }
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
      this.uploadPhotoToDB(response)
    });
  }

  uploadPhotoToDB(response) {
    let body = {
      img: response.data.Location
    };
    if(this.props.component === 'work'){
    axios.post("/api/add_uploads", body).then(response => {
      this.setState({careerImages: response.data})
    })}
    else if (this.props.component === "edu"){
      axios.post("/api/add_edu_uploads", body).then(response => {
        this.setState({eduImages: response.data})
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
      <div hidden={!this.props.user.display_name} className="container mr-5">
      <button
      type="button"
      className="btn btn-light mb-2"
      onClick={() => this.updateState()}
    >
      <i className="fas fa-plus mr-2" />
      {this.props.component === 'work'? "Add Resume": "Add Diploma/Certification"}
    </button>

        <form hidden={this.state.displayFileUpload === false}>
          <div className="input-group">
            <input
              className="form-control-file btn-light "
              type="file"
              onChange={this.handlePhoto}
             
            />
            <div>
             <button className="btn btn-default"onClick={this.sendPhoto}>
          Submit
        </button>
        </div>
          </div>
        </form>
       
        {this.state.file && (
          <img src={this.state.file} alt="" className="file-preview img-thumbnail" height="150px" width="150px" />
        )}

        <div className="container float-right">My Documents
          <div className="container">
          {this.props.component === 'work' ? (this.state.careerImages.map(image => {
            return <span key={image.img_url} className="container mr-2 w-25"><img src={image.img_url} className="img-thumbnail img-fluid" max-height="auto" width="10%"/></span>
          }))
        :
         ( this.state.eduImages.map(image => {
          return <span key={image.img_url} className="container mr-2 w-25"><img src={image.img_url} className="img-thumbnail img-fluid" max-height="auto" width="10%"/> </span>
        }))
      }
          </div>
        </div>
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
