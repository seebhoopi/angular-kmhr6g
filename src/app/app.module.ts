import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {QuizModule} from '../features/quiz/quiz.module';
import {AppRoutingModule} from '../router/router.module';
import {MaterialModule} from '../core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule,
      MaterialModule, QuizModule, SharedModule],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
