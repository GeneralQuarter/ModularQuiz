import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {QuestionsPage} from "../pages/questions/questions";
import {EndPage} from "../pages/end/end";
import {QuestionService} from "../providers/question.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionsPage,
    EndPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
    EndPage
  ],
  providers: [
    QuestionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
