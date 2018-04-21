import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import axios from "axios";
class Motivations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      why: "",
      interests: "",
      priorities: "",
      favorite: "",
      leastFavorite: "",
      checkForExisting: 0,
      confirmationToggled: false
    };
  }
  componentDidMount() {
    axios.get("/api/get_motivations").then(response => {
      if (response.data.length == 0) {
        this.setState({
          why: "",
          interests: "",
          priorities: "",
          favorite: "",
          leastFavorite: "",
          checkForExisting: 0
        });
      } else {
        this.setState({
          why: response.data[0].why_im_here,
          interests: response.data[0].interests,
          priorities: response.data[0].job_priorities,
          favorite: response.data[0].favorite_thing,
          leastFavorite: response.data[0].least_favorite_thing,
          checkForExisting: response.data.length
        });
      }
    });
  }
  handleFormPost() {
    let body = {
      why: this.state.why,
      interests: this.state.interests,
      priorities: this.state.priorities,
      favorite: this.state.favorite,
      leastFavorite: this.state.leastFavorite
    };
    axios.post("/api/add_motivations", body).then(response => {
      this.setState({
        why: response.data[0].why_im_here,
        interests: response.data[0].interests,
        priorities: response.data[0].job_priorities,
        favorite: response.data[0].favorite_thing,
        leastFavorite: response.data[0].least_favorite_thing,
        checkForExisting: response.data.length
      });
    });
  }
  handleFormEdit() {
    let body = {
      why: this.state.why,
      interests: this.state.interests,
      priorities: this.state.priorities,
      favorite: this.state.favorite,
      leastFavorite: this.state.leastFavorite
    };
    axios.put("/api/edit_motivations", body).then(response => {
      this.setState({
        why: response.data[0].why_im_here,
        interests: response.data[0].interests,
        priorities: response.data[0].job_priorities,
        favorite: response.data[0].favorite_thing,
        leastFavorite: response.data[0].least_favorite_thing,
        checkForExisting: response.data.length
      });
    });
    this.setState({
      confirmationToggled: true
    })
    setTimeout(() => {
      this.confirmationToggle()
    }, 1500);
  }
confirmationToggle(){
  this.setState({
    confirmationToggled: false
  })
}


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          <h1>My Motivations</h1>
          <form className="">
            <div className="form-group">
              <label htmlFor="why">Why am i at my current job?</label>
              <textarea
                id="why"
                className="form-control"
                name="why"
                value={this.state.why}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="interests">What are my interests/passions?</label>
              <textarea
                id="interests"
                className="form-control"
                name="interests"
                value={this.state.interests}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priorities">
                What are my priorities from a job?
              </label>
              <textarea
                id="priorities"
                className="form-control"
                name="priorities"
                value={this.state.priorities}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="favorite">
                What is my favorite thing about my current job?
              </label>
              <textarea
                id="favorite"
                className="form-control"
                name="favorite"
                value={this.state.favorite}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="leastFavorite">
                What is my least favorite thing about my current job?
              </label>
              <textarea
                id="leastFavorite"
                className="form-control"
                name="leastFavorite"
                value={this.state.leastFavorite}
                onChange={e => this.handleChange(e)}
              />
            </div>
            {this.state.checkForExisting === 0 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.handleFormPost();
                }}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className={this.state.confirmationToggled === false ? "btn btn-primary": "btn btn-success"}
                onClick={() => {
                  this.handleFormEdit();
                }}
              >
              {this.state.confirmationToggled === false ? 'Update': 'Update Successful'}
              
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Motivations;
