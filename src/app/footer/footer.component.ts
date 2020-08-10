import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoFooter: any;
  logoFooterUrl: any;
  public copyrightYear;

  constructor() { }

  ngOnInit() {
    this.copyrightYear = new Date().getFullYear();
		// this.logoFooter = Globals.LOGOFOOTER;
	// 	this.logoFooterUrl = Globals.LOGOFOOTERURL;
  }
  restartQuiz(){
    location.href= ""
   }
}
