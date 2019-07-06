import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import {MaterialModule} from '../../core/material.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [QuizQuestionComponent],
  imports: [
    CommonModule, FormsModule, MaterialModule, RouterModule
  ]
})
export class QuizModule { }
