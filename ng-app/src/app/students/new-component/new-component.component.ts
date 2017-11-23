import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentsDataService} from '../../service/students-data.service';
import {Router} from '@angular/router';
import {Student} from '../student';
import {user} from '../user';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponent implements OnInit {

  user: any = {};

  constructor() {
  };

  ngOnInit() {
    this.user = new user();
  }



}
