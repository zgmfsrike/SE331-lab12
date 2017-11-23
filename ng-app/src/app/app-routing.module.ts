import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";
import {LoginComponent} from './login/login.component';
import {NewComponent} from './students/new-component/new-component.component';
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    // path: 'newpage',
    // component: NewComponent
  },
  {path: '**', component: FileNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
