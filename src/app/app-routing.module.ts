import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'AddQuestion', component: AddQuestionComponent},
  {path: 'previewExam', component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
