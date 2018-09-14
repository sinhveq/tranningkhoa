import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { TeacherModel } from '../model/teacher-model';

import {environment} from '../../environments/environment';
@Injectable()
export class TeacherSevice {
    teacherUrl = 'teacher-api/teachers';  // URL to web api
    constructor(private http: HttpClient) {
    }

    getTeachers() {
        return this.http.get(this.teacherUrl);
    }

    addTeacher(teacher: TeacherModel) {
        return this.http.post<TeacherModel>(environment.teacherUrl, teacher , environment.httpOptions);
    }
}
