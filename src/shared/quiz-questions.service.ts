import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import quizQuestions from '../assets/quiz-questions.json';

@Injectable()
export class QuizQuestionsService {
    constructor(private http: HttpClient) {
    }

    public getQuestions(): Observable<any> {
      // console.log(quizQuestions);
      return of(quizQuestions); // workaround for stackblitz to access local assets
      // return this.http.get('/assets/quiz-questions.json');
    }
}
