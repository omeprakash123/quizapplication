import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetquestionsService {

questionData;
  constructor(private http:HttpClient) { }
  getquestionslist(url){
   return this.http.get(url);
  }
  setquestionsdata(data){
    this.questionData = data;
    //alert(JSON.stringify(data))
  }
  sendquestionsdata(){
    return this.questionData;
  }
}
