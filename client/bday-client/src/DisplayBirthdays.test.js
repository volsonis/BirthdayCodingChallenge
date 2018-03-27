import React from 'react';
import ReactDOM from 'react-dom';
import DisplayBirthdays from './DisplayBirthdays';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayBirthdays />, div);
  ReactDOM.unmountComponentAtNode(div);
});
