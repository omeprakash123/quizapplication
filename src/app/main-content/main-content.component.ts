import { Component, OnInit } from '@angular/core';
import {GetquestionsService} from '../services/getquestions.service';
import {Router} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"; 


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  difficultySelected:any;
  displayDiv:boolean= true;
  questionsResp:any;
  easyURL: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  mediumURL: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
  diffURL: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple";

  
  /* currentQuestion: any = {
		category:"",
		type:"",
    difficulty:"",
    question:"",
		correct_answer:"",
		incorrect_answers:""
	}

  
  data = {
    results : []
  }
  questionRecived: any;
  optionA: any;
  optionB: any;
  optionC: any;
  optionD: any; */
  displayQuestionDiv:boolean = true;
  
  constructor( private getquestions:GetquestionsService, private router:Router, private SpinnerService: NgxSpinnerService) { }
 
  ngOnInit() {
    this.displayDiv= true;
  }

  


  getDifficultyLevel(difficultySelected){
   // alert(difficultySelected);
    //this.getquestions.getquestionslist();
    this.SpinnerService.show();
    if(difficultySelected==="easy"){
     // alert(difficultySelected+" : "+ this.getquestions.getquestionslist());
     this.getquestions.getquestionslist(this.easyURL).subscribe(data=>{
       this.getquestions.setquestionsdata(data);
       this.questionsResp = JSON.stringify(data);
      // console.log(JSON.stringify(data));
       //  return data;
      this.router.navigateByUrl("questions");
      this.SpinnerService.hide();
     }
     )
     this.displayDiv = false;
    }
    else if(difficultySelected==="medium"){
     // alert(difficultySelected+" : "+ this.getquestions.questionData);
     this.getquestions.getquestionslist(this.mediumURL).subscribe(data=>{
      this.getquestions.setquestionsdata(data);
    //  alert(JSON.stringify(data));
     // console.log(data);
        //  this.questionRecived = data.results[0].question;
        //  this.optionA = data.results[0].incorrect_answers[0];
        //  this.optionB = data.results[0].correct_answer;
        //  this.optionC = data.results[0].incorrect_answers[1];
        //  this.optionD = data.results[0].incorrect_answers[2];
      // return data;

      this.router.navigateByUrl("questions");
      this.SpinnerService.hide();
    }
    )
      this.displayDiv = false;
    }
    else if(difficultySelected==="hard"){
     // alert(difficultySelected+" : "+ this.getquestions.questionData);
     this.getquestions.getquestionslist(this.diffURL).subscribe(data=>{
      this.getquestions.setquestionsdata(data);
      this.questionsResp = JSON.stringify(data);
     // console.log(JSON.stringify(data));
    //  return data;
      this.router.navigateByUrl("questions");
      this.SpinnerService.hide();
    }
    ) 
     this.displayDiv = false;
    }
    else{
      alert("Please specify the difficulty level to proceed");
      this.displayDiv = true;
      this.SpinnerService.hide();
    }
  }
  }
