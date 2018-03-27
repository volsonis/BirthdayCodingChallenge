import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayBirthdays.css';

class DisplayBirthdays extends Component {
  constructor() {
    super();
    this.state = { birthdays: [],
      todaysBirthdays: [] };

  }

  componentDidMount() {
    fetch('http://localhost:3001/birthdays', {
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }
  })
      .then(results => {
        console.log("FETCH")
        return results.json()

      }).then(data => {
        
        let birthdays = data.map((birthday) => {
          return (getBirthdayElement(birthday))
        })

        let todaysBirthdays = data.filter((birthday) => {
          return (isBirthdayToday(birthday))
        }).map((birthday) => {
          return (getBirthdayElement(birthday))
        })

        this.setState({birthdays: birthdays});
        this.setState({todaysBirthdays: todaysBirthdays});
        
        console.log("state", this.state.birthdays);
      })
  }

  render() {
    return (
    <div>
      <h1>Todays Birthdays</h1>
      <div className="birthdays">{this.state.todaysBirthdays}</div>
      <h1>All Birthdays</h1>
      <div className="birthdays">{this.state.birthdays}</div> 
    </div>);
  }
  
}

function getBirthdayElement(birthday) {
  const element = (
    <div>
      <p>{birthday.name}</p>
      <p>{birthday.birthday}</p>
    </div>
  )
  return element;
}

function isBirthdayToday(birthday) {
  let today = new Date()
  let date = new Date(birthday.birthday)
  
  return today.getMonth() === date.getMonth() && today.getDate() === date.getDate()
}

export default DisplayBirthdays;
