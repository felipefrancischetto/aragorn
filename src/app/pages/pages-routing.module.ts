import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashComponent } from './dash/dash.component';
import { NotFoundComponent } from './zmiscellaneous/not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { AdmComponent } from './adm/adm.component';

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
      component: SearchComponent,
    },
    {
      path: 'adm',
      component: AdmComponent,
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
