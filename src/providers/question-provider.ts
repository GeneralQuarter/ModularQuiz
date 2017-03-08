import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Question} from "./Question";
import {Answer} from "./Answer";

/*
 Generated class for the QuestionProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class QuestionProvider {
  questionApiUrl: string = "http://gaming.is.free.fr/modularquiz/questions.json";
  questions: Question[];

  constructor(public http: Http) {}

  load(): Promise<Question[]> {
    return new Promise(resolve => {
      if (this.questions) {
        return this.questions;
      } else {
        this.questions = [];
        this.http.get(this.questionApiUrl)
          .map(res => res.json())
          .subscribe(data => {
            for(let value of data) {

              let answers: Answer[] = [];
              for(let a of value.answers) {
                let answer: Answer = new Answer(a.option, a.message, a.correct);
                answers.push(answer);
              }

              let question: Question = new Question(
                value.questionNumber,
                value.text,
                answers,
                value.answerText
              );
              this.questions.push(question);
            }

            resolve(this.questions);
          });
      }
    });
  }

}
