import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"
//import { GetQuestionsService } from 'srcA/app/services/get-questions.service';
import { GetquestionsService } from '../services/getquestions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions:any;
  currentQuestion:any ={
   category: "",
   correct_answer: "",
   difficulty: "",
   incorrect_answers:  [],
   question: "",
   type: ""
  }
   display:boolean = false;
  questionCount:number = 0;
  questionTimer:number = 0;
  currentIndex:number = 0;
 
  currentAnsStatus:boolean = false;
  currentAns:any = "";
  nextButton:boolean = true;
 
  correctAnswerCount:number = 0;
 
 
  options:any[3] = [];

  constructor( private getquest: GetquestionsService) { }

  ngOnInit() {
     this.currentAnsStatus  = false;
    this.questionCount = 0;
    this.correctAnswerCount = 0;
    this.nextButton = true;
    
    this.getQuest();
    this.questionTimerMethod();
  }
 
  // getQuestionList(){
  //   this.getquest.questionData
  //  }

  getQuest(){
    this.questions = this.getquest.questionData;
    this.currentQuestion.category = this.questions.results[this.questionCount].category;
    this.currentQuestion.correct_answer = this.questions.results[this.questionCount].correct_answer;
    this.currentQuestion.difficulty = this.questions.results[this.questionCount].difficulty;
    this.currentQuestion.incorrect_answers = this.questions.results[this.questionCount].incorrect_answers;
    this.currentQuestion.question = this.questions.results[this.questionCount].question;
    this.currentQuestion.type = this.questions.results[this.questionCount].type;
    this.options[0] = this.currentQuestion.correct_answer;
    this.options[1] = this.currentQuestion.incorrect_answers[0];
    this.options[2] = this.currentQuestion.incorrect_answers[1];
    this.options[3] = this.currentQuestion.incorrect_answers[2];

    this.shuffleOptions(this.options);
    

    //this.getRandom(this.options);
   //  console.log('The questions in the questions variable is: ', this.questions);
   //  console.log('The currentQuestion is', this.currentQuestion);
   //  console.log('The options are ', this.options);
   
 }

/*  shuffle(options) {
  var ctr = options.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = options[ctr];
      options[ctr] = options[index];
      options[index] = temp;
  }
  return options;
} */

 answerSelect(ans, i){
  this.currentAnsStatus = true;
  this.currentAns = ans;
  if(this.currentAns==this.currentQuestion.correct_answer){
   this.correctAnswerCount = this.correctAnswerCount+1;
  }
  this.currentIndex = i;
  this.display = true;
 }

 nextQuestion(){
   this.display = false;
   this.currentAns = "";
   this.questionTimer = 0;
   if(this.questionCount<9){
     this.questionCount = this.questionCount+1;
   }
   else{
    this.nextButton = false;
   }
   
   this.getQuest();
   
 }

 questionTimerMethod(){
   this.questionTimer = 0;
   setInterval(()=>{
     this.questionTimer = this.questionTimer +1;
     if(this.questionTimer > 10){
       this.questionTimer = 0;
      this.nextQuestion();
     }
   }, 1000);
  
 }

 shuffleOptions(arra1){
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
      while (ctr > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
          ctr--;
  // And swap the last element with it
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }


}
