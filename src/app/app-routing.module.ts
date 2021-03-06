import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  {
    path:'questions', component: QuestionsComponent
  },
  {
  path:'mainapp' , component: MainContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
