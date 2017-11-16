import React, { Component } from "react";
import InfiniteCalendar, { Calendar, withRange } from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import "normalize.css";

const CalendarWithRange = withRange(Calendar);

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: ""
    };
  }

  handleSelect(date) {
    console.log(date.start);
    console.log(date.end);
    this.setState({
      startDate: date.start,
      endDate: date.end
    });
    this.props.value(date);
  }
  render() {
    return (
      <div>
        <InfiniteCalendar
          Component={CalendarWithRange}
          selected={{
            start: new Date(),
            end: new Date()
          }}
          locale={{
            headerFormat: "MMM Do"
          }}
          onSelect={this.handleSelect.bind(this)}
        />
      </div>
    );
  }
}

module.exports = DatePicker;
