import { Component, OnInit } from '@angular/core';
import { QuizService} from '../quiz.service';
import { Vocabulary, vocabularyList } from '../data';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { TtsService } from '../tts.service'; 

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [
    trigger('questionAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class QuizComponent implements OnInit {
  question!: Vocabulary;
  answers: string[] = [];
  showNextButton: boolean = false;
  nextButtonText: string = 'Next Question';
  isCorrect: boolean = false;
  quizFinished: boolean = false;
  answerSubmitted: boolean = false; // Track if an answer is submitted
  clickedAnswer: string = ''; // Track the clicked answer

  constructor(public quizService: QuizService, private router: Router, private ttsService: TtsService) { }

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion() {
    this.question = this.quizService.getQuestion();
    this.answers = this.getShuffledAnswers(this.question);
    this.clickedAnswer = ''; // Reset clicked answer
  }

  getShuffledAnswers(question: Vocabulary): string[] {
    const wrongAnswers = vocabularyList
      .filter(vocab => vocab.categoryId === question.categoryId && vocab.koreanWord !== question.koreanWord);
    const selectedWrongAnswers = this.shuffleArray(wrongAnswers).slice(0, 3).map(vocab => vocab.koreanWord);
    const answers = [question.koreanWord, ...selectedWrongAnswers];
    return this.shuffleArray(answers);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  submitAnswer(answer: string) {
    this.isCorrect = this.quizService.checkAnswer(answer);
    this.clickedAnswer = answer; // Set the clicked answer
    this.answerSubmitted = true; // Set answer submitted state to true
    this.showNextButton = true;
    if (this.quizService.isQuizFinished()) {
      this.nextButtonText = 'Finish Quiz';
    }
  }

  nextQuestion() {
    if (this.quizService.isQuizFinished()) {
      this.quizFinished = true;
    } else {
      this.quizService.nextQuestion();
      this.showNextButton = false;
      this.answerSubmitted = false; // Reset answer submitted state
      this.loadQuestion();
    }
  }

  restartQuiz() {
    this.quizService.startQuiz(1); // Reset the quiz state
    this.router.navigate(['']); // Navigate back to the main component
  }

  readAnswer(answer: string) {
    this.ttsService.speak(answer); // Use TTS service to read the answer
  }
}