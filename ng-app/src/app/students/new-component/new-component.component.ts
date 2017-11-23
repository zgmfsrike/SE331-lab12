import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentsDataService} from '../../service/students-data.service';
import {Router} from '@angular/router';
import {Student} from '../student';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponent implements OnInit {

  student: any = {};

  constructor(private studentDataService: StudentsDataService, private router: Router) {
  };

  ngOnInit() {
    this.student = new Student();
  }

  upQuantity(student: Student) {
    student.penAmount++;
  }

  downQuantity(student: Student) {
    if (student.penAmount > 0)
      student.penAmount--;
  }

  @ViewChild('fileInput') inputEl: ElementRef;

  addStudent(student: Student) {
    let result: Student;
    console.log(student)
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.studentDataService.addStudent(student, inputEl.files.item(0))
      .subscribe(resultStudent => {
        result = resultStudent
        if (result != null) {
          this.router.navigate(['/list']);
        } else {
          alert('Error in adding the student');
        }
      });
  }


  onFileChange(event, student: any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    student.image = filename;
  }

}
