import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashModule } from './dash/dash.module';
import { MiscellaneousModule } from './zmiscellaneous/miscellaneous.module';
import { AdmModule } from './adm/adm.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashModule,
    AdmModule,
    SearchModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
