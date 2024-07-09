import { Component, OnInit } from '@angular/core';
import { QuizService} from '../quiz.service';
import { Vocabulary, vocabularyList, verbsList, Verbs, verbForms, VerbForm } from '../data';
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
  questionVerb!: Verbs;
  answers: string[] = [];
  showNextButton: boolean = false;
  nextButtonText: string = 'Next Question';
  isCorrect: boolean = false;
  quizFinished: boolean = false;
  answerSubmitted: boolean = false; // Track if an answer is submitted
  clickedAnswer: string = ''; // Track the clicked answer
  verbs: Verbs[] = [];
  currentQuizMode: string = 'vocabulary';
  correctVerb: string = '';
  verbFormId: number = 0;
  verbFormName: string = '';
  correctAnswerString: string = '';

  constructor(public quizService: QuizService, private router: Router, private ttsService: TtsService) { }

  ngOnInit() {
    if (!this.quizService.getSelectedCategory()) {
      // Redirect to main component if no category is selected
      this.router.navigate(['/main']);
    } else {
      this.currentQuizMode = this.quizService.getQuizMode();
      if (this.currentQuizMode === 'vocabulary') {
        this.loadQuestion();
      } else {
        this.loadVerbQuestion();
      }
    }
  }

  loadQuestion() {
    this.question = this.quizService.getQuestion();
    this.answers = this.getShuffledAnswers(this.question);
    this.clickedAnswer = ''; // Reset clicked answer
  }

  loadVerbQuestion() {
    const randomForm = this.quizService.getRandomForm();
    this.verbFormId = randomForm.id;
    this.verbFormName = randomForm.formName;
    this.questionVerb = this.quizService.getVerbQuestion();
    this.answers = this.getShuffledVerbAnswers(this.questionVerb);
    this.clickedAnswer = ''; // Reset clicked answer
  }

  getShuffledAnswers(question: Vocabulary): string[] {
    const wrongAnswers = vocabularyList
      .filter(vocab => vocab.categoryId === question.categoryId && vocab.koreanWord !== question.koreanWord);
    const selectedWrongAnswers = this.shuffleArray(wrongAnswers).slice(0, 3).map(vocab => vocab.koreanWord);
    const answers = [question.koreanWord, ...selectedWrongAnswers];
    return this.shuffleArray(answers);
  }



  getShuffledVerbAnswers(question: Verbs): string[] {
    const verbFormKey = this.quizService.getVerbForm(this.verbFormId)[0].key;
    const wrongVerbForms: VerbForm[] = this.shuffleArray(this.quizService.getWrongVerbForms(this.verbFormId)).slice(0, 3);
    const correctAnswer = this.questionVerb[verbFormKey];
    this.correctAnswerString = correctAnswer.toString();
    var incorrectAnswers: string[] = [];

    wrongVerbForms.forEach(element => {
      incorrectAnswers.push(this.questionVerb[element.key].toString());
    });

    return this.shuffleArray([correctAnswer, ...incorrectAnswers]);
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

  submitVerbAnswer(answer: string) {
    this.isCorrect = this.quizService.checkVerbAnswer(answer, this.verbFormId);
    this.clickedAnswer = answer; // Set the clicked answer
    this.answerSubmitted = true; // Set answer submitted state to true
    this.showNextButton = true;
    if (this.quizService.isVerbQuizFinished()) {
      this.nextButtonText = 'Finish Quiz';
    }
  
  }

  nextQuestion() {
    if (this.currentQuizMode === 'vocabulary') {
      if (this.quizService.isQuizFinished()) {
        this.quizFinished = true;
      } else {
        this.quizService.nextQuestion();
        this.showNextButton = false;
        this.answerSubmitted = false; // Reset answer submitted state
        this.loadQuestion();
      }
    } else {
      if (this.quizService.isVerbQuizFinished()) {
        this.quizFinished = true;
      } else {
        this.quizService.nextQuestion();
        this.showNextButton = false;
        this.answerSubmitted = false; // Reset answer submitted state
        this.loadVerbQuestion();
      }
    }
  }

  restartQuiz() {
    this.quizService.startQuiz(1, this.currentQuizMode); // Reset the quiz state
    this.router.navigate(['']); // Navigate back to the main component
  }

  readAnswer(answer: string) {
    this.ttsService.speak(answer); // Use TTS service to read the answer
  }
}