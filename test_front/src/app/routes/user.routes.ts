import {Routes } from "@angular/router";

export const userRoute : Routes = [
  {
    path : 'list-user',
    loadComponent : ()=>import('../features/user/components/user-list/user-list.component').then((m)=>m.UserListComponent)
  },
  {
    path : 'ajout-user',
    loadComponent : ()=>import('../features/user/components/user-form/user-form.component').then((m)=>m.UserFormComponent)
  },
  {
    path : '',
    redirectTo : 'list-user',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : 'list-user',
    pathMatch : 'full'
  }
  
]