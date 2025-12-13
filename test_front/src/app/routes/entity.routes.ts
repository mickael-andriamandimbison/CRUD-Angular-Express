import { Routes } from '@angular/router';

export const entityRoute: Routes = [
  {
    path: 'list-entity',
    loadComponent: () =>
      import(
        '../features/entity/components/entity-list/entity-list.component'
      ).then((m) => m.EntityListComponent),
  },
  {
    path: 'ajout-entity',
    loadComponent: () =>
      import(
        '../features/entity/components/entity-form/entity-form.component'
      ).then((m) => m.EntityFormComponent),
  },
  {
    path: 'modifie-entity/:id',
    loadComponent: () =>
      import(
        '../features/entity/components/entity-form/entity-form.component'
      ).then((m) => m.EntityFormComponent),
  },
  {
    path: '',
    redirectTo: 'list-user',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'list-user',
    pathMatch: 'full',
  },
];
