'use strict';

const routes = jest.genMockFromModule('routes');

let routeObject = Object.create(null);

function __setMockRoutes(newMockRoutes) {
  mockRoutes = Object.create(null);
  for (const rourte in newMockRoutes) {
    mockRoutes.push(rourte);
  }
}

fs.__setMockRoutes = __setMockRoutes;

module.exports = routes;
