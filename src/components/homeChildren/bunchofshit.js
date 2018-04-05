getWorkHistory() {
    axios.get( '/api/get_work_history' )
        .then( response => {
            console.log( response.data )
            this.setState({
                jobs: response.data
            })
        } )
}




deleteWorkHistoryItem( id ) {
    axios.delete( `/api/delete_work_history_item/${id}` )
        .then( () => {
            this.getWorkHistory()
        })
}




  




handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.state.workHistoryItems.push({
        company: this.state.company,
        job_title: this.state.job_title,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        job_responsibilities: this.state.job_responsibilities,
        notable_achievements: this.state.notable_achievements,
        salary: this.state.salary
    })
    this.setState({ addNewButtonIsPressed: false });
}