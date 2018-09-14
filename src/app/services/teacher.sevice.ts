import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable()
export class TeacherSevice {
    teacherUrl = 'teacher-api/teachers';  // URL to web api
    constructor(private http: HttpClient){
    }

    getteacher(){
        return this.http.get(this.teacherUrl);
    }
}
