import {Question} from "./question";
import {Injectable} from "@angular/core";

@Injectable()
export class QuestionService {
  private _questions: Question[];

  constructor() {
    this._questions = [
      new Question("Are you there", ["Yes", "No", "Don't know"], 0, "We are we"),
      new Question("What's your name", ["Alain", "Bambi", "Don't have any"], 0, "What a beautifil name"),
      new Question("Is is the last question", ["Yes", "No", "Don't know"], 0, "It is")
    ];
  }

  get questions(): Question[] {
    return this._questions;
  }
}
