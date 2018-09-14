import { Component, OnInit } from '@angular/core';
import {TeacherSevice} from '../../services/teacher.sevice';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
data: any;
  constructor(private teacher: TeacherSevice) { }

  ngOnInit() {
    this.getData();
  }
getData() {
    this.teacher.getTeachers().subscribe(result => {
      this.data = result;
    });
  }
}

