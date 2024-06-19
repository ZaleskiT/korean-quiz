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
    { id: 7, name: 'Level 1 Class P.6 9시부터 6시까지 일해요' },
    { id: 6, name: 'Level 1 Class P.5 오늘은 5월 5일이에요' },
    { id: 5, name: 'Level 1 Class P.4 랗흐만 씨가 식당에 가요' },
    { id: 4, name: 'Level 1 Class P.3 한국어를 배워요' },
    { id: 3, name: 'Level 1 Class P.2 방에 책상이 있어요' },
    { id: 2, name: 'Level 1 Class P.1 안녕하세요?' },
    { id: 1, name: 'Level 0 Class' }
  ];
  selectedCategoryMain: number = 7;

  constructor(private quizService: QuizService, private router: Router) { }

  startQuiz() {
    this.quizService.startQuiz(Number(this.selectedCategoryMain));
    this.router.navigate(['/quiz']);
  }
}