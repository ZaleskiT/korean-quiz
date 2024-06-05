import { Injectable } from '@angular/core';
import { Vocabulary, vocabularyList } from './data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestionIndex: number = 0;
  private correctAnswers: number = 0;
  private selectedCategory: number = 0;
  private questions: Vocabulary[] = [];

  constructor() { }

  startQuiz(categoryId: number) {
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
    this.selectedCategory = categoryId;
    this.questions = this.getShuffledQuestions();
  }

  getShuffledQuestions(): Vocabulary[] {
    let filteredVocabulary = vocabularyList.filter(item => item.categoryId === this.selectedCategory);
    return this.shuffleArray(filteredVocabulary).slice(0, 20);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getQuestion(): Vocabulary {
    return this.questions[this.currentQuestionIndex];
  }

  getSelectedCategory(): Number {
    return this.selectedCategory;
  }

  checkAnswer(selectedAnswer: string): boolean {
    const currentQuestion = this.getQuestion();
    const isCorrect = currentQuestion.koreanWord === selectedAnswer;
    if (isCorrect) this.correctAnswers++;
    return isCorrect;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  isQuizFinished(): boolean {
    return this.currentQuestionIndex >= this.questions.length - 1;
  }

  getScore(): number {
    return this.correctAnswers;
  }
}