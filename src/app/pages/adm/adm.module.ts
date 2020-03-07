import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NbCardModule,
  NbInputModule,
  NbButtonModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AdmComponent } from './adm.component';

const routes: Routes = [{
  path: '',
  component: AdmComponent,
}];

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    AdmComponent,
  ],
})
export class AdmModule { }
