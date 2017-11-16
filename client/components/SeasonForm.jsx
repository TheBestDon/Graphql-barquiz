import React, { Component } from "react";
import DatePicker from "./DatePicker";

class SeasonForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasonName: "",
      startDate: "",
      endDate: "",
      description: "",
      errors: []
    };
  }

  inputChangedHandler(date) {
    console.log("valuefromChild:", date.start);
    console.log("valuefromChild:", date.end);
    
    this.setState({
      startDate: date.start,
      endDate: date.end
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { seasonName, startDate, endDate, description } = this.state;

    this.props.onSubmit({ seasonName, startDate, endDate, description });
  }

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Season Name"
              value={this.state.seasonName}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <DatePicker value={this.inputChangedHandler.bind(this)} />
          <h4>
            {this.state.startDate} - {this.state.endDate}
          </h4>

          <div className="textarea">
            <textarea
              placeholder="Description"
              value={this.state.description}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="errors">
            {this.state.errors.map(error => <div key={error}>{error}</div>)}
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default SeasonForm;
