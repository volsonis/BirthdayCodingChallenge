import React from 'react';
import ReactDOM from 'react-dom';
import DisplayBirthdays from './DisplayBirthdays';

test('birthday is today', () => {
  const testBirthday = {"name":"Test Person", "birthday": new Date()}

  expect(DisplayBirthdays.isBirthdayToday(testBirthday)).toBe(true)
})

test('birthday is not today', () => {
  const testBirthday = {"name":"Test Person", "birthday": "2001-01-01"}
  
  let today = new Date();
  if(today.getMonth() === 1 && today.getDate() === 1 ) {
    testBirthday.birthday = "2001-01-02"
  }
  expect(DisplayBirthdays.isBirthdayToday(testBirthday)).toBe(false)
})
