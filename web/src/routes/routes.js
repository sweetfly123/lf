import React from 'react';
import {ServiceList} from '../router/find-service/service-list';
import {ServiceDetails} from '../router/find-service/service-details';
import {ExpertsList} from '../router/find-experts/experts-list';
import {ExpertsDetails} from '../router/find-experts/experts-details';
import {FindBusiness} from '../router/find-business/find-business';
import {BusinessDetails} from '../router/find-business/business_details';

import {Route} from "react-router-dom";

export const routes = [
  {
    key: 'service',
    path: '/service',
    component: ServiceList,
    routes:[
      {
        key: 'service_detail',
        path: '/service/detail:id',
        component: ServiceDetails
      },
    ]
  },

  {
    key: 'experts',
    path: '/experts',
    component: ExpertsList,
    routes:[
      {
        key: 'experts_details',
        path: '/experts/details:id',
        component: ExpertsDetails
      }
    ]
  },
  {
    key: 'business',
    path: '/business',
    component: FindBusiness,
    routes:[
      {
        key: 'business_details',
        path: '/business/details:id',
        component:BusinessDetails
      }
    ]
  }
];

export function RouteWithSubRoutes(route){
  return (
    <Route
      path={route.path}
      render={props=>(
        <route.component key={route.key} {...props} routes={route.routes}/>
      )}
    >
    </Route>
  )
}