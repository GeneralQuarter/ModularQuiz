import {Component, ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';

import { NavController, ViewController } from 'ionic-angular';
import { Question } from "../../providers/question";
import {QuestionService} from "../../providers/question.service";
import {EndPage} from "../end/end";

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
  providers: [QuestionService],
})
export class QuestionsPage {
  @ViewChild(Slides) slides: Slides;

  questions: Question[];
  currentQuestion: Question;
  isAnswerCorrect: boolean;
  answerIndex : number;
  totalQuestions: number;
  totalAnswered: number;

  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController,
    private questionService: QuestionService) {
    this.questions = questionService.questions.reverse();
    this.totalQuestions = this.questions.length;
    this.totalAnswered = 0;
    this.nextQuestion();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  nextQuestion() : void {
    let question : Question = this.questions.pop();
    if(question == undefined) {
      this.navCtrl.push(EndPage);
    } else {
      this.currentQuestion = question;
      this.isAnswerCorrect = false;
      this.totalAnswered++;
      if(this.slides != undefined) {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
      }
    }
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  answerClick(value: string) : void {
    this.answerIndex = this.currentQuestion.answers.indexOf(value);
    this.isAnswerCorrect = this.answerIndex === this.currentQuestion.answerRightIndex;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
}
