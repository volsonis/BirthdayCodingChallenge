import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './BirthdaysForm.css';


class BirthdaysForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', bday: moment() };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleDateChange(date) {
    this.setState({ bday: date });
  }

  handleSubmit(event) {
    alert('A bday was submitted: ' + this.state.name + ' ' + this.state.bday);

    // additional validation logic can go here

    let newBday = { "name": this.state.name, "birthday": this.state.bday.format('YYYY-MM-DD') }

    fetch('http://localhost:3001/birthdays', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBday)
    })

    event.preventDefault();
  }

  handleDelete(event) {
    alert('A bday was deleted: ' + this.state.name);

    // additional validation logic can go here

    let person = {"name": this.state.name}
    
    fetch('http://localhost:3001/birthdays', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person)
    })

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              Birthday:
          <DatePicker selected={this.state.bday} onSelected={this.handleDateChange} onChange={this.handleDateChange} dateformat="YYYY-MM-DD" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <form onSubmit={this.handleDelete}>
            <label>
              Name:
        <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}