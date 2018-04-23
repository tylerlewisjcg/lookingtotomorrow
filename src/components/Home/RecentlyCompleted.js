import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
class RecentlyCompleted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentlyCompleted: []
    };
  }
  componentDidMount() {
    this.getCompleted();
  }

  getCompleted() {
    axios.get("/api/recently_completed").then(response => {
      this.setState({ recentlyCompleted: response.data });
    });
  }

  renderMapped() {
    return this.state.recentlyCompleted.map(completedItem => {
      return (
        <div key={completedItem.action_item_id}>
          <span className="mr-2 font-weight-bold">
            {completedItem.action_item_description}
          </span>
          <span>
            {completedItem.completion_date
              ? `Completed on: ${moment.utc(completedItem.completion_date).format(
                  "MMM DD, YYYY"
                )}`
              : ""}
          </span>{" "}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="mb-4">
        <h2>Recently Completed</h2>

        <div>{this.renderMapped()} </div>
      </div>
    );
  }
}

export default RecentlyCompleted;
