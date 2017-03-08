export class Answer {
  private _option: string;
  private _message: string;
  private _correct: boolean;

  constructor(option: string, message: string, correct: boolean) {
    this._option = option;
    this._message = message;
    this._correct = correct;
  }

  get option(): string {
    return this._option;
  }

  get message(): string {
    return this._message;
  }

  get correct(): boolean {
    return this._correct;
  }
}
