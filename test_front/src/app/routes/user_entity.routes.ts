import {Routes } from "@angular/router";

export const userEntityRoute : Routes = [
  {
    path : 'list-user-entity',
    loadComponent : ()=>import('../features/user-entity/components/user-entity-list/user-entity-list.component').then((m)=>m.UserEntityListComponent)
  },
  {
    path : 'ajout-user-entity',
    loadComponent : ()=>import('../features/user-entity/components/user-entity-form/user-entity-form.component').then((m)=>m.UserEntityFormComponent)
  },
  {
    path : '',
    redirectTo : 'list-user-entity',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : 'list-user-entity',
    pathMatch : 'full'
  }
  
]