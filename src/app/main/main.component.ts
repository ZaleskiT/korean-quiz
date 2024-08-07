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
    { id: 17, name: 'Level 1 Class P.16 배가 아파서 병원에 가요' },
    { id: 16, name: 'Level 1 Class P.15 오늘 날씨가 정말 덥네요' },
    { id: 15, name: 'Level 1 Class P.14 저녁 7시에 만날까요?' },
    { id: 14, name: 'Level 1 Class P.13 버스로 공항에 가요' },
    { id: 13, name: 'Level 1 Class P.12 이번 휴가에 뭐 할 거예요?' },
    { id: 12, name: 'Level 1 Class P.11 어버이날에 부모님께 꽃을 드려요' },
    { id: 11, name: 'Level 1 Class P.10 아버지는 요리를 잘하세요' },
    { id: 10, name: 'Level 1 Class P.9 지난 주말에 친구를 만났어요' },
    { id: 9, name: 'Level 1 Class P.8 칫솔하고 치약을 삽니다' },
    { id: 8, name: 'Level 1 Class P.7 김치찌개 하나 주세요' },
    { id: 7, name: 'Level 1 Class P.6 9시부터 6시까지 일해요' },
    { id: 6, name: 'Level 1 Class P.5 오늘은 5월 5일이에요' },
    { id: 5, name: 'Level 1 Class P.4 랗흐만 씨가 식당에 가요' },
    { id: 4, name: 'Level 1 Class P.3 한국어를 배워요' },
    { id: 3, name: 'Level 1 Class P.2 방에 책상이 있어요' },
    { id: 2, name: 'Level 1 Class P.1 안녕하세요?' },
    { id: 1, name: 'Level 0 Class' }
  ];
  selectedCategoryMain: number = 17

  constructor(private quizService: QuizService, private router: Router) { }

  startQuiz(currentQuizMode: string) {
    this.quizService.startQuiz(Number(this.selectedCategoryMain), currentQuizMode);
    this.router.navigate(['/quiz']);
  }
}