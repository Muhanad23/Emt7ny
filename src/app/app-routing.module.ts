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

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'AddQuestion/:examID', component: AddQuestionComponent},
  {path: 'previewExam/:username/:id', component: PreviewComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'editProfile/:username', component: EditProfileComponent},
  {path: 'exam/:examId', component: StudentExamComponent},
  {path: 'correctionList/:examId', component: CorrectionListComponent},
  {path: 'correctExam/:examId/:username', component: CorrectExamComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
