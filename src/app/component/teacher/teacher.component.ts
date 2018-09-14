import { Component, OnInit } from '@angular/core';
import {TeacherSevice} from '../../services/teacher.sevice';
import {HttpClient, HttpParams} from '@angular/common/http';
import {TeacherModel} from '../../model/teacher-model';
import {TemplateRef} from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
data: any;
value: any;
// modalRef: BsModalRef;
teachers: TeacherModel [];
addteachers: TeacherModel = { name: '' };
  constructor(private teacher: TeacherSevice) { }

  ngOnInit() {
    this.getData();
  }
    // openModal(template: TemplateRef <any>, teacher: TeacherModel) {
    //     this.addteachers.name = '';
    //     this.addteachers = JSON.parse(JSON.stringify(hero))
    //     this.modalRef = this.modalService.show(template);
    // }

    getData() {
    this.teacher.getTeachers().subscribe(result => {
      this.data = result;
    });
  }
  addteacher() {
    const newTeacher: TeacherModel = { name: 'asasasas'};
    this.teacher.addTeacher(newTeacher).subscribe( value => this.teachers.push(value));
  }
}

