import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../src/App';
import { Sandwiches, Tacos, Bus, Cart, RouteConfigExample } from '../src/App';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it ('renders parent routes', () => {
  const routes = [
    { pattern: '/sandwiches',
      component: Sandwiches
    },
    { pattern: '/tacos',
      component: Tacos,
      routes: [
        { pattern: '/tacos/bus',
          component: Bus
        },
        { pattern: '/tacos/cart',
          component: Cart
        }
      ]
    }
  ]
  let routing = TestUtils.renderIntoDocument( React.createElement(RouteConfigExample)  );
  //expect(routing.length).toEqual(1);
});
