import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  startQuiz() {
      this.router.navigateByUrl('/quiz-question');
  }
}
