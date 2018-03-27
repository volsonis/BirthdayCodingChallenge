import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayBirthdays.css';

class DisplayBirthdays extends Component {
  constructor() {
    super();
    this.state = { birthdays: [],
      todaysBirthdays: [],
      birthdaysInTwoWeeks: [] };

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
          ageOf(birthday);
          return (getBirthdayElement(birthday))
        })

        let todaysBirthdays = data.filter((birthday) => {
          return (isBirthdayToday(birthday))
        }).map((birthday) => {
          return (getBirthdayElementWithAge(birthday))
        })

        let birthdaysInTwoWeeks = data.filter((birthday) => {
          return (isBirthdayInNextTwoWeeks(birthday))
        }).map((birthday) => {
          return (getBirthdayElementWithAge(birthday))
        })

        this.setState({birthdays: birthdays});
        this.setState({todaysBirthdays: todaysBirthdays});
        this.setState({birthdaysInTwoWeeks: birthdaysInTwoWeeks});
        
        console.log("state", this.state.birthdays);
      })
  }

  render() {
    return (
    <div>
      <h1>Todays Birthdays</h1>
      <div className="birthdays">{this.state.todaysBirthdays}</div>
      <h1>Upcoming Birthdays</h1>
      <div className="birthdays">{this.state.birthdaysInTwoWeeks}</div> 
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

function getBirthdayElementWithAge(birthday) {
  const element = (
    <div>
      <p>{birthday.name}</p>
      <p>{birthday.birthday}</p>
      <p>{birthday.name} will be {ageOf(birthday)} years old </p>
    </div>
  )
  return element;
}

function isBirthdayToday(birthday) {
  let today = new Date()
  let date = new Date(birthday.birthday)
  
  return today.getMonth() === date.getMonth() && today.getDate() === date.getDate()
}

function isBirthdayInNextTwoWeeks(birthday) {
  // make today equal start of day
  let today = new Date()
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let inTwoWeeks = new Date(new Date().setDate(today.getDate() + 14));

  let date = new Date(birthday.birthday)
  date.setFullYear(today.getFullYear());

  return date >= today && date <= inTwoWeeks;
}

function ageOf(birthdayJson) {
  // make today equal start of day
  let today = new Date()
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let todayYear = today.getFullYear()
  let birthday = new Date(birthdayJson.birthday)
  let birthdayYear = birthday.getFullYear()

  let potentialBirthday = new Date(birthday)
  potentialBirthday.setFullYear(todayYear)
  if (potentialBirthday < today) {
    potentialBirthday.setFullYear(potentialBirthday.getFullYear() + 1)
  }

  let age = potentialBirthday.getFullYear() - birthdayYear;
  return age;
}

export default DisplayBirthdays;
