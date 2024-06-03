import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Category } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  categories = [
    { id: 2, name: 'Level 1 Class P.1' },
    { id: 1, name: 'Level 0 Class' }
  ];
  selectedCategoryMain: number = 2;

  constructor(private quizService: QuizService, private router: Router) { }

  startQuiz() {
    this.quizService.startQuiz(Number(this.selectedCategoryMain));
    this.router.navigate(['/quiz']);
  }
}