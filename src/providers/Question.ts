import {Answer} from "./Answer";
export class Question {
  private _questionNumber: number;
  private _text: string;
  answers: Answer[];
  private _answerText: string;

  constructor(questionNumber: number,
              text: string,
              answers: Answer[],
              answerText: string) {
    this._questionNumber = questionNumber;
    this._text = text;
    this.answers = answers;
    this._answerText = answerText;
  }

  get questionNumber(): number {
    return this._questionNumber;
  }

  get text(): string {
    return this._text;
  }

  get answerText(): string {
    return this._answerText;
  }

  getIndexOfAnswer(answer: Answer): number {
    return this.answers.indexOf(answer);
  }

  getRightAnswersOptionsText(): string {
    let answersOptions: string[] = [];
    for (let answer of this.answers) {
      if(answer.correct) {
        answersOptions.push(answer.option);
      }
    }
    return answersOptions.join(' or ');
  }
}
