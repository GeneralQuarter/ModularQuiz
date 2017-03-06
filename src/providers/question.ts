export class Question {
  private _text: string;
  answers: string[];
  private _answerRightIndex: number;
  private _answerText: string;

  constructor(text: string, answers: string[], answerRightIndex: number, answerText: string) {
    this._text = text;
    this.answers = answers;
    this._answerRightIndex = answerRightIndex;
    this._answerText = answerText;
  }


  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get answerRightIndex(): number {
    return this._answerRightIndex;
  }

  set answerRightIndex(value: number) {
    this._answerRightIndex = value;
  }

  get answerText(): string {
    return this._answerText;
  }

  set answerText(value: string) {
    this._answerText = value;
  }

  addAnswer(value: string) {
    if(this.answers.indexOf(value) === -1) {
      this.answers.push(value);
    }
  }

  removeAnswer(value: string) {
    let index: number = this.answers.indexOf(value);
    if(index !== -1) {
      this.answers.splice(index, 1);
    }
  }
}
