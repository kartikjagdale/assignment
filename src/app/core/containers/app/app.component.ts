import { Component } from '@angular/core';
import { CaseStudyService } from './../../services/case_study.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userCaseStudiesObj: Object;
	
  constructor(private caseStudyService: CaseStudyService) {		
	  this.userCaseStudiesObj = this.getUserCaseStudies();
  }

  getUserCaseStudies() {
    return this.caseStudyService.getUserCasteStudies();
  }
}
