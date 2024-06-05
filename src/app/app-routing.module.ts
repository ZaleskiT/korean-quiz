import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route
  { path: 'main', component: MainComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '/main' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }