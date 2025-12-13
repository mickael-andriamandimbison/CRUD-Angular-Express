import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./routes/user.routes').then((r) => r.userRoute),
  },
  {
    path: 'entity',
    loadChildren: () =>
      import('./routes/entity.routes').then((r) => r.entityRoute),
  },
  {
    path: 'user-entity',
    loadChildren: () =>
      import('./routes/user_entity.routes').then((r) => r.userEntityRoute),
  },

  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];
