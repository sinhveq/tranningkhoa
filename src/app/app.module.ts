import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import  {TeacherSevice} from './services/teacher.sevice';
import  {TeacherApiService} from './teacher-api/teacher-api.service';
import { TeacherComponent } from './component/teacher/teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,

      HttpClientInMemoryWebApiModule.forRoot(
          TeacherApiService
      ),
      HttpClientModule
  ],
  providers: [TeacherSevice],
    bootstrap: [AppComponent]
})
export class AppModule { }
