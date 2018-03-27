import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayBirthdays.css';

class DisplayBirthdays extends Component {
  constructor() {
    super();
    this.state = { birthdays: [] };

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

        this.setState({birthdays: birthdays});
        console.log("state", this.state.birthdays);
      })
  }

  render() {
    return (<div className="birthdays">{this.state.birthdays}</div>);
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

export default DisplayBirthdays;
