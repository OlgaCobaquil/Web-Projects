import jasmineEnzyme from 'jasmineEnzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Addition operation', function () {
    it('adds two numbers together', function () {
expect(1 + 2).toEqual(3);
    });        
});

