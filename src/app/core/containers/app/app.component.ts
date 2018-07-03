import { Component } from '@angular/core';
import { CaseStudyService } from './../../services/case_study.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userCaseStudiesObj: any;
  isQuestionSelected = false;
  selectedQuestion: any;
  selectedCase: any;
  selectedIndex: number = 0;
  constructor(private caseStudyService: CaseStudyService) {		
    this.caseStudyService.getAccessToken().subscribe(res => {
      localStorage.setItem('access_token', res.access_token);
      this.getUserCaseStudies();
    });
  }

  getUserCaseStudies() {
    return this.caseStudyService.getUserCasteStudies()
      .subscribe(res =>  {
        this.userCaseStudiesObj = res.user_company_case_study;
    })
  }

  // Returns Time Elapsed in Seconds;
  getTimeElapsed(): number {
    return this.userCaseStudiesObj.time_elapsed;
  }

  // Returns selected Question or first Question in an array
  getSelectedQuestion() {
    return this.selectedQuestion || this.userCaseStudiesObj.company_case_study.questions[0]; 
  }

  // Returns selected Case or first Case in an array
  getSelectedCase() {
    return this.selectedCase || this.userCaseStudiesObj.company_case_study.pages[0]; 
  }

  // Changes category to case or question and 
  // selectes content as per index value
  changeCategoryAndSelectContent(event: any) {
    if(event.isQuestionSelected){
      const questions = this.userCaseStudiesObj.company_case_study.questions;
      this.selectedIndex = event.index > (questions.length - 1) ? 0 : event.index;
      this.selectedQuestion = questions[this.selectedIndex]
      this.isQuestionSelected = true;
    } else {
      const cases = this.userCaseStudiesObj.company_case_study.pages;
      this.selectedIndex = event.index > (cases.length - 1) ? 0 : event.index;
      this.selectedCase = cases[this.selectedIndex]
      this.isQuestionSelected = false;
    }
  }
}
