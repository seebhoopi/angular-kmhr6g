import { Component, OnInit } from '@angular/core';
import {QuizQuestionsService} from '../../../shared/quiz-questions.service';
import {QuizQuestion} from './quiz-question.model';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  correctCount = 0;
  currentQuestion = 0;
  progressValue = 0;
  questionCount;
  questions$;
  selectedOption;
  

  // image urls overridden by Data URLs in constructor for stackblitz workaround
  constructor(private quizQuestionsService: QuizQuestionsService) {
    
  }

  ngOnInit() {
    this.questions$ = this.quizQuestionsService.getQuestions();
    this.questions$.subscribe((questions: QuizQuestion[]) => {
        this.questionCount = questions['quiz-questions'].length;
        this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
    });
  }

  nextQuestion(answer: number) {
    if (answer === this.selectedOption) {this.correctCount++; }
    delete this.selectedOption;
    this.currentQuestion++;
    this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
  }
}
