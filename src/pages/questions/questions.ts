import {Component, ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

import {NavController, ViewController} from 'ionic-angular';
import {Question} from "../../providers/Question";
import {EndPage} from "../end/end";
import {QuestionProvider} from "../../providers/question-provider";
import {Answer} from "../../providers/Answer";

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
  providers: [QuestionProvider],
})
export class QuestionsPage {
  @ViewChild(Slides) slides: Slides;

  questions: Question[];
  currentQuestion: Question;
  isAnswerCorrect: boolean;
  answerIndex: number;
  totalQuestions: number;
  totalAnswered: number;

  constructor(public navCtrl: NavController,
              private viewCtrl: ViewController,
              private questionProvider: QuestionProvider
  ) {
    this.questions = [];
    this.currentQuestion = new Question(0, "", [new Answer("", "", true)], "");
    this.totalQuestions = this.questions.length;
    this.totalAnswered = 0;
    this.answerIndex = 0;

    questionProvider.load().then(questions => {
      this.questions = questions.reverse();
      this.totalQuestions = this.questions.length;
      this.nextQuestion();
    })
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  nextQuestion(): void {
    let question: Question = this.questions.pop();
    if (question == undefined) {
      this.navCtrl.push(EndPage);
    } else {
      this.currentQuestion = question;
      this.isAnswerCorrect = false;
      this.totalAnswered++;
      if (this.slides != undefined) {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
      }
    }
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  answerClick(answer: Answer): void {
    this.isAnswerCorrect = answer.correct;
    this.answerIndex = this.currentQuestion.getIndexOfAnswer(answer);
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
}
