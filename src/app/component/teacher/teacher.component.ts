import { Component, OnInit } from '@angular/core';
import {TeacherSevice} from  '../../services/teacher.sevice';
import {HttpClient, HttpParams} from  '@angular/common/http';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getData()
  }
getData(){
    this.teacher.getData().s

  }
}
