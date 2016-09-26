import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import App from '../src/App';
//import { Sandwiches, Tacos, Bus, Cart, RouteConfigExample } from '../src/App';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it ('renders parent routes', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsAnyMatchingElements([
            <Link to="/tacos">Tacos</Link>
        ])).toBe(true);
});
