import React from 'react';
import ReactDOM from 'react-dom';
import DisplayBirthdays from './DisplayBirthdays';

test('birthday is today', () => {
  expect(DisplayBirthdays.isBirthdayToday({"name":"Bla Bla", "birthday": new Date()}).toBe(true))
})
