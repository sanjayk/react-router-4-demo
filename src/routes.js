// our route config
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


// wrap `Match` and use this everywhere instead, then when
// sub routes are added to any route it'll work
const MatchWithSubRoutes = (route) => (
  <Match {...route} render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)
