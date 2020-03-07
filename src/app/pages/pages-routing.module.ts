import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashComponent } from './dash/dash.component';
import { NotFoundComponent } from './zmiscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashComponent,
    },
    {
      path: 'search',
      loadChildren: () => import('./search/search.module')
        .then(m => m.SearchModule),
    },
    {
      path: 'adm',
      loadChildren: () => import('./adm/adm.module')
        .then(m => m.AdmModule),
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
