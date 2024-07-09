import { Injectable } from '@angular/core';
import { Verbs, verbsList, verbForms, VerbForm, Vocabulary, vocabularyList } from './data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestionIndex: number = 0;
  private correctAnswers: number = 0;
  private selectedCategory: number = 0;
  private questions: Vocabulary[] = [];
  private questionsVerb: Verbs[] = [];
  private verbForms = verbForms;
  private currentQuizMode = 'vocabulary';

  constructor() { }

  startQuiz(categoryId: number, quizMode: string) {
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
    this.selectedCategory = categoryId;
    this.currentQuizMode = quizMode;
    if (this.currentQuizMode === 'vocabulary') {
      this.questions = this.getShuffledQuestions();
    } else {
      this.questionsVerb = this.getShuffledVerbQuestions();
    }
  }

  getQuizMode() {
    return this.currentQuizMode;
  }

  getShuffledQuestions(): Vocabulary[] {
    let filteredVocabulary = vocabularyList.filter(item => item.categoryId === this.selectedCategory);
    return this.shuffleArray(filteredVocabulary).slice(0, 20);
  }

  getShuffledVerbQuestions(): Verbs[] {
    return this.shuffleArray(verbsList).slice(0, 20);
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

  getVerbQuestion(): Verbs {
    return this.questionsVerb[this.currentQuestionIndex];
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

  getVerbForm(formID: number): VerbForm[] {
    return this.verbForms.filter(obj => {
      return obj.id === formID
    })
  }

  getWrongVerbForms(formID: number): VerbForm[] {
    return this.verbForms.filter(obj => {
      return obj.id != formID
    })
  }

  checkVerbAnswer(selectedAnswer: string, formID: number): boolean {
    const currentQuestion = this.getVerbQuestion();
    const key = this.getVerbForm(formID)[0].key;
    const isCorrect = currentQuestion[key] === selectedAnswer;
    if (isCorrect) this.correctAnswers++;
    return isCorrect;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  isQuizFinished(): boolean {
    return this.currentQuestionIndex >= this.questions.length - 1;
  }

  isVerbQuizFinished(): boolean {
    return this.currentQuestionIndex >= this.questionsVerb.length - 1;
  }

  getScore(): number {
    return this.correctAnswers;
  }

  getRandomForm() {
    const randomIndex = Math.floor(Math.random() * this.verbForms.length);
    return this.verbForms[randomIndex];
  }
}