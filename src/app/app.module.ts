import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { EditComponent } from './edit/edit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StudentExamComponent } from './student-exam/student-exam.component';
import { CorrectionListComponent } from './correction-list/correction-list.component';
import { CorrectExamComponent } from './correct-exam/correct-exam.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddQuestionComponent,
    PreviewComponent,
    ProfileComponent,
    EditComponent,
    EditProfileComponent,
    StudentExamComponent,
    CorrectionListComponent,
    CorrectExamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
