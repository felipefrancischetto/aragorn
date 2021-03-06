import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NbCardModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../@theme/theme.module';
import { SearchComponent } from './search.component';

const routes: Routes = [{
  path: '',
  component: SearchComponent,
  // children: [{
  //   path: 'tinymce',
  //   component: TinyMCEComponent,
  // }, {
  //   path: 'ckeditor',
  //   component: CKEditorComponent,
  // }],
}];

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    CKEditorModule,
  ],
  declarations: [
    SearchComponent,
  ],
})
export class SearchModule { }
