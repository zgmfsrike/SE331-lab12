import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {StudentsComponent} from './list/students.component';
import {StudentsAddComponent} from './add/students.add.component';
import {StudentsViewComponent} from './view/students.view.component';
import {NewComponent} from './new-component/new-component.component';

const studentRoutes: Routes = [
  {path: 'detail/:id',component:StudentsViewComponent},
  {path: 'view', component: StudentsViewComponent
    ,
    data: {
      student: {
        "id": 2,
        "studentId": "SE-001",
        "name": "Prayuth",
        "surname": "The minister",
        "gpa": 3.59,
        "image": "images/tu.jpg",
        "featured": false,
        "penAmount": 15,
        "description": "The great man ever!!!!"
      }
    }
  },
  {path: 'add', component: StudentsAddComponent},
  {path: 'list', component: StudentsComponent},
  {path: 'new',component:NewComponent},
  {
    path: '',
    redirectTo: '/new',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {
}
