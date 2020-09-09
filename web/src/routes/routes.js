import React from 'react';
import {FindService} from '../router/find-service/find-service';
import {FindExperts} from '../router/find-exports/find-experts';
import {FindBusiness} from '../router/find-business/find-business';
import {ServiceDetails} from '../router/find-service/service-details';

import {Route} from "react-router-dom";

export const routes = [
  {
    key: 'home',
    path: '/home',
    component: FindService,
    routes:[
      {
        key: 'home_details',
        path: '/home/details',
        component: ServiceDetails
      },
    ]
  },

  {
    key: 'experts',
    path: '/experts',
    component: FindExperts
  },
  {
    key: 'business',
    path: '/business',
    component: FindBusiness
  }
];

export function RouteWithSubRoutes(route){
  return (
    <Route
      path={route.path}
      render={props=>(
        <route.component {...props} routes={route.routes}/>
      )}
    >
    </Route>
  )
}