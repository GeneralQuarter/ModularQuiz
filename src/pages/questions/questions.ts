import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Question} from "../../app/question";
import {QuestionService} from "../../app/question.service";

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
  providers: [QuestionService]
})
export class QuestionsPage {
  questions: Question[];
  currentQuestion: Question;

  constructor(public navCtrl: NavController, questionService: QuestionService) {
    this.questions = questionService.questions;
    this.currentQuestion = this.questions[0];
  }

  nextQuestion() : void {

  }

  answerSubmit() : void {

  }



}
