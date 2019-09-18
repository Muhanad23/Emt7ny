import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StudentExamComponent } from './student-exam/student-exam.component';
import { CorrectionListComponent } from './correction-list/correction-list.component';
import { CorrectExamComponent } from './correct-exam/correct-exam.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'AddQuestion/:examID', component: AddQuestionComponent, canActivate : [BeforeLoginService] },
  {path: 'previewExam/:username/:id', component: PreviewComponent, canActivate: [AfterLoginService] },
  {path: 'profile/:username', component: ProfileComponent, canActivate: [AfterLoginService] },
  {path: 'editProfile/:username', component: EditProfileComponent, canActivate: [AfterLoginService] },
  {path: 'exam/:examId', component: StudentExamComponent},
  {path: 'correctionList/:examId', component: CorrectionListComponent, canActivate: [AfterLoginService] },
  {path: 'correctExam/:examId/:username', component: CorrectExamComponent, canActivate: [AfterLoginService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
